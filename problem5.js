
var num1=123456;
num1=num1+"";
var arr=[];
for(var i=0;i<=num1.length-1;i++){

    arr.push(num1[i]);
}
var i=arr.length-1;
var rev=[];

while(i>=0){

    rev.push(num1[i]);i--;
}

var str="";
for(var k=0;k<rev.length;k++){
    
    str=str+rev[k];
}
console.log(str);








