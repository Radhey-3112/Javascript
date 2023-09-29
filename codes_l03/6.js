function fun(fname,lname){
    if(arguments.length === 2){
        console.log(fname,lname);
    }
    else if(arguments.length === 1){
            console.log(fname);
    }
}

fun("Radhe");
fun("Radhe","Krishna");