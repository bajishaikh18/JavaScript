function defineType(value) {
    if(value == null) return null;
    if(Array.isArray(value)) return "Array";
    return typeof value
}

let a = null
console.log(defineType(a))