function add(par1, par2) {
    let sum = 0
    sum = par1 + par2
    return sum
}

let a = 2
let b = 5
let divObj = document.createElement('div')
divObj.innerHTML = `${a} + ${b} = ${add(a, b)}`

document.body.appendChild(divObj)