function makeFunctionArray() {
    const arr = []

    //swap let and var
    for (let i = 0; i< 5; i++) {
        arr.push(function () { console.log(i) })
    }

    console.log('in function: ', typeof i)
    return arr
}

const functionArr = makeFunctionArray()

console.log('outof function: ', typeof i)

functionArr[0]()