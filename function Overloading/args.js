function add(...args) {
    if(args.length === 2) {
        return args[0] + args[1]
    } if(args.length === 3) {
        return args[0] + args[1] + args[2];
    } else {
        console.log("Invalid arguments: ", args);
    }
}

console.log(add(5,6,7))
console.log(add(4,5,5,5))

