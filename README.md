# fkagy

An Oh My Pi (OMP) extension that removes known OMP/Pi identity declarations at the start of lines in the system prompt, case-insensitively. It leaves user messages, tools, and client metadata unchanged. It is not an anonymity tool.

## Install

Download `fkagy.ts` into `~/.omp/agent/extensions/` and restart OMP. If upgrading from `strip-harness-identity.ts`, replace the old file instead of loading both. Tested with OMP 18.20.3 on macOS and Arch Linux.

MIT licensed.
