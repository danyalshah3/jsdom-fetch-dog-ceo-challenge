console.log('%c HI', 'color: firebrick')





function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(images =>  { 
        console.log(images)
        console.log(images.message)
    })
}


function addImage(dog) {
    
    const img = document.createElement("img")
    img.src = dog
    const imgContainer = document.getElementById("dog-image-container").addEventListener("click", loadImages)
    imgContainer.append(img)
    // const dog = response.message
}

