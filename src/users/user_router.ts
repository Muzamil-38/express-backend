import express from "express";
import type { Response, Request } from "express";
import { body, validationResult } from "express-validator";

import * as UserService from "./users_service";

export const userRouter = express.Router();

userRouter.post(
  "/",
  body("email").isString(),
  body("password").isString(),
  body("name").isString(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = req.body;
      const newUser = await UserService.createUser(user);
      return res.status(200).json(newUser);
    } catch (error: any) {
      return res.status(500).json(error.json());
    }
  }
);
