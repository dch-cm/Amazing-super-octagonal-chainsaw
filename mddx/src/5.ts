(function () {
    
    /***
     * 以abstract开头的类是抽象类
     *  抽象类与其它类的区别只有不能用来创建对象
     *  抽象类是专门用来被继承的类
     * 
     *  抽象类中可以添加抽象方法
     */
    abstract class Animal{
        name:string;
        constructor(name:string){
            this.name=name;
        }
        //  定义一个抽象方法
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract say():void;
    } 
 
    class Dog extends Animal{
        say(): void {
         console.log('汪汪汪~');
         
        }
    }
 

    class Cat extends Animal{
        say(): void {
            console.log('喵喵喵喵~');
            
        }
    }


    const dog=new Dog('旺财');
    // dog.say();




})()