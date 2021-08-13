console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    loadImages()
  });


function renderImage(dog) {
    
    const img = document.createElement("img")
    img.src = dog
    const imageContainer = document.getElementById("#dog-image-container").addEventListener("click", loadImages)
    imageContainer.append(img)
}


function renderAllImages(response) {
    const images = response.message
     images.forEach(dog => {
    renderImage(dog)
     })

}



function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(renderAllImages)
    
}


  

