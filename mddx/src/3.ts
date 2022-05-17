/**
 * OCP原则：
 *  编写代码时不要随意修改自己不熟悉的类
 * 只能对它进行拓展
 */





(function () {
    
    // 定义一个Animal类
    class Animal{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name=name;
            this.age=age;
        }
        say(){
            console.log(this.name+'：有什么东西在叫');
        
    }
    }

    /***
     *  Dog extends Animal
     *  Animal类为父类 Dog类为子类
     *  使用继承符后，子类会拥有父类所有的方法与属性
     *  通过继承即可将多个类中共有的代码集成在一个父类中
     *      如此便只需要写一次就可让所有需要这段代码的类都同时拥有父类中的属性
     *  若子类中添加了与父类相同的方法，则子类方法会覆盖父类的方法
     *      这种子类方法覆盖父类方法的形式 被称为“方法重写”
     */

    // 定义一个狗的类
    // 使狗类继承动物类
    class Dog extends Animal{
        run(){
            console.log(this.name+'在跑~');
        }
    }
    // 定义一个猫的类
    class Cat extends Animal{
        say(): void {
            console.log(this.name+'：喵喵喵喵喵喵~');
        }
    }

    

    const dog=new Dog('hzw',5)
    const cat=new Cat('咪咪',3)
    console.log(dog);
    console.log(cat);
    dog.run();
    cat.say()
})();