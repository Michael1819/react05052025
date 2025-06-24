const { errorHandler } = require("../middlewares/errorHandler");
const { CustomError } = require("../errors/CustomError");

test("handles CustomError with structured response", () => {
  const err = new CustomError("Forbidden", 403);
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };
  const next = jest.fn();

  errorHandler(err, req, res, next);

  expect(res.status).toHaveBeenCalledWith(403);
  expect(res.send).toHaveBeenCalledWith({ errors: [{ message: "Forbidden" }] });
});

test("handles unknown error", () => {
  const err = new Error("Unknown error");
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };
  const next = jest.fn();

  errorHandler(err, req, res, next);

  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.send).toHaveBeenCalledWith({
    errors: [{ message: "Something went wrong" }]
  });
});
