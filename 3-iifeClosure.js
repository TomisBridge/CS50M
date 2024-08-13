function makeFunctionArray() {
    const arr = []

    for (var i = 0; i< 5; i++) {
        arr.push((function (x) {
            return function () { console.log(x) }
        })(i))
    }

    console.log('in function: (i,x) ', typeof i, typeof x)
    return arr
}

const functionArr = makeFunctionArray()

console.log('outof function: ', typeof i)

functionArr[0]()