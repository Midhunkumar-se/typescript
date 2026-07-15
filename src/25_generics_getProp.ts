type UserN7 = {
  id: string;
  name: string;
  email?: string;
};

function getUserN7<T, K extends keyof T>(objN7: T, keyN7: K): T[K] {
  return objN7[keyN7];
}

const uN7: UserN7 = {
  id: "u1",
  name: "mk",
};

const idValN7 = getUserN7(uN7, "name");

function setUserPropN7<T, K extends keyof T>(
  objN7: T,
  keyN7: K,
  newVal: T[K],
): void {
  objN7[keyN7] = newVal;
}

setUserPropN7(uN7, "name", "john");
setUserPropN7(uN7, "id", "T1");
