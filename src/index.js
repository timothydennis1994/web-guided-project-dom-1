// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.getElementsByTagName('header')[0]
// const logoTitle = document.querySelector('#logoTitle')
const logoTitle = document.getElementById('#logoTitle')
// const firstCard = document.querySelector('.card:nth-of-type(1)')
const firstCard = document.getElementsByClassName('card'[0])
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('.card-img')
const titleFirstCard = firstCard.querySelector('.card-title')
const subtitleFirstCard = firstCard.querySelector('.card-subtitle')
const textFirstCard = firstCard.querySelector('.card-text')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
console.log(link1FirstCard)
const link2FirstCard = link1FirstCard.nextElementSibling;
console.log(link2FirstCard)


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const anchorTags = document.querySelectorAll('a')
// B- Loop over the links and console.log their text content
anchorTags.forEach(a => console.log(a.textContent))
// C- Turn the collection of links into a real array
const homeTag = Array.from(anchorTags).filter(a => a.textContent === 'Home')
// D- Use .filter to find the anchor tag with the textContent of "Home"


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
titleFirstCard.textContent = 'Dog Title';
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
link2FirstCard.classList.remove('card-link')
link2FirstCard.classList.add('pink-text')

textFirstCard.style = 'border: 1px solid black;'


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.classList.add('menuitem')
blogLink.href = '#'

const nav = document.querySelector('nav')
nav.appendChild(blogLink)

console.log(blogLink)


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const anotherCard = firstCard.cloneNode(true)
const cardContainer = document.querySelector('.card-group')
cardContainer.appendChild(anotherCard)

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
