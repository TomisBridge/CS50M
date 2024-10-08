const sayHello = (function () {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
})()

//console.log('typeof  message: ', typeof message)
//console.log(sayHello.toString())

//sayHello()

const counter = (function() {
    let count = 0

    return {
        inc: function() { count = count + 1 },
        get: function() { console.log(count) },
    }
})()

counter.get()
counter.inc()
counter.get()