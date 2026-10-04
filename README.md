# pi-hide-thinking

## Overview

Hide thinking blocks and the hidden-thinking label in Pi's TUI.

## Requirements

Requires a compatible Pi assistant-message renderer. It patches rendering in the current process; original session data and model context are not changed.

## Installation

```sh
pi install npm:@yukikisaku/pi-hide-thinking
```

## Usage

Enable Pi's `hideThinkingBlock` setting and start Pi. Thinking content and the placeholder label are omitted from display.

## Configuration

Set `hideThinkingBlock` to `true` in Pi settings.

## Uninstallation

```sh
pi uninstall npm:@yukikisaku/pi-hide-thinking
```

Remove any package-specific configuration described above if you no longer need it.

## Pull requests

This repository includes a policy for automatic AI review and merge of incoming pull requests. It becomes active when the CI and merge workflows are on `main` and the maintainer's GitHub event automation is enabled; a draft setup PR does not activate it.

Once active, AI reviews each non-draft PR and it is merged automatically only when the review has no findings, required CI succeeds, and there are no conflicts or unresolved review threads. New commits require a new review. Changes to the automation itself require manual merge. See [AI review and merge operations](docs/ai-review-operations.md).

## License

MIT © yuki-kisaku. See [LICENSE](LICENSE).
