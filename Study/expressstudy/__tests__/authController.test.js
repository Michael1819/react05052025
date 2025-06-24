const { signup } = require("../controllers/authController");
const { CustomError } = require("../errors/CustomError");

describe("signup controller", () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {} };
    res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    next = jest.fn();
  });

  test("should throw error when username or password is missing", () => {
    signup(req, res, next);
    expect(next).toHaveBeenCalledWith(expect.any(CustomError));
    const error = next.mock.calls[0][0];
    expect(error.message).toBe("Username and password are required");
    expect(error.statusCode).toBe(400);
  });

  test("should create user and send success message", () => {
    req.body = { username: "user1", password: "pass1" };
    signup(req, res, next);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith("Signup successful");
  });
});
