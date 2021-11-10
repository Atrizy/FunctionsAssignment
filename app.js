function math(num1, num2){
    return (num1 + num2) * 5
}

function number(num){
    if(num.length >= 10 === true){
        return true
    } else {
        return false
    }
}

function stringarray(arry){
    for( var i=0; i < arry.length; i++){
        if(arry[i].startsWith("ph") === true){
            return arry[i]
        }
    }
}

var do_math = math(2, 5);
console.log(do_math);

var num = "this is a string";
number(num);

var ph = ["No", "Yes", "phat", "Meme"]
stringarray(ph);