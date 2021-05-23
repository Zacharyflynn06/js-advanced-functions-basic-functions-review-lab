// Your code here
function saturdayFun(variable = "roller-skate") {
    return `This Saturday, I want to ${variable}!`
}

function mondayWork(variable = "go to the office") {
    return `This Monday, I will ${variable}.`
}

function wrapAdjective(outterVar= "*") {
    return function(innerVar= "special") {
        return `You are ${outterVar}${innerVar}${outterVar}!`
    }
}

const Calculator = {
    add: function(x,y) {
        return x + y
    },
    subtract: function(x,y) {
        return x - y
    },
    multiply: function(x,y) {
        return x * y
    },
    divide: function(x,y) {
        return x / y;
    }
}

const actionApplyer = (int, array) => {
    for (let i = 0; i < array.length; i++) {
        int = array[i](int)
    }
    return int

}