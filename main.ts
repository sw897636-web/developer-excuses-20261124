import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "In my defense, it worked on my machine. My machine just happens to be prod.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
