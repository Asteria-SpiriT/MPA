function component() {
    let ele = document.createElement('div')

    ele.innerHTML = 'Hello, A little boy.'

    return ele
}

document.body.appendChild(component())