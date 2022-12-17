const fs = require('fs');

const getNotes = () => {

};

const addNote = (title, body) => {
   const notes = loadNotes();
   const duplicatedNotes = notes.filter((note) => {
      return note.title === title
   });

   const newNote = {
      title: title,
      body: body,
   }

   duplicatedNotes.length === 0 ? notes.push(newNote) : console.log('Note already exists');

   saveNotes(notes);
}

const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
   try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();

      return JSON.parse(dataJSON);
   } catch (error) {
      // console.error(error);
      return [];
   }

}

module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   loadNotes: loadNotes,
}