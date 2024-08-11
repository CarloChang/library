const myLibrary = [];
let id = 0;

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(newTitle, newAuthor, newPages, newRead){
        id++;
        myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead, id));  

        myLibrary.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            const titleElement = document.createElement('div');
            titleElement.className = 'title';
            const authorElement = document.createElement('div');
            authorElement.className = 'author';
            const pagesElement = document.createElement('div');
            pagesElement.className = 'pages';
            const readElement = document.createElement('div');
            readElement.className = 'read';
    
            titleElement.textContent = newTitle;
            authorElement.textContent = newAuthor;
            pagesElement.textContent = newPages;
            readElement.textContent = newRead;
    
            bookElement.appendChild(titleElement);
            bookElement.appendChild(authorElement);
            bookElement.appendChild(pagesElement);
            bookElement.appendChild(readElement);

            books.appendChild(bookElement);
            console.log(book.title);
        });
}



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

    if (title == "" || author == "" || pages == ""){
        alert('You should not leave empty spaces.');
    }
    if (isNaN(pages)){
        alert('The number of pages should be a numeric value');
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





Book.prototype.callBook = function (){
    console.log(this.title, this.author, this.pages, this.selection, this.id);
}



