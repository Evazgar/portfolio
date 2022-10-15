import data from '../data/evazgar.js'

export const about = (language) => {
    const section = document.createElement('section')
    section.id = "aboutSection"
    const leftContainer = document.createElement('div')
    leftContainer.id = 'leftContainer'
    const img = document.createElement('img')
    img.src = data.aboutMe.img
    leftContainer.appendChild(img)

    const title = document.createElement('h2')
    title.id = 'title'
    const content = document.createElement('article')
    content.id = 'content'
    title.textContent = data.aboutMe[language].title
    content.textContent = data.aboutMe[language].content
    const containerOfRight = document.createElement('div')
    containerOfRight.id = 'containerOfRight'
    const rightContainer = document.createElement('div')
    rightContainer.id = 'rightContainter'
    rightContainer.append(title, content)
    containerOfRight.appendChild(rightContainer)
    section.append(leftContainer, containerOfRight)

    return section
}