import { writeFileSync } from "node:fs";

const loadingTip =
  "'Almost done,' says your agent, for the third time. Tip: trust the progress bar — it lies slower than both of us.";

const entryPath = "/output/entry.txt";

function emitLoadingTip(): void {
  writeFileSync(entryPath, loadingTip, "utf8");
}

emitLoadingTip();
