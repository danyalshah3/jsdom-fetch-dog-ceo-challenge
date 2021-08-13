console.log('%c HI', 'color: firebrick')





function loadImages() {
    const imgContainer = document.getElementById("dog-image-container").addEventListener("click", loadImages)
    const img = document.createElement("img")
    imgContainer.append(img)
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(response => {
        const dog = responce.message
        document.querySelector("img").innerHTML += `<div><img src=${dog} alt="A Dog"/></div>`
    })
}



