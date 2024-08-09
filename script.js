const myLibrary = [];

function Book(title, author, pages, selection, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.selection = selection;
    this.id = id;
}

function addBookToLibrary(){

    if (title == "" && author == "" && pages == "" && selection == ""){
        alert('No pueden quedar vacíos');
    } else {
        id++;
        myLibrary.push(new Book(title, author, pages, selection, id));

    }    
}
const dialog = document.getElementById('myDialog');
const cancel = document.getElementById('cancel').addEventListener('click', (e)=>{
    e.preventDefault();
    alert('No book added');
    dialog.close();
});
cancel
const add = document.getElementById('add');
add.addEventListener('click', ()=>{
    
})

const newBookButton = document.getElementById('newBook');
newBookButton.addEventListener('click', ()=>{
    dialog.showModal();
});
let id = 0;
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');



Book.prototype.callBook = function (){
    console.log(this.title, this.author, this.pages, this.selection, this.id);
}

myLibrary.forEach(book => {
    
});