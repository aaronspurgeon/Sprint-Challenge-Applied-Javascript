// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container');


function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const headerSpan = document.createElement('span');
    headerSpan.classList.add('date');
    headerSpan.textContent = 'AUGUST 16, 2019';
    header.appendChild(headerSpan);

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Lambda Times';
    header.appendChild(headerTitle);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    header.appendChild(temp);

    return header;
}

headerContainer.appendChild(Header());