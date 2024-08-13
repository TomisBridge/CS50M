const o = new Object()
o.firstName = "Thomas"
o.lastName = "hayashi"
o.isTeaching = true
o.greet = function() {
    console.log("hi")
}

const o2 = {}

o.firstName = "Thomas"
o.lastName = "Bridge"
const key = "isLearning"
o[key] = true
o["greet"] = function() {
    console.log("hi")
}

const o3 = {
    fistName: "Thomas",
    lastName: "Bridge",
    isTeaching: true,
    greet: function() {
        console.log("hi")
    },
    address: {
        street: "main st.",
        number: 1234,
    },
}

