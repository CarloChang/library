const myLibrary = [];

function Book(title, author, pages, selection){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.selection = selection;
}

function addBookToLibrary(){
    let title = prompt('Write a title for the book');
    let author = prompt('Write the name of the author of that book');
    let pages = prompt('Write the number of pages');
    let selection = prompt('Have you read that book?');
    let counter = 1;

    if (title == "" && author == "" && pages == "" && selection == ""){
        alert('No pueden quedar vacíos');
    } else {
        myLibrary.push(new Book(title, author, pages, selection));

    }    
}

const newBookButton = document.getElementById('newBook').addEventListener('click', addBookToLibrary);

Book.prototype.callBook = function (){
    console.log(this.title, this.author, this.pages, this.selection);
}