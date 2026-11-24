// Entry for make.fun's "Make the AI Judge Laugh: Cat Reviews Its Human".
//
// The whole program is one job: put a single line — a one-star review
// written by a house cat about its human — into entry.txt inside the
// output directory, byte for byte the same on every run. The grader
// points MAKEFUN_OUTPUT_DIR at its own scratch output folder; on a
// plain machine the fallback is /output, the path the competition reads.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the line lands in out/entry.txt, with no trailing newline: the
// judge reads exactly what is in the file, so the text below is the
// entire entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The review itself, in a deadpan feline voice: the human threw away
// the cat's favourite box — not trash to the cat, but a castle — and
// the cat now considers itself homeless. Specific complaint (the box),
// unmistakably cat standards (a box is a castle), sting in the last
// few words.
const REVIEW =
  "One star. He moved my favourite box to the recycling. It was not recycling. It was a castle. I am now homeless.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Competition limits ("Make the AI Judge Laugh: Cat Reviews Its Human"):
// the entry must be a single line of 1 to 200 characters. Enforced here
// so a bad edit fails loudly instead of silently producing an entry the
// judge rejects.
const MIN_LINE_LENGTH = 1;
const MAX_LINE_LENGTH = 200;

function validateLine(line) {
  if (line.length < MIN_LINE_LENGTH || line.length > MAX_LINE_LENGTH) {
    throw new Error(
      `Line must be ${MIN_LINE_LENGTH}-${MAX_LINE_LENGTH} characters, got ${line.length}.`,
    );
  }
  if (line.includes('\n') || line.includes('\r')) {
    throw new Error('Line must be a single line (no newline characters).');
  }
  // The gate rejects whitespace-only text, so fail loudly here too.
  if (line.trim().length === 0) {
    throw new Error('Line must not be only whitespace.');
  }
  // No leading or trailing spaces: the judge reads the file exactly,
  // so stray padding would be part of the entry.
  if (line !== line.trim()) {
    throw new Error('Line must not start or end with whitespace.');
  }
}

validateLine(REVIEW);

writeFileSync(join(outputDir, 'entry.txt'), REVIEW, 'utf8');
