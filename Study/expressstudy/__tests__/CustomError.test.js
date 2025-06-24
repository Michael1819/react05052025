const { CustomError } = require("../errors/CustomError");

test("CustomError should contain statusCode, message, and optional logging", () => {
  const err = new CustomError("Invalid input", 422, true);
  expect(err.message).toBe("Invalid input");
  expect(err.statusCode).toBe(422);
  expect(err.errors).toEqual([{ message: "Invalid input" }]);
  expect(err.logging).toBe(true);
});
