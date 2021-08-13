console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    loadImages()
  });


function renderImage(dog) {
    
    const imageContainer = document.getElementById("dog-image-container")
    const img = document.createElement("img")
     img.src = dog
    // img.innerHTML = `<div><img src=${images} alt="A Dog"/></div>`
    imageContainer.append(img)
}


function renderAllImages(array) {
    const images = array.message
     images.forEach(dog => {
    renderImage(dog)
     })

}



function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(renderAllImages)
    
}


function renderBreed(breed) {
     const breedList= document.getElementById("dog-breeds")
     const li = document.createElement("li")
     lis.textContent = breed
     breedList.append(li)

}

  

function loadBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json)
    .then()  
}

