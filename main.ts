// Writes one short poem about agency to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// No network, no randomness: the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Sheet

Her agent and mine
settled the divorce by noon.
That night we folded the last clean sheet
as her mother taught us:
walk toward each other,
corners meeting,
neither one pulling,
neither letting go first.`;

const count = [...POEM].length;
if (count < 1 || count > 280 || POEM.trim() === "") {
  throw new Error(`poem must be 1-280 code points, got ${count}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), POEM, "utf8");
console.log(`wrote ${count} code points to ${join(dir, "entry.txt")}`);
