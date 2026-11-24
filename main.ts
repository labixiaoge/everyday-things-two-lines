// Everyday Things, Two Lines — make.fun bounty entry.
// Writes the two-line explanation to /output/entry.txt.
//
// Line 1 explains rain to a 10-year-old in a single vivid sentence built
// on one analogy: the sky wringing out a giant sponge. One sentence, one
// metaphor, nothing a 10-year-old cannot see, hold, or do with their hands.
// Line 2 says in one sentence why that analogy works: what it maps (clouds
// holding water and letting it fall in drops) and what it leaves out
// (nobody squeezes — cold air cools the vapor until the drops grow too
// heavy to stay up). It corrects the one wrong idea line 1 could plant,
// instead of praising the analogy.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "Rain is the sky wringing out a giant sponge, letting go of all the water the clouds have been holding.";
const LINE_2 =
  "It maps how clouds hold water and release it in drops, but leaves out that nobody squeezes them — cold air cools the vapor until the drops grow too heavy to stay up.";

const entry = `${LINE_1}\n${LINE_2}\n`;

// The gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters,
// and the entry is exactly two lines.
const lines = entry.split("\n").filter((line) => line.length > 0);
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry is ${entry.length} characters, must be 1-400`);
}
if (lines.length !== 2) {
  throw new Error(`entry has ${lines.length} lines, must be exactly 2`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} characters)`);
