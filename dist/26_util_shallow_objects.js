"use strict";
const patch10 = { name: "sangam" };
const patch11 = { address: { line1: "line1", city: "ci" } };
const userAllPatch11 = {
    id: "u2",
    name: "name2",
    address: { line1: "line2", city: "sangam" },
    email: "test",
};
const readonlyUser = {
    id: "u3",
    name: "name",
    address: {
        line1: "line3",
        city: "city123",
    },
};
const publicUser = { id: "u5", name: "sangan34" };
const omitUserN10 = {
    id: "u4",
    name: "name5",
    address: {
        line1: "d",
        city: "f",
    },
};
const dirN10 = {
    admin: {
        id: "u10",
        name: "admin",
        address: { line1: "line1", city: "city" },
    },
    user: { id: "u11", name: "user", address: { line1: "line1", city: "city" } },
    editor: {
        id: "u12",
        name: "editor",
        address: { line1: "line1", city: "city" },
    },
};
/*
A shallow utility type only affects the top-level properties of an object. It does not recursively modify nested objects.

For example:

type User = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
};
1. Partial<T> (Shallow)

Makes all top-level properties optional.

type UserPartial = Partial<User>;

Equivalent to:

type UserPartial = {
  name?: string;
  age?: number;
  address?: {
    city: string;
    country: string;
  };
};

Notice:

address is optional.
But if address exists, city and country are still required.
const user: Partial<User> = {
  address: {
    city: "Chennai", // ❌ Error
    // country is missing
  },
};
2. Required<T>

Makes all top-level optional properties required.

type User = {
  name?: string;
  age?: number;
};

type FullUser = Required<User>;

Result:

type FullUser = {
  name: string;
  age: number;
};
3. Readonly<T>

Makes top-level properties read-only.

type UserReadonly = Readonly<User>;
const user: UserReadonly = {
  name: "Midhun",
  age: 25,
  address: {
    city: "Pondicherry",
    country: "India",
  },
};

user.name = "John"; // ❌ Error

user.address.city = "Chennai"; // ✅ Allowed

Readonly is shallow, so nested objects remain mutable.

4. Pick<T, K>

Selects only certain properties.

type User = {
  name: string;
  age: number;
  email: string;
};

type UserInfo = Pick<User, "name" | "email">;

Result:

type UserInfo = {
  name: string;
  email: string;
};
5. Omit<T, K>

Removes specified properties.

type UserWithoutAge = Omit<User, "age">;

Result:

type UserWithoutAge = {
  name: string;
  email: string;
};
6. Record<K, T>

Creates an object type from a set of keys.

type Roles = "admin" | "user" | "guest";

type Permissions = Record<Roles, boolean>;

Result:

type Permissions = {
  admin: boolean;
  user: boolean;
  guest: boolean;
};
Why are these called "shallow"?

Consider this type:

type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

If you do:

type P = Partial<User>;

You get:

{
  name?: string;
  address?: {
    city: string;
    country: string;
  };
}

The nested object is not changed.

It is not:

{
  name?: string;
  address?: {
    city?: string;
    country?: string;
  };
}

That would be a deep version (often called DeepPartial), which TypeScript does not provide as a built-in utility type.
*/
