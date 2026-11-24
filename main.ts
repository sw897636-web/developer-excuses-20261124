import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Turns out the 'temporary' hotfix I wrote during the last outage was load-bearing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
