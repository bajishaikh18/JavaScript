let arr = [1, 2, 3]
function isArrayOrObject(arr) {
    if(Array.isArray(arr)) return "Array"
    if(typeof arr === "object" && arr != null) return "Object"
    return "Neither"
}