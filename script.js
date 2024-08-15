function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(newTitle, newAuthor, newPages, newRead) {
    id++;
    
    const bookElement = document.createElement('div');
    bookElement.className = 'book';
    bookElement.setAttribute('data-id', id);
    const titleElement = document.createElement('div');
    titleElement.className = 'title';
    const authorElement = document.createElement('div');
    authorElement.className = 'author';
    const pagesElement = document.createElement('div');
    pagesElement.className = 'pages';
    const readElement = document.createElement('div');
    readElement.className = 'read';

    const deleteElement = document.createElement('button');
    deleteElement.className = 'delete';
    deleteElement.textContent = 'Delete Book'
    deleteElement.setAttribute('data-id', id);
    deleteElement.addEventListener('click', (e) => {
        const bookID = parseInt(e.target.getAttribute('data-id'));
        const bookToRemove = document.getElementsByClassName(`book[data-id="${bookID}"]`);
        bookElement.remove(bookToRemove);
        myLibrary = myLibrary.filter(book => book.id !== bookID)
    });

    
    const newBook = new Book(newTitle, newAuthor, newPages, newRead, id);
    myLibrary.push(newBook);

    titleElement.textContent = newBook.title;
    authorElement.textContent = newBook.author;
    pagesElement.textContent = newBook.pages;
    if (newBook.read == true){
        readElement.textContent = "Already read this book!";
    } else {
        readElement.textContent = "I haven't read this book yet :(";
    }

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);
    bookElement.appendChild(deleteElement);

    books.appendChild(bookElement);
}

let myLibrary = [];
let id = 0;

const books = document.getElementById('books');

const dialog = document.getElementById('myDialog');

const cancel = document.getElementById('cancel').addEventListener('click', (e)=>{
    e.preventDefault();
    alert('No book added');
    dialog.close();
});

const add = document.getElementById('add');

add.addEventListener('click', (e)=>{
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    const existingBook = myLibrary.find(book => book.title === title && book.author === author);

    if (title == "" || author == "" || pages == ""){
        alert('You should not leave empty spaces.');
    }
    if (isNaN(pages)){
        alert('The number of pages should be a numeric value');
    }
    if (existingBook){
        alert('This book already exists in the library')
    }

    else {
        addBookToLibrary(title, author, pages, read);
        alert('Book added successfully');
        dialog.close();
    }
})

const newBookButton = document.getElementById('newBook');
newBookButton.addEventListener('click', ()=>{
    dialog.showModal();
});