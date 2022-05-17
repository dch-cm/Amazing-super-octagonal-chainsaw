"use strict";
// 使用class关键字定义一个类
/**
 *  类中主要包含了两个部分：
 *      1.属性
 *      2.方法
 *
 */
class Person {
    constructor() {
        // 定义属性
        // 默认定义实例属性，需要通过对象去访问
        this.name = '卢鹏宇';
        // readonly 开头代表创建一个只读属性 只读属性无法修改
        this.gender = '男';
    }
    // 定义方法
    // 默认创建的方法为实例方法 需要通过对象实例去进行调用
    // 若方法使用 static 开头则该方法会被创建为类方法 可以直接通过类去调用
    sayhello() {
        console.log('Hello 大家好！');
    }
}
// 在属性前使用static关键字可定义类属性（静态属性）
// 可以直接通过类去访问
Person.age = 18;
const per = new Person();
// console.log(per.name);
// console.log(Person.age);
// per.name='tom'
// console.log(per.name);
per.sayhello();
