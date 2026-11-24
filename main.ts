import { mkdirSync, writeFileSync } from "node:fs";

// Loading Screen Gold — winning tip (V2).
// A one-line loading-screen tip for stressed developers and AI coding
// agents: the agent keeps saying "almost done", so the tip is to trust
// the progress bar instead — it lies slower than both of us.
// 113 characters, one line, deterministic: the same bytes every run.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
const TIP =
  "'Almost done,' says your agent, for the third time. Tip: trust the progress bar — it lies slower than both of us.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
