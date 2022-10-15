import data from '../data/evazgar.js'

export const contact =(language) => {
    const section = document.createElement('section')
    section.id = "aboutSection"
    const leftContainer = document.createElement('div')
    leftContainer.id = 'leftContainer'
    const img = document.createElement('img')
    img.src = data.contact.img
    leftContainer.appendChild(img)

    const title = document.createElement('h2')
    title.id = 'title'
    const content = document.createElement('article')
    content.id = 'content'
    const email = document.createElement('article')
    email.id = 'email'
    email.addEventListener('click', ()=> {
        parent.location='mailto:' + data.contact.email
    })
    title.textContent = data.contact[language].title
    content.textContent = data.contact[language].content
    email.textContent = data.contact.email
    const containerOfRight = document.createElement('div')
    containerOfRight.id = 'containerOfRight'
    const rightContainer = document.createElement('div')
    rightContainer.id = 'rightContainter'
    rightContainer.append(title, content, email)
    containerOfRight.appendChild(rightContainer)
    section.append(leftContainer, containerOfRight)


    return section
}