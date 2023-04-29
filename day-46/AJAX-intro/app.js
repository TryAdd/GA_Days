function init(){
    // all our code will go here
    // call the dog api for a random image URL
    // display this image in the img Element

    //? first method
    const image = document.querySelector('img')
    axios({
        method:'get', 
        url:'https://dog.ceo/api/breeds/image/random'
    })
    .then(response => {
        image.src = response.data.message
    })
    .catch(error =>{
        console.log(error)
        image.src = "https://i.ibb.co/vqnMwN2/pngwing-com.png"

    })

}

window.addEventListener('DOMContentLoaded', init)

