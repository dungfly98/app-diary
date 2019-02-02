import Realm from 'realm';
const LIST_NOTE = "ListNote";

const ListNoteSchema = {
   name: LIST_NOTE,
   primaryKey: 'id',
   properties: {
       id: 'int',
       title: 'string',
       content: 'string',
       date: 'date' 
   }
}

const insertNote = newNote => new Promise((resolve, reject) => {
    Realm.open(dataBaseOption).then(realm => {
        realm.write(() => {
            realm.create(LIST_NOTE, newNote);
            resolve(newNote);
        });
    }).catch((error) => reject(error));
});

const updateNote = Note => new Promise((resolve, reject) => {
    Realm.open(dataBaseOption).then(realm =>{
        realm.write(() => {
            let noteUpdate = realm.objectForPrimaryKey(LIST_NOTE, Note.id);
            noteUpdate.title = Note.title;
            noteUpdate.content = Note.content;
            noteUpdate.date = Note.date;
            resolve();
        });
    }).catch((error) => reject(error));
});

const deleteNote = NoteID => new Promise((resolve, reject) => {
    Realm.open(dataBaseOption).then(realm =>{
        realm.write(() => {
            let noteDelete = realm.objectForPrimaryKey(LIST_NOTE, NoteID);
                realm.delete(noteDelete);
            resolve();
        });
    }).catch((error) => reject(error));
});

const deleteAllNote = () => new Promise((resolve, reject) => {
    Realm.open(dataBaseOption).then(realm =>{
        realm.write(() => {
            let noteAllDelete = realm.objects(LIST_NOTE);
                realm.delete(noteAllDelete);
            resolve();
        });
    }).catch((error) => reject(error));
});

const queryAllNote = () => new Promise((resolve, reject) => {
    Realm.open(dataBaseOption).then(realm =>{
        let noteAll = realm.objects(LIST_NOTE);
        resolve(noteAll);
    }).catch((error) => reject(error));
});

const dataBaseOption = {
    schema: [ListNoteSchema]
}

export {
    LIST_NOTE,
    insertNote,
    updateNote,
    deleteNote,
    deleteAllNote,
    queryAllNote
};

export default new Realm(dataBaseOption);