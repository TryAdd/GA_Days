// * Remember to "go live" below. The browser will automatically reload when you save your code.


function init() {

  // * ----------------------- CLICK EVENTS -----------------------
const btn = document.querySelector('#button')
const span = document.querySelector('#button-color-span')

  function handleButtonClick(event){
    console.log('Clicked!')
    event.target.classList.toggle('button-blue')

    // this say like if its red false to red bs if its blue its change l blue w che y3ne
    span.textContent = span.textContent === 'red' ? 'blue' : 'red'
  }

  btn.addEventListener('click', handleButtonClick)




  // * --------------------- HOVER EVENTS --------------------------
const hoverImg = document.querySelector('#hover-img')

  function handleMouseEnter(event){
    console.log('mouse is entering', event.target)

    event.target.src = 'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    event.target.style.width = '400px'
  }
  function handleMouseLeave(event){
    console.log('mouse is leaving', event.target)
    event.target.src = 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

  }

  hoverImg.addEventListener('mouseenter', handleMouseEnter)
  hoverImg.addEventListener('mouseleave', handleMouseLeave)







  // * --------------------- SUBMIT EVENTS --------------------------
  const form = document.querySelector('#form')

    function handleSubmit(event){
      event.preventDefault()
      const userName = document.querySelector('#username').value
      const email = document.querySelector('#email').value

      console.log(userName)
      console.log(email)
      

    }
    form.addEventListener('submit', handleSubmit)







  // * --------------------- CHANGE EVENTS --------------------------
  const select = document.querySelector('#select')
  const selectspan = document.querySelector('#selected')

    function hadleChange(event){
      selectspan.textContent = event.target.value
    }

    select.addEventListener('change', hadleChange)







  // * --------------------- MULTIPLE ELEMENTS --------------------------
  const animalBtns = document.querySelectorAll('.animal-btn')
  const speakSpan = document.querySelector('#speak')

    function handleClick(event){
      speakSpan.textContent = event.target.value
    }

    animalBtns.forEach(btn => {
      btn.addEventListener('click', handleClick)
    })




}

window.addEventListener('DOMContentLoaded', init)
