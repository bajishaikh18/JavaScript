function detect(num) {
    if(num === Infinity) return "Infinity"
    if(num === -Infinity) return "-Infinity"
    if(isNaN(num)) return "NaN"
    return "Regular Number"
}

console.log(detect(Infinity))
console.log(detect(-Infinity))
console.log(detect(NaN))
console.log(detect(264))