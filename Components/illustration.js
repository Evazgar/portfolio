import data from '../data/evazgar.js'

export const illustrations = (language) => {
    const imgContainer = document.createElement('section')
    imgContainer.id = 'imgContainer'
    imgCloner(data.illustrations, imgContainer)
    return imgContainer
}

const imgCloner = (dataFilter, appendTo) => {
    dataFilter.forEach(element => {
        let imgNameSaver
        let click = false
        const imgVisualizer = document.createElement('section')
        imgVisualizer.className = 'imgVisualizer' //Contenedor cuadrado de imágenes
        const illustration = document.createElement('img')
        const imgName = document.createElement('div')
        imgName.id = 'imgName'
        for (let i = 0; i < Object.keys(element).length; i++) {
            if (Object.keys(element)[i] === 'img') illustration.src = Object.values(element)[i]
            if (Object.keys(element)[i] === 'name') imgNameSaver = Object.values(element)[i]
        }
        imgVisualizer.append(illustration, imgName)
        imgVisualizer.addEventListener('mouseenter', () => {
            imgName.textContent = imgNameSaver
            illustration.className = 'imgInside'
        })
        imgVisualizer.addEventListener('mouseleave', () => {
            imgName.textContent = ""
            illustration.className = 'imgOutside'
        })
        imgVisualizer.addEventListener('click', () => {
            const bigRoot = document.getElementById('bigRoot')
            bigRoot.innerHTML = ""
            const bigImgContainer = document.createElement('section')
            bigImgContainer.id = 'bigImgContainer'
            const bigImage = document.createElement('img')
            bigImage.src = illustration.src
            const closeSign = document.createElement('div')
            closeSign.textContent = 'x'
            closeSign.id = 'closeSign'
            bigImgContainer.append(bigImage, closeSign)
            bigRoot.appendChild(bigImgContainer)
            bigImgContainer.addEventListener('click', () => {
                bigRoot.innerHTML = ""
            })
        })
        appendTo.appendChild(imgVisualizer)
        console.log(click)
    });
}