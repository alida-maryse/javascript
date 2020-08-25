function swapCase(text) {
    return text.split('').map(function(str) {
        return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    }).join('')
}

console.log(swapCase("Hello World"))

console.log(process.argv)