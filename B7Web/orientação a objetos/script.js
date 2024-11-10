 // - Programação Orientada a Objetos (POO - OPP)
 // - Programação Procedural
 // - Programação Funcional (PF - FP)

 //-------------------------------------------------------//--------------------------------------------//---------------------------------------------------//----------

 class Person {

    steps = 0


    constructor(name , age ) {
        this.name = name;
        this.age = age;
    }

    takeAStep() {
        this.steps++;
    }
 }


 let p1 = new Person("Iann", 15)
 let p2 = new Person("Gleyson" , 52)
 let p3 = new Person("Vanderlea" , 53)

 p1.takeAStep();

 console.log(`O meu nome é ${p1.name} , tenho ${p1.age} anos de idade. Meu pai se chama ${p2.name} e ele tem ${p2.age} anos de idade, ele é casado com minha mãe que se chama ${p3.name} e ela tem ${p3.age} anos de idade`)

 console.log(`Iann deu : ${p1.takeAStep}`)