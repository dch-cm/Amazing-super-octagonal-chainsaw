"use strict";
class Dog {
    /**
     *  constructor 此为构造函数
     *  构造函数会在对象被创建时被调用
     *  可以在此函数中通过this向新建的对象中添加属性
     */
    constructor(name, age) {
        // console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}
const dog = new Dog('寄摆', 2);
const dog2 = new Dog('刘橙', 3);
// console.log(dog);
// console.log(dog2);
dog2.bark();
