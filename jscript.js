//Number
let a =10;
let b =20;
let c = a+ b;
console.log(c);

//String
 const fName = "Maha";
 const lName ="Devi";
 const name = fName + lName;
 console.log(name);
 
 //BigInt
 
 var m = BigInt("123456789101234567891012345678910");
 console.log(m);
 
//Boolean

var x = 20;
var y = 40;
var z = 20;
console.log(x==y);

//Undefined

var d;	//declare a variable without data/value
console.log(typeof(d));

//Null
var d = null;
console.log(typeof(d));
//Array

let colors = ["red", "green", "blue"];

console.log(typeof(colors));

//Object

let val = { firstname : "J", lastname: "Shri"}
console.log(typeof(val));
 
 
 
// Global Scope

var ab = 10;
{
	console.log(ab);
}
 
var ab = 15;
{

}
console.log(ab);

let ad = 20;
{
	console.log(ad);
}

let bc = 30;
{
	
}
console.log(bc);

//Local Scope

var abc = 10;
{
	var abcd = abc + 10;
	{
		
	}
}
 console.log(abcd);
 
let xy = 50;
{
	let yz = xy + 50;
	{

	}	
	console.log(xy);
}
console.log(yz);
