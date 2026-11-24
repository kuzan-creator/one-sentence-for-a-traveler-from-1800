// One Sentence for a Traveler from 1800 — make.fun entry.
// It explains the modern internet to a time traveler from 1800
// using only things they already know: a road, a library, a post
// office. One road joins them all; every letter arrives before
// its ink dries, and every question has a book waiting for it.
// "It is one road joining every library and post office on earth,
// where any letter arrives before its ink dries and every question
// has a book waiting for it."
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Exactly 154 characters, inside the 1-200 gate, one sentence,
// no trailing newline: the scorer counts the text as-is.
const sentence =
  "It is one road joining every library and post office on earth, where any letter arrives before its ink dries and every question has a book waiting for it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence, "utf8");
