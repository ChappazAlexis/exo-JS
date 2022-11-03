api_key =  "GDRPZw9PpmIQM6dZKKEQi0g5S4C7LuRR";
search = document.getElementById('text');
limit = document.getElementById('number');
let btn = document.getElementById('submitBtn')
let gifDiv = document.getElementById('gifDiv')
let endPoint = "https://api.giphy.com/v1/gifs/search"


btn.addEventListener("click", () => {
    let url = endPoint + `?api_key=${api_key}&q=${search.value}&limit=${limit.value}`
    console.log(url)
    
    fetch(url)
    .then(res => {
        return res.json()
    }).then(datas => {
        console.log(datas)
        gifDiv.innerHTML="";
        for (gif of datas.data) {
            console.log(gif.images.original.url)
            let liens = gif.images.original.url;
            let img = document.createElement('img');
            img.setAttribute('src', liens);
            img.classList.add('rotate')
            gifDiv.appendChild(img)
        }
    })
});