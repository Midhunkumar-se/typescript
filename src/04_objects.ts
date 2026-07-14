type User = {
  id: number; // required
  name: string;
  email?: string; //optional (could be absent)
  readonly createdAt: Date; // can not be reassigned
};

const user1: User = { id: 1, name: "sangam", createdAt: new Date() };
const user2: User = {
  id: 2,
  name: "John",
  createdAt: new Date(),
  email: "john@gmail.com",
};

// user1.createdAt = new Date(); -> get error

type User2 = {
  email?: string;
};

type User3 = {
  email: string | undefined;
};

type count = { [k: string]: number };
type Count2 = Record<"likes" | "views" | "shares", number>;

const c1: count = { whatever: 1 };
const c2: Count2 = { likes: 1, views: 2, shares: 3 };
