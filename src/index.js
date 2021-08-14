let breedContainer = document.getElementById("dog-breeds")
console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", () => {
    loadImages(), loadBreeds(), filterBreed()
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
    
    let li = document.createElement("li")
    li.textContent = breed
    breedContainer.append(li);
    li.addEventListener("click", function(event) {
        event.target.style.color = "blue";
      });
    
}

  
let breedList = []

function loadBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(list => {

         breedList = Object.keys(list.message)
        breedList.forEach(breed => {
         renderBreed(breed)
        })
    })  
}



//  function changeColor (){
// document.getElementById("dog-breeds").addEventListener("click", event => {
//     // use a condition to figure out what element was clicked
//     if (event.target.matches("li")) {
//       // run our DOM logic
//       event.target.style.color = "red"
//     }
//   })
// }

function filterBreed() {
const dropDown = document.getElementById("breed-dropdown")
dropDown.addEventListener("change", (e) => {
    let letter = e.target.value
    // console.log(letter, e.target.value)
     let array = breedList.filter(dog => {
       return dog.startsWith(letter)
        
    })
    breedContainer.innerHTML = ""
    array.forEach(breed => {
        renderBreed(breed)
    })
})
}

  
// dropDown.addEventListener("change", e() => {
//     const letter = e.target.value
// })