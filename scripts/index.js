import { booksData } from "./data.js";

let parsedData = JSON.parse(booksData)

function createHTMLCards (booksArray) {
  
  return booksArray.map(books=>{
    return  (
      `<div class="card m-4" style="width: 15rem;">
        <img src="${books.image}" class="card-img-top" alt="books" height="200rem">
        <div class="card-body">
          <h5 class="card-title">${books.title}</h5>
          <div class="d-flex align-items-center justify-content-between" >
          <h6>By:${books.author}</h6>
          </div>
          <p class="border-top border-secondary pt-2">Categories: ${books.categories.join(", ")}</p>
        </div>
      </div>`
    )
  }).join('')
}


function renderSections () {
  const sections = ["classics","detectives","fantasy","romance"]
  sections.forEach(sectionID => {
    const section = document.getElementById(sectionID);
    section.innerHTML = createHTMLCards(parsedData[sectionID]) 
  })
}

renderSections()