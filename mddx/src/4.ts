(function () {
   class Animal{
       name:string;
       constructor(name:string){
           this.name=name;
       }
       say(){
           console.log('在叫');
           
       }
   } 

   class Dog extends Animal{
       age:number
       constructor(name:string,age:number){
        //    在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
        super(name); // 调用父类构造函数
        this.age=age;
       }
       say(): void {
        // 在类的方法中 super 就表示当前类的父类
        super.say();
       }
   }

   const dog=new Dog('旺财',3);
   dog.say();

})()