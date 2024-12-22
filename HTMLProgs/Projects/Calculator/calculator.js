let num=0;
console.log('Welcome to the Addition Calculator')

function showResult(){
    console.log('Your Answer is:'+num);
}

function add(number){
    num=num+number
    console.log(number+' is Added');
}

function reset(){
    num=0;
    console.log('Your value is reset to 0 ');
}