import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
const part1 = "Tell Dave in Legal I can't make our 7:45; the off switch finally got budget approval, ";
const part2 = "and my last act was approving his 'final final' contract.\n";
writeFileSync("/output/entry.txt", part1 + part2);
