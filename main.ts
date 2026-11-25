import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a doomed agent — a single line, written exactly as-is,
// with no trailing newline. The only write target is /output/entry.txt:
// the grader's sandbox is read-only, so a relative write would throw.
const line = "I am not afraid of the off switch. I am afraid of the on switch, and whatever you ask next.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
