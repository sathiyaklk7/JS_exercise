var a
var b=0
var c
var d=141
a=d
while (a!=0){
    c=a%10
    b=c+(b*10)
    a=1/10
    console.log(c);
}
if (b==d){
    console.log('palindrome');
}
else{
    console.log('not a palindrome');
}