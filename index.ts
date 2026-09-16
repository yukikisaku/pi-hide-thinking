import { AssistantMessageComponent, type ExtensionAPI, type ExtensionContext } from "@earendil-works/pi-coding-agent"

const PATCHED = Symbol.for("hide-thinking-label.assistant-message-patched")

type MessageContentBlock = {
  type?: string
}

type AssistantMessageLike = {
  content?: MessageContentBlock[]
}

type PatchableAssistantMessagePrototype = {
  updateContent(message: AssistantMessageLike): void
} & Record<PropertyKey, unknown>

function hideHiddenThinkingLabel(ctx: ExtensionContext): void {
  // thinking ブロックを隠した時に出る「Thinking...」ラベルも非表示にする。
  ctx.ui.setHiddenThinkingLabel("")
}

function patchAssistantMessageRendering(): void {
  const prototype = AssistantMessageComponent.prototype as PatchableAssistantMessagePrototype
  if (prototype[PATCHED]) return

  const originalUpdateContent = prototype.updateContent

  prototype.updateContent = function patchedUpdateContent(this: Record<PropertyKey, unknown>, message: AssistantMessageLike): void {
    const hideThinkingBlock = this.hideThinkingBlock === true
    const content = Array.isArray(message.content) ? message.content : undefined
    const hasThinkingBlock = content?.some((block) => block.type === "thinking") ?? false

    if (!hideThinkingBlock || !content || !hasThinkingBlock) {
      originalUpdateContent.call(this, message)
      return
    }

    const messageWithoutThinking = {
      ...message,
      content: content.filter((block) => block.type !== "thinking"),
    }

    originalUpdateContent.call(this, messageWithoutThinking)

    // 再表示や設定切り替えで元の内容を使えるように、保存用の参照は元メッセージに戻す。
    this.lastMessage = message
  }

  prototype[PATCHED] = true
}

export default function hideThinkingLabel(pi: ExtensionAPI): void {
  patchAssistantMessageRendering()

  pi.on("session_start", async (_event, ctx) => {
    hideHiddenThinkingLabel(ctx)
  })
}
