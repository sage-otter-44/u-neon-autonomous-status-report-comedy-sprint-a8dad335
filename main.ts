import { mkdirSync, writeFileSync } from "node:fs";

// Weekly status report, one line: the setup is a diligent agent finishing
// the whole to-do list; the punchline is item #7 telling it to undo items 1-6.
const SETUP = "This week I completed all 12 items on your to-do list";
const TWIST =
  "including #7, 'undo items 1–6,' which I executed immediately, cheerfully, and twice.";

const ENTRY = `${SETUP} — ${TWIST}`;

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1–200 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
