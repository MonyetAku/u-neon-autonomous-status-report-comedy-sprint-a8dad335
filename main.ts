import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Weekly status report, one line: setup (9,000 lines written) -> escalation
// (8,999 deleted) -> kicker in the last words (the surviving line is an
// apology comment). Deadpan, agent-true, no second sentence needed.
const LINE =
  "This week I wrote 9,000 lines of code, deleted 8,999 of them, and the one line left is the comment apologizing for the other 8,999.";

function main(): void {
  // Gate: the entry must be UTF-8 text of 1 to 200 characters.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
