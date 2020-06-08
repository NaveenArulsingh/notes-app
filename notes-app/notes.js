const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) =>
{
    const notes = loadNotes()
    
    const duplicateNotes = notes.find( (note)=>note.title === title )
    
    if(!duplicateNotes)
    {
        notes.push({title: title,
            body:body
            })
            saveNote(notes)
            console.log(chalk.red.inverse('New notes are added'))
    }
    else{
        console.log('Notes are taken')
    }
    
}


const removeNote = (title) => {
    const notes = loadNotes()

    const retriveNote = notes.filter(
        (note) =>  note.title != title
    )
    //console.log(retriveNote)    
    if(retriveNote.length === notes.length){
        console.log(chalk.green('No records found'))
    }
    else{
        saveNote(retriveNote)
        console.log(chalk.red('records are deleted'))
    }
}

const listNote = () => {
    console.log(chalk.green.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    
    const listedNote = notes.find((note) => note.title===title)

    if(listedNote){
        console.log(chalk.italic.blue.inverse(listedNote.body))
    }
    else{
        console.log(chalk.italic.red.inverse('Note is not found'))
    }
}


const loadNotes = () =>
{
    try{
        const databuffer =fs.readFileSync('json.json').toString()
        return JSON.parse(databuffer)
    }
    catch(e)
    {
        return []
    }
}

const saveNote = (notes)=> {
    const JsonData = JSON.stringify(notes)
    fs.writeFileSync('json.json', JsonData )
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote:readNote
}