console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", loadImages)


function renderImage(dog) {
    
    const img = document.createElement("img")
    img.src = dog
    const imageContainer = document.getElementById("dog-image-container").addEventListener("click", loadImages)
    imageContainer.append(img)
}



function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(images => {
        console.log(images)
        console.log(images.message)
    //  images.messages.forEach(image =>
    //     renderImage(image))
    })
}




