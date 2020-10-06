// Create directory called fs-try
const fs = require('fs')

fs.mkdir('fs-try', (err) => {
    if(err) return console.log('Something bad happened')
    console.log('directory was created')
})


// - Using fs module:

// - create a directory called content using fs method and it should log 'content folder created'
fs.mkdir('content', (err) => {
    if(err) return console.log('Something bad happened')
    console.log('content folder created')
})
// - create a file using fs method called randomText.txt that lives outside the content directory


// - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method

// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
fs.writeFile('randomText.txt', 'rando', (err) =>{
    if (err) return console.log('something bad happened')
    console.log('randomText.txt was created')
})

// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
fs.unlink('randomText.txt', (err) => {
    if(err) return console.log('something bad happened')
    console.log('randomText.txt was removed')
})
fs.writeFile('./content/verbage.txt', 'rando',(err) =>{
    if (err) return console.log('something bad happened')
    console.log('verbage.txt was created')
})


// - Now create a separate setTimeout function that after 7 seconds deletes the content directory

let deleteContent = function(){

    setTimeout(() => {
        
        fs.unlink('./content/verbage.txt', (err) => {
            if(err) return console.log('something bad happened')
            console.log('verbage.txt was removed')
        })

        fs.rmdir('content', (err) =>{
            if (err) return console.log('something bad happened')
            console.log('content was deleted') 
        })

    }, 6000); 
}

deleteContent()