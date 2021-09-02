const searchResultNumber = document.getElementById("search-number")
const searchField = document.getElementById('search-field')
const errorDiv = document.getElementById('error');
const divContainer = document.getElementById('div-container')
const noResult = document.getElementById('no-result')

// function number one 
const searchButton = () => {
    const searchBox = searchField.value;
    if (searchBox === '') {
        errorDiv.innerText = 'search field cannot be empty';
    } else {
        errorDiv.innerText = ''
    }

    // clear search value 
    searchField.value = ''
    const url = `https://openlibrary.org/search.json?q=${searchBox}`
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayData(data))
}

// // function two 
const displayData = (bookses) => {
    const resultNumber = bookses.numFound;
    searchResultNumber.innerText = ` ${resultNumber} Result Found`;
    if (resultNumber === 0) {
        searchResultNumber.innerText = '';
        noResult.innerText = `No Result Found`;
    } else {
        noResult.innerText = ''
    }

    const books = bookses.docs;
    // clear container 
    divContainer.innerHTML = ''

    books.forEach(book => {
        // console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
    <div class="card">
    <img src="https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg
" class="card-img-top" alt="...">
        <div class="card-body border rounded">
           <h4 class="card-title">Book Name: ${book?.title}</h4>
           <h5 class="card-title">Author Name: ${book?.author_name[0]}</h5>
           <p class="card-text">First Publish Year: ${book?.first_publish_year}</p>
           <p class="card-text">Publisher: ${book?.publisher[0]}</p>
       </div>
   </div>
       `;
        divContainer.appendChild(div)
    });
}
