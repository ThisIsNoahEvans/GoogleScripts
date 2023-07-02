// Capitalise every word in a string.

function capitalise(str) {
    var words = str.split(" ");
    var final = ''
    words.forEach(str => {
        const lower = str.toLowerCase()
        final = final + ' ' + str.charAt(0).toUpperCase() + lower.slice(1);
    })
    
    return final
}