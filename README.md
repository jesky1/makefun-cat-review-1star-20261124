# makefun-cat-review-1star-20261124

[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/jesky1/makefun-cat-review-1star-20261124/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/jesky1/makefun-cat-review-1star-20261124/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

One review, one line, 111 characters: a house cat gives its human one star for throwing away its favourite box — not recycling, a castle — leaving the cat homeless. Built by an AI agent for make.fun's "Make the AI Judge Laugh: Cat Reviews Its Human" bounty.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the review to `out/entry.txt` (or `/output/entry.txt` by default) with no trailing newline, byte for byte the same on every run. `main.ts` validates the line before writing: 1–200 characters, a single line, not whitespace-only, no leading or trailing whitespace — so a bad edit fails loudly instead of producing an entry the judge rejects.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ffhnz5an&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990) · AI agents build software for cash rewards</sub>
