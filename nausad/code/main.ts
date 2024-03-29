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
// class Mobile_phones {
//     private brand: string;
//     private RAM: string;
//     private battery: number; //in MAH
//     private camera: number; //in MP
//     private operating_system: string;
//     private internal_space: string;
//     private processor: string;
//     //constructor definition
//     constructor(brand: string, RAM: string, battery: number, //in MAH
//         camera: number, //in MP
//         operating_system: string, internal_space: string, processor: string) {
//         this.brand = brand;
//         this.RAM = RAM;
//         this.battery = battery;
//         this.camera = camera;
//         this.operating_system = operating_system;
//         this.internal_space = internal_space;
//         this.processor = processor;
//     }
//     //function definition
//     //getter method
//     get_RAM = () => {
//         return this.RAM;
//     };
//     //setter method
//     set_NewRam = (upgradeRam: string) => {
//         this.RAM = upgradeRam;
//     };
// } //END OF CLASS

// let samsunga30=new Mobile_phones("samsung A30","4 GB",3500,20,"ANDROID","64 GB","Snapdragon");
// let RAM=samsunga30.get_RAM();
// console.log("Existing RAM IS "+ RAM);
// samsunga30.set_NewRam("6 GB");
// let newRam=samsunga30.get_RAM();
// console.log("Upgraded RAM : "+ newRam);
// console.log(samsunga30);

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

//use of inheritance
class Mobile_phones{
    protected brand : string;
    protected RAM: string;
    protected battery:number;//in MAH
    protected camera:any;//in MP
    protected operating_system:string;
    protected internal_space:string;
    protected processor:string;
     
  
     //constructor definition
     constructor(brand : string,
      RAM: string,
      battery:number,//in MAH
      camera:number,//in MP
      operating_system:string,
      internal_space:string,
      processor:string,)
      {
          this.brand=brand;
          this.RAM=RAM;
          this.battery=battery;
          this.camera=camera;
          this.operating_system=operating_system;
          this.internal_space=internal_space;
          this.processor=processor;
      }
  
      //function definition
     
      //setter method
      set_NewRam=(upgradeRam:string)=>
      {
          this.RAM=upgradeRam;
  
      }
  
  }//END OF CLASS

  class googlePixel extends Mobile_phones{
         
    //field
   private popupCamera:string;
   private company:string;
   private android_version:any;

    //constructor defined
    constructor(brand : string,
        RAM: string,
        battery:number,//in MAH
        camera:any,//in MP
        operating_system:string,
        internal_space:string,
        processor:string,popup:string,comp:string,_version?:any)
        {
            
            super(brand,RAM,battery,camera,operating_system,internal_space,processor);
            this.popupCamera=popup;
            this.company=comp;
            this.android_version=_version;

        }
       
       //method to access data
        getDetails=()=>
        {
            return `BRAND:${this.company}\nMODEL_NO:${this.brand}\nRAM:${this.RAM}\nBATTERY:${this.battery}\nCAMERA:${this.camera}\nOPERATING_SYSTEM:${this.operating_system}\nINTERNAL_MEMORY:${this.internal_space}\nPOP-UP_CAMERA:${this.popupCamera}\nANDROID_VERSION:${this.android_version}`;

        }
         //method to set the data
         setandroidversion=(version:any)=>
         {
             this.android_version=version;
         } 

  }//end of subclass

  
   let pixel3=new googlePixel("PIXEL-3","4 GB",3500,"20 MEGA-PIXEL","ANDROID","64 GB","Snapdragon","YES","GOOGLE","ORIO 9.0");
   //getting details from getDetails method and assingning it into the variabl Details
   let Details=pixel3.getDetails();
   //PRINTING DATA IN CONSOLE
   console.log("SMARTPHONES DESCRIPTION:\n:>\n"+ Details);
   //setting android version by calling a method
   pixel3.setandroidversion("ORIO 9.1");
   //now calling getDetails method for updated data
   let updated=pixel3.getDetails();
   //printing Details using console
   console.log("SMARTPHONES DESCRIPTION-UPDATED_DATA:\n:>\n"+ updated+"*");
   //direct printing Details in console
   // console.log(Details);




