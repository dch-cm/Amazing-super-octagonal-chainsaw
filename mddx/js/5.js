"use strict";
(function () {
    /***
     * 以abstract开头的类是抽象类
     *  抽象类与其它类的区别只有不能用来创建对象
     *  抽象类是专门用来被继承的类
     *
     *  抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        say() {
            console.log('汪汪汪~');
        }
    }
    class Cat extends Animal {
        say() {
            console.log('喵喵喵喵~');
        }
    }
    const dog = new Dog('旺财');
    // dog.say();
})();
