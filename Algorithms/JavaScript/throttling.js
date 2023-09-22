const expensive= () =>{
console.log ("Expensive")
}


window.addEventListener("resize",betterexperience
)
const betterexpensive=
throttle(expensive, limit)


//Incomplete above code


// Throttling function //
const throttle = (func, limit) => {
    let flag = true;
    return function () {
        if (flag) {
            func();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}
