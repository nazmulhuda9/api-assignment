const searchButton = () => {
    const searchField = document.getElementById('search-field')
    const searchBox = searchField.value;
    // console.log(searchBox)
    const url = `https://openlibrary.org/search.json?q=${searchBox}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.docs))
}

const displayData = (books) => {
    const divContainer = document.getElementById('div-container')
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
    <div class="card">
        <div class="card-body border rounded bg-primary">
           <h4 class="card-title">Book Name: ${book.title}</h4>
           <h5 class="card-title">Author Name: ${book.author_name[0]}</h5>
           <p class="card-text">First Publish Year: ${book.first_publish_year}</p>
           <p class="card-text">Publisher: ${book.publisher[0]}</p>
       </div>
   </div>
       `
        divContainer.appendChild(div)

    });
}