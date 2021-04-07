// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
// const logo = document.body.children[1].children[1].children[0].children[0].children[0]
const logo = document.querySelector('img')
const header = document.querySelector('header')
const logoTitle = document.getElementById('logoTitle')
const firstCard = document.querySelector('.card:nth-of-type(1)')
console.log('First card:', firstCard)
// B- finding within one particular element
const imageFirstCard = document.querySelector('.card-img-top')
const titleFirstCard = document.querySelector('.card-title')
const subtitleFirstCard = document.querySelector('.card-subtitle')
const textFirstCard = document.querySelector('.card-text')
// console.log(imageFirstCard, titleFirstCard, subtitleFirstCard, textFirstCard)
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
//const anchorTags = header.getElementsByTagName('a')
const anchorTags = document.querySelectorAll('nav a')

console.log(anchorTags)
// B- Loop over the links and console.log their text content
function forEachHandler(anchor) {
  console.log(anchor.textContent)
}
anchorTags.forEach(forEachHandler)
// C- Turn the collection of links into a real array
const arrAnchorTags = Array.from(anchorTags)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeAnchor = arrAnchorTags.find(anchor => anchor.textContent == "Home")

console.log(homeAnchor)



// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.innerText = "Lambda Dog"
imageFirstCard.src = "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg"
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
console.dir(textFirstCard)
textFirstCard.className = "new-class-card-text"
textFirstCard.textContent = "Dogs are the best!"
//  B- Using .setAttribute to change a few attributes

imageFirstCard.setAttribute('alt', "cute pic of a dog")


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.toggle('new-class-for-header')

//  B- By manipulating inline styles on the element
document.querySelector('.card-body').style.backgroundColor = "pink"


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"

const blogLink = document.createElement('a')
const nav = document.querySelector('nav')

blogLink.textContent = 'Blog'
blogLink.setAttribute('href', "#")
blogLink.classList.add('menu-item')
blogLink.classList.add('another-class')

nav.appendChild(blogLink)


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
const cardContainer = document.querySelector('.card-group')
cardContainer.appendChild(secondCard)



// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
