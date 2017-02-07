
sample3();
function sample3(){
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
}
// /*----------------------------------------------------------*/
// sample();
function sample(){
	for(let i=0;i<3;i++){
		console.log("inside function"+i);

	}
	console.log("outside"+i);
}
// /*----------------------------------------------------------*/
enum Color {Red = 3, Green, Blue};
let colorName: string = Color[3];
alert(colorName);
function trial(condition, x) {
    if (condition) {
        let x = 100;
         alert("inside if "+x);
        return x;

    }
    alert("oustside if "+x);
    return x;
}

trial(false, 0); 
trial(true, 0);  

// /*----------------------------------------------------------*/
const person={
	name:"aliya",
	age:23	
}
const variable = "dyyyy";
variable ="bck";
person.name="xyz";
alert(variable);
alert(person.name);
// /*----------------------------------------------------------*/
let input = [1, 2];
let [first, second] = input;
console.log(first); 
console.log(second); 
[first,second]=[second,first];
console.log(first); 
console.log(second); 
try1(input);
function try1([first,second]:[number,number]){
	console.log(first);
	console.log(second);
}
let[,first,,second]=[1,2,3,4];
console.log(first);
let obj={
	a:5,
	b:6,
	c: "foo",
	d:"bar"
}
let [p,...rest]=[1,2,3,4];
console.log(p,rest);
let {a: X , b: Y }  = obj;
console.log(X,Y);
/*------------------------------------------------------------*/
let a=[1,2];
let b=[3,4]];
let c=[0,...a,...b,5];
console.log(c);

let details={name:"aliya",age:23};
let sample={...details,place:"kottayam"};
console.log(sample);

interface trial{
    label: string;
}

function printLabel(labelledObj: trial) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "xyz"};
printLabel(myObj);

/*----------------------------------------------------------*/
class base1 {
    name: string;
    constructor(theName: string) { this.name = theName; }
    age(age: number = 0) {
        console.log(`${this.name} aged ${age}yrs.`);
    }
}

class a extends base1 {
    constructor(name: string) { super(name); }
    age(age = 5) {
        super.age(age);
    }
}

class b extends base1 {
    constructor(name: string) { super(name); }
    age(age= 45) {
        super.age(age);
    }
}

let x = new a("Sample");
let y: base1 = new b("xyz");

x.age();
y.agee(34);