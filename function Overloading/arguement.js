function  add() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    } else {
        console.log("Invalid arguments");
    }
}

console.log(add(5,6,7,8))