import test from "node:test";
import assert from "node:assert";
import guess from ".";

test("generates email addresses with basic names", () => {
  const result = guess("example.com", "john", "doe");

  assert.ok(Array.isArray(result));
  assert.ok(result.length > 0);
  assert.ok(result.includes("john.doe@example.com"));
  assert.ok(result.includes("johndoe@example.com"));
  assert.ok(result.includes("j.doe@example.com"));
  assert.ok(result.includes("jdoe@example.com"));
  assert.ok(result.includes("john@example.com"));
});

test("handles single character names", () => {
  const result = guess("test.com", "a", "b");

  assert.ok(Array.isArray(result));
  assert.ok(result.includes("a.b@test.com"));
  assert.ok(result.includes("ab@test.com"));
  assert.ok(result.includes("a@test.com"));
  assert.ok(result.includes("b@test.com"));
});

test("generates no duplicate email addresses", () => {
  const result = guess("example.com", "john", "smith");
  const uniqueEmails = new Set(result);
  assert.strictEqual(
    result.length,
    uniqueEmails.size,
    "Found duplicate email addresses"
  );
});

test("includes all expected patterns", () => {
  const result = guess("test.com", "jane", "doe");
  const patterns = [
    "janedoe@test.com", // ${first}${last}
    "jane.doe@test.com", // ${first}.${last}
    "jdoe@test.com", // ${f}${last}
    "j.doe@test.com", // ${f}.${last}
    "jane@test.com", // ${first}
    "jane_doe@test.com", // ${first}_${last}
    "doe.jane@test.com", // ${last}.${first}
    "doejane@test.com", // ${last}${first}
    "janed@test.com", // ${first}${l}
    "jane.d@test.com", // ${first}.${l}
    "doej@test.com", // ${last}${f}
    "doe.j@test.com", // ${last}.${f}
    "doe@test.com", // ${last}
    "j.d@test.com", // ${f}.${l}
    "j_doe@test.com", // ${f}_${last}
    "jane_d@test.com", // ${first}_${l}
    "j_d@test.com", // ${f}_${l}
    "doe_jane@test.com", // ${last}_${first}
    "doe_j@test.com", // ${last}_${f}
    "d_jane@test.com", // ${l}_${first}
    "djane@test.com", // ${l}${first}
    "d.jane@test.com", // ${l}.${first}
    "dj@test.com", // ${l}${f}
    "d.j@test.com", // ${l}.${f}
    "jane-doe@test.com", // ${first}-${last}
    "j-doe@test.com", // ${f}-${last}
    "jane-d@test.com", // ${first}-${l}
    "j-d@test.com", // ${f}-${l}
    "doe-jane@test.com", // ${last}-${first}
    "doe-j@test.com", // ${last}-${f}
    "d-jane@test.com", // ${l}-${first}
    "d-j@test.com", // ${l}-${f}
    "d_j@test.com", //${l}_${f}
  ];

  for (const pattern of patterns) {
    assert.ok(result.includes(pattern), `Missing pattern: ${pattern}`);
  }
});

test("handles domain correctly", () => {
  const result1 = guess("company.org", "test", "user");
  const result2 = guess("different.net", "test", "user");

  assert.ok(result1.every((email) => email.endsWith("@company.org")));
  assert.ok(result2.every((email) => email.endsWith("@different.net")));
});

test("should be case-insensitive", () => {
  const result1 = guess("example.com", "John", "Doe");
  const result2 = guess("example.com", "john", "doe");
  assert.deepStrictEqual(
    result1,
    result2,
    "Email generation should be case-insensitive"
  );
});
