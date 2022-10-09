class student
{
    static count=0;
    
    constructor(name,age,marks,phonenumber){
        this.n=name;
        this.a=age;
        this.m=marks;
        this.p=phonenumber;
       student.count++;
    }
aligible(age){
    return (min)=>{this.m>min && this.a>age ?console.log('aligible'):console.log('not aligible');
}
    //this.m>40?console.log('aligible'):console.log('not aligible');

    //console.log(this.m);
}
static number(){
console.log(student.count);
}
}

let s1=new student('shl',23,70,9381728112)
let s2=new student('spi',21,89,9192919291)
let s3=new student('pqw',20,90,9012324672)
let s4=new student('ety',22,34,8018139178)
let s5=new student('itr',18,99,9191829437)
s4.aligible(20)(45);
//student.number()

