

// fetch('./myimages.json')
// .then(function (response) {
//     return response.json();
//   })
//   .then(d => console.log(d));

let data = {
    "artObjects" : [
        {"alt":"Picture1", "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9Yg3fbtcG9gTN54Zikks6MjaKIZUVXSdQ6ZCPT_ZFl7R7eHX"},
        {"alt":"Picture2", "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QjUAH-gRR6v_PnkuKDx3iyanr5ICs3FCEXaZ1zu6NG-g1rTv"},
        {"alt":"Picture3", "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE9_NcxhtmGNjwj35dYjysN8-eRGfgaZ7wvBFoRXYj6bJqsQ3Ow"},
        {"alt":"Picture4", "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsu8kFLGBk0PF4edGNFkkIM4qBVt3bysJpIC8_-w1OBPOmrCFG"},
        {"alt":"Picture5", "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSHoKRHNKulfrBoYWWWvJXDxAN7-CzrzCkGxTST1bNczRlvmt"}
    ]
}

let paintings = data.artObjects

function displayPainting() {
    paintings.forEach(el => {
        // console.log(el);
        // console.log(el.url);
        let gallery1 = document.getElementById('gallery1')
        console.log(gallery1)
        let img = document.createElement('img')
        let linkElement = document.createElement('a')
        
        linkElement.href = `./pages/detail-page.html`
    
        img.classList.add('artObject')
        img.src = el.url
        img.alt = el.alt
    
        linkElement.appendChild(img)
        console.log(img)
        console.log(linkElement)
        console.log(gallery1)
        gallery1.appendChild(linkElement)
    })
}

window.onload = displayPainting();


// fetch('https://www.rijksmuseum.nl/api/nl/collection?toppieces=True&key=Q03BAT0l&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//     return(
//       data.artObjects.forEach( artObject => {
//         let gallery = document.getElementById('gallery')
//         let img = document.createElement('img')
//         let linkElement = document.createElement('a')
        
//         linkElement.href = `./pages/${artObject.id}.html`

//         img.classList.add('artObject')
//         img.src = artObject.webImage.url
        
//         linkElement.appendChild(img)
//         console.log(gallery)
//         gallery.appendChild(linkElement)
//       })
//     )
//   });