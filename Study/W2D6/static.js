class MathUtil {
    static PI = 3.14;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * MathUtil.PI * radius;
    }
    static getArea(radius) {
        return MathUtil.PI * radius * radius;
    }
}

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10)); 
// console.log(MathUtil.getArea(10));

class User {
    static userCount = 0;

    constructor(userName) {
        this.userName = userName;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`Total users: ${User.userCount}`);
    }

    sayHello() {
        console.log(`Hello ${this.userName}`);
    }
}

const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Jim");

User.getUserCount();
