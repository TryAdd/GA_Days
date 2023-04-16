// Create a JavaScript file, and link it up
// Using JavaScript:
// Change the font-family of the page to "Arial, sans-serif"
// Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
// Give each li the class of "listitem"
// Change each li’s text color to "rebeccapurple"
// Create a new img element and set its src attribute to a
//  picture of you. Put that new img element in the div with the class of "profilePicture"
function init(){
const familyElemints = document.querySelector('body')
const nickname = document.querySelector('#nickname') 
const favorite = document.querySelector('#favorite')
const hometown = document.querySelector('#hometown')
const listItem = document.querySelectorAll('li')

const image = document.createElement('img')
const imagecont = document.querySelector('.profilePicture')

familyElemints.style.fontFamily = 'Arial, sans-serif';
nickname.textContent = 'TryAdd'
favorite.textContent = 'Spiders'
hometown.textContent = 'Bahrain'


// another 7l l 2nd Q
listItem.forEach(item =>{
    item.classList.add('listitem')
    item.style.color = 'rebeccapurple'
})

image.src = 'https://i.scdn.co/image/ab67616d0000b273d501715e7e92cfdbe64aa308'
imagecont.appendChild(image)


// document.querySelector('body').style.fontFamily = "Arial, sans-serif";





}

window.addEventListener('DOMContentLoaded', init);

