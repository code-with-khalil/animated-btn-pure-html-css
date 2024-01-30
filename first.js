 function myfunc(a) {
    let marks = prompt("enter marks to check your grade!")
    if(marks >= 101){
        alert("ONLY-1 - 100 -NUMERS")
    }else if(marks >= 80){
    console.log("your grade is [A]")
    alert("your grade is [A]")
    }else if(marks >= 70){
    console.log("your grade is [B]")
    alert("your grade is [B]")
    }else if(marks >= 60){
    console.log("your grade is [C]")
    alert("your grade is [C]")
    }else if(marks >= 50){
    console.log("your grade is [D]")
    alert("your grade is [D]")
    }else if(marks >= 0){
    console.log("your grade is [F]")
    alert("your grade is [F]")
    }else{
    console.log("INVALID-INPUT")
    alert("ONLY-NUMBER")
    }
}
