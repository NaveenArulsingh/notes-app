const yargs = require('yargs')
const chalk = require('chalk')

const notes = require('./notes.js')


//Add an note - Add command
yargs.command({
    command: 'add',
    describe: 'Add a notes to a file',
    builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'            
        }
    },
    handler(argv){
      notes.addNote(argv.title, argv.body)
    }
  })


//Delete the note -- Delete command
 yargs.command({
     command:'remove',
     describe:'delete the note',
     builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
     handler(argv){
         notes.removeNote(argv.title)
     }
 }) 

 //List the note -- List command
 yargs.command({
     command: 'list',
     describe:'list the notes',
     handler(){
         notes.listNote()
     }
 })

 //Read the notes - read command
 yargs.command({
     command : 'read',
     describe: 'Read the commands',
     builder: {
         title: {
             describe:'Read Note',
             demandOption:true,
             type:'string'
         }
     },
      handler(argv){
          notes.readNote(argv.title)
      }
 })

  yargs.parse()