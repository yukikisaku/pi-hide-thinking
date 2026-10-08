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

Pull requests are reviewed by AI and automatically merged when the review and CI pass.

## License

MIT © yuki-kisaku. See [LICENSE](LICENSE).
