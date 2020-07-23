

//source:  Randy's Demos, used a lot of the same techniques but reviewed with coaches
//to make sure I fully understood

function constructImageURL (photoObj) {
    return "https://farm" + photoObj.farm +
            ".staticflickr.com/" + photoObj.server +
            "/" + photoObj.id + "_" + photoObj.secret + ".jpg";
}
navigator.geolocation.getCurrentPosition(allowLocation, dontAllowLocation)//call back function 
//with paramaters

const defaultlocation = {
    latitude: 36.056595,
    longitude:  -112.125092
}

function getPics(coords){
    console.log(coords.latitude)
    console.log(coords.longitude)
let url = "https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=1976f33626b8660869e236cdb8fb28ac&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=" + coords.latitude + "&lon=" + coords.longitude + "&text=dog"

    let fetchPromise = fetch(url)
    fetchPromise.then(processResponse)
}

function processResponse(response){
    let data = response.json()
    data.then(showPhotos)
}
   
function allowLocation(pos){
    console.log(pos)
    getPics(pos.coords)
}

function dontAllowLocation(){
  getPics(defaultlocation)
}




function showPhotos(dataObj){
    console.log(dataObj)
    const imageUrl = constructImageURL(dataObj.photos.photo[3]);
    let image = document.createElement("img")
    image.src = imageUrl
    document.body.append(image)
}

function nextPhoto(){
    let next = 0
    console.log(dataObj)
    const imageUrl = constructImageURL(dataObj.photos.photo[next]);
    let image = document.createElement("img")
    image.src = imageUrl
    document.body.append(image)
    next++
}



function response(rep){
    let data = rep.json()
    data.then(showPhotos)
}



document.addEventListener("click", nextPhoto)