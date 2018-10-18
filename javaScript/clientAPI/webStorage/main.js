// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

let db;

window.onload = function(){
    let request = window.indexedDB.open('notes',1);

    request.onerror = function(){
        console.log('Database failed to open');
    };

    request.onsuccess = function(){
        console.log('Database opened successfully ');

        db = request.result;

        displayData();
    };

    request.onupgradeneeded = function(e){
        let db = e.target.result;

        let objectStore = db.creatObjectStore('notes',{keyPath:'id',autoIncrement:true});
        objectStore.createIndex('title','title',{unique:false});
        objectStore.createIndex('body','body',{unique:false});

        console.log('Database setup complete');
    };
};