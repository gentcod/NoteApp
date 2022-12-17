const chalk = require("chalk"); //A module that allows customization of outputs. Intsall v2.4.2
const yargs = require("yargs"); //A module that gives access to arguemnts provided in terminal. Type --help as third arguemnt to view available commands or options on yargs

const { addNote, getNotes, loadNotes } = require("./notes.js");

const greenMsg = chalk.blue("Initializing...");
console.log(greenMsg);

//Customize app commangs
//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note contents",
      demandOption: true,
      type: "string",
    },
  },
  handler: (note) => {
    const { title, body } = note;
    console.log(
      "Adding a new note: " + chalk.red(title),
      "\n",
      chalk.yellow(body)
    );

    addNote(title, body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove an existing note",
  handler: (note) => {
    console.log("Removing note", note);
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Display an existing note",
  handler: (note) => {
    console.log("Displaying note", note);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List all existing notes",
  handler: () => {
    console.log("Listing all notes");
  },
});

yargs.parse();
