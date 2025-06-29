class userName{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
}
//2
const obj = {
  name: "Yitzchak",
  show: function () {
    console.log("obj:", this); 

    const innerArrow = () => {
      console.log("function obj:", this); 
    };

    innerArrow();
  }
};

obj.show();
//3
function logger(callback) {
  console.log("Logger Start");
  console.log("────────────────────");
  callback(); 
  console.log("────────────────────");
  console.log("Logger End");
}

const YS = new userName(`Yitzchak`);
//logger(YS.sayName);
logger(()=>YS.sayName());
//logger(YS.sayName.bind(YS)); // עוד אופציה שאפשר לקשר לTHIS


//4
let builder = {
     str:"",
     append(text){
        this.str+=text;
        return this;
     },
     upper(){
        this.str = this.str.toUpperCase()
        return this;
     },
     print(){
        console.log(this.str)
     }

}


builder.append("yitzchak  ").append("shaish").upper().print();

