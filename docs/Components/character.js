import data from '../data/evazgar.js'

export const character = (language) => {
    const imgContainer = document.createElement('section')
    imgContainer.id = 'charContainer'
    imgCloner(data.characters, imgContainer)
    return imgContainer
}

const imgCloner = (dataFilter, appendTo) => {
    dataFilter.forEach(element => {
        let imgNameSaver
        let click = false
        const imgVisualizer = document.createElement('section')
        imgVisualizer.className = 'charVisualizer' //Contenedor cuadrado de imágenes
        const illustration = document.createElement('img')
        const imgName = document.createElement('div')
        imgName.id = 'imgName'
        for (let i = 0; i < Object.keys(element).length; i++) {
            if (Object.keys(element)[i] === 'img') illustration.src = Object.values(element)[i]
            if (Object.keys(element)[i] === 'name') imgNameSaver = Object.values(element)[i]
        }
        imgVisualizer.append(illustration, imgName)
        appendTo.appendChild(imgVisualizer)
        console.log(click)
    });
}