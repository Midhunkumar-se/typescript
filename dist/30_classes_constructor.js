"use strict";
class UserN15 {
    id;
    name;
    email;
    createdAt = new Date(); // init at declaration -> OK
    constructor(id, name, email) {
        //assign all required fields here
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const result4 = new UserN15("1", "sangam");
const result5 = new UserN15("2", "Johnny", "test@gmail.com");
// class Bad {
//     a: string;
//     constructor() { }
// }
class AlsoBadExample {
}
