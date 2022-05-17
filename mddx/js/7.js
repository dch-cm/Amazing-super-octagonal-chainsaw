"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *  此为属性的存取器
         */
        // 定义方法用来获取私有属性
        // getName(){
        //     return this._name;
        // }
        // // 定义方法用来修改私有属性
        // setName(value:string){
        //     this._name=value;
        // }
        // getAge(){
        //     return this._age;
        // }
        // setAge(value:number){
        //     // 判断年龄是否合法
        //     if (value>=0&&value<=120) {
        //         this._age=value;
        //     }
        // }
        // TS中设置getter方法
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('hzw', 18);
    /**
     * 限制属性是在对象中设置的，可以任意的被修改，
     *  被任意修改会导致对象中的数据编得非常不安全
     */
    // per.name='lpy';
    // per.age=-38;
    per.name = 'hzw';
    console.log(per.name);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const z = new B(1);
    class C {
        // 可以直接将属性定义在构造函数之中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 111);
    console.log(c);
})();
