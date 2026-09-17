import {assert, test} from "vitest";
import {dedollar} from "./observable.js";

test("unescapes viewof$", () => {
  assert.strictEqual(dedollar("viewof$foo"), "viewof foo");
  assert.strictEqual(dedollar("viewof$a"), "viewof a");
  assert.strictEqual(dedollar("viewof$$foo"), "viewof$foo");
  assert.strictEqual(dedollar("viewof$$$foo"), "viewof$$foo");
});

test("unescapes mutable$", () => {
  assert.strictEqual(dedollar("mutable$foo"), "mutable foo");
  assert.strictEqual(dedollar("mutable$a"), "mutable a");
  assert.strictEqual(dedollar("mutable$$foo"), "mutable$foo");
  assert.strictEqual(dedollar("mutable$$$foo"), "mutable$$foo");
});

test("does not affect other dollar signs", () => {
  assert.strictEqual(dedollar("viewof$"), "viewof$");
  assert.strictEqual(dedollar("viewof$$"), "viewof$$");
  assert.strictEqual(dedollar("viewof$$$"), "viewof$$$");
  assert.strictEqual(dedollar("$viewof"), "$viewof");
  assert.strictEqual(dedollar("mutable$"), "mutable$");
  assert.strictEqual(dedollar("mutable$$"), "mutable$$");
  assert.strictEqual(dedollar("mutable$$$"), "mutable$$$");
  assert.strictEqual(dedollar("$mutable"), "$mutable");
  assert.strictEqual(dedollar("view$foo"), "view$foo");
  assert.strictEqual(dedollar("view$a"), "view$a");
  assert.strictEqual(dedollar("view$$foo"), "view$$foo");
  assert.strictEqual(dedollar("view$$$foo"), "view$$$foo");
  assert.strictEqual(dedollar("$"), "$");
  assert.strictEqual(dedollar("$$"), "$$");
  assert.strictEqual(dedollar("$$$"), "$$$");
  assert.strictEqual(dedollar("$_"), "$_");
  assert.strictEqual(dedollar("$$_"), "$$_");
  assert.strictEqual(dedollar("_$"), "_$");
  assert.strictEqual(dedollar("_$$"), "_$$");
  assert.strictEqual(dedollar("__$"), "__$");
  assert.strictEqual(dedollar("__$$"), "__$$");
});
