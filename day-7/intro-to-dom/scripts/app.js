function init(){
    const headElement = document.querySelector('#target-element')

    headElement.innerHTML = 'We changed The heading'
    headElement.style.color = 'red'
    headElement.style.border = '2px dashed green'

   

    const newElement = document.createElement('h2');
    newElement.innerHTML = "I am the new element..."
    newElement.classList.add("my-class");


    const targetContainer = document.querySelector("#target-container");
    targetContainer.appendChild(newElement);

    const multiElements = document.querySelectorAll('.multi-element')

    multiElements.forEach((element, i) => {
        element.style.backgroundColor = 'purple'

        if (i === 1){
            element.style.backgroundColor = 'green'
        }
    });
}

window.addEventListener('DOMContentLoaded', init)