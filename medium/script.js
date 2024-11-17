function sharePizza(slices, people) {
    let numOfSlices = slices / people
    const decimalPlaces = 2

    return `Each person gets ${numOfSlices.toFixed(decimalPlaces)} slices of pizza; from our ${slices} slice pizza!`
}

console.log(sharePizza(8, 2))