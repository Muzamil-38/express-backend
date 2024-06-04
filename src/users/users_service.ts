import { db } from "../utils/db.server";

type User = {
  id: number;
  email: string;
  password: string;
  name: string;
};

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const { email, password, name } = user;
  return db.user.create({
    data: { email, password, name },
  });
};
