//this is a typscript file 
// let myFirstVariable:String = "welcome u to typescript nausad"
// console.log(myFirstVariable)
// let number_of_friends=(friends:any)=>{
//     if(typeof friends=="string")
//     {
//         return "you have only one friend!";
//     }
//     else
//     {
//         let message=`you have ${friends.length} friends`;
//         return message;
//     }
// }
// console.log(number_of_friends("aditya"));
// console.log(number_of_friends(["nausad","rahul","mota"]));
// let multiply=(x:number,y?:number)=>{
//     if(y){
//         return x*y;
//     }
//     else{
//         return x*x;
//     }
// }
// console.log(multiply(2));
// console.log(multiply(2,7));
//rest parameter
// let all_people_i_want_to_invite:string[]=[];
// let push_to_party_list=(...people:string[])=>
// {
//     //console.log(people);
//     let new_people_array=people;
//     all_people_i_want_to_invite=all_people_i_want_to_invite.concat(new_people_array);
//     console.log(all_people_i_want_to_invite);
//     return (all_people_i_want_to_invite);
// }
// push_to_party_list("aditya","nausad","rahul");
// push_to_party_list("neha","minakhi","hasan");
//this keyword in javascript
// hello=(thing)=>{
//     console.log(this);
//     console.log(this + " say hello" + thing);
// }
// hello("world");
//lexical binding
// let my_name={
//     first_name:"Nausad",
//     last_name:"Ansari",
//     calculate_full_name(){
//         return()=>{
//             console.log(this);
//             console.log(`Hi every one, my name is ${this.first_name} ${this.last_name}`);
//         }
//     }
// }
// let some_name=my_name.calculate_full_name();
// some_name();
//classes and oop
var Mobile_phones = /** @class */ (function () {
    //constructor definition
    function Mobile_phones(brand, RAM, battery, //in MAH
    camera, //in MP
    operating_system, internal_space, processor) {
        var _this = this;
        //function definition
        //getter method
        this.get_RAM = function () {
            return _this.RAM;
        };
        //setter method
        this.set_NewRam = function (upgradeRam) {
            _this.RAM = upgradeRam;
        };
        this.brand = brand;
        this.RAM = RAM;
        this.battery = battery;
        this.camera = camera;
        this.operating_system = operating_system;
        this.internal_space = internal_space;
        this.processor = processor;
    }
    return Mobile_phones;
}()); //END OF CLASS
var samsunga30 = new Mobile_phones("samsung A30", "4 GB", 3500, 20, "ANDROID", "64 GB", "Snapdragon");
var RAM = samsunga30.get_RAM();
console.log("Existing RAM IS " + RAM);
samsunga30.set_NewRam("6 GB");
var newRam = samsunga30.get_RAM();
console.log("Upgraded RAM : " + newRam);
console.log(samsunga30);
//uses of optional parameter in class
// class Animals{
//     limb:number;
//     color:string;
//     typeOfAnimal:string;
//     diet:string;
//     //constructor defination
//     constructor(
//         limb:number,
//         color:string,
//         typeOfAnimal:string,
//         diet?:string)
//         {
//             this.limb=limb;
//             this.color=color;
//             this.typeOfAnimal=typeOfAnimal;
//             this.diet=diet;
//         }
//         //function definition
//         getTypeOfAnimal=()=>{
//             return this.typeOfAnimal;
//         }
// }//end of class
// let tiger=new Animals(4,"Blue And Black","Mammal","carniverous");
// let snake=new Animals(0,"Brown","Reptile","carniverous");
// let lion=new Animals(4,"Brown","Mammal","Carniverous");
// let tigerType=tiger.getTypeOfAnimal();
// let snakeType=snake.getTypeOfAnimal();
// let lionType=lion.getTypeOfAnimal();
// console.log("Type Of Tiger : "+tigerType);
// console.log("Type Of Snake : "+snakeType);
// console.log("Type Of Lion : "+lionType);
// console.log("Diet Of Snake: "+snake.diet);
// console.log("Diet Of Tiger: "+tiger.diet);
// console.log("Diet Of Lion: "+lion.diet);
