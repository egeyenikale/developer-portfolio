import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Developer Portfolio exposes project metadata", () => {
  assert.equal(project.slug, "developer-portfolio");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
