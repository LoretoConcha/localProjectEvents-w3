window.onload = function(){
    const images= [
        "https://picsum.photos/id/900/800/800",
        "https://picsum.photos/id/800/800/800",
        "https://picsum.photos/id/700/800/800",
        "https://picsum.photos/id/660/800/800",
        "https://picsum.photos/id/500/800/800",
        "https://picsum.photos/id/666/800/800",
    ]

    let list= document.querySelector('#list')
    let viewer= document.querySelector('#viewer > img')

    for(let image of images){
        let img= document.createElement('img')
        img.setAttribute('class','img-fluid')
        img.setAttribute('src',image)

        img.addEventListener('click', (e) => {
            viewer.setAttribute('src', e.target.src)
        })
        list.appendChild(img)
    }
}