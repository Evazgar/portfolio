import { about } from "./Components/about.js";
import { contact } from "./Components/contact.js";
import { illustrations } from "./Components/illustration.js";
import data from './data/evazgar.js'

const routes = {
  '/': illustrations,
  '/about': about,
  '/contact': contact
}

export const onNavigate = (pathname) => {
  const root = document.getElementById('root')
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  root.removeChild(root.firstChild)
  if (btnLanguage.textContent === 'ES') root.appendChild(routes[pathname]('EN'))
  else if (btnLanguage.textContent === 'EN') root.appendChild(routes[pathname]('ES'))

}

window.onpopstate = () => {
  const root = document.getElementById('root')
  const component = routes[window.location.pathname]
  root.removeChild(root.firstChild)
  if (btnLanguage.textContent === 'ES') root.appendChild(component('EN'))
  else if (btnLanguage.textContent === 'EN') root.appendChild(component('ES'))

}

let btnLanguage = document.getElementById('language')
window.addEventListener('load', () => {
  const root = document.getElementById('root')
  const component = routes[window.location.pathname]
  console.log(window.location.pathname)
  if (btnLanguage.textContent === 'ES') root.appendChild(component('EN'))
  else if (btnLanguage.textContent === 'EN') root.appendChild(component('ES'))
})

let illusBtn = document.getElementById('illusBtn')
illusBtn.addEventListener('click', () => onNavigate("/"))
//let kidlitBtn = document.getElementById('kidlitBtn')
//kidlitBtn.addEventListener('click', () => onNavigate("/"))
let contactBtn = document.getElementById('contactBtn')
contactBtn.addEventListener('click', () => onNavigate("/contact"))
let aboutBtn = document.getElementById('aboutBtn')
aboutBtn.addEventListener('click', () => {
  if (btnLanguage.textContent === 'ES') onNavigate("/about")
  else if (btnLanguage.textContent === 'EN') onNavigate("/about")
})


btnLanguage.addEventListener('click', () => {
  if (btnLanguage.textContent === 'EN') {
    illusBtn.textContent = 'Illustration'
    //kidlitBtn.textContent = 'Kidlit'
    contactBtn.textContent = 'Contact'
    aboutBtn.textContent = 'About'
    let content = document.getElementById('content')
    let title = document.getElementById('title')
    if (window.location.pathname == "/about") {
      console.log('here')
      if (title) title.textContent = data.aboutMe.EN.title
      if (content) content.textContent = data.aboutMe.EN.content
    } else if (window.location.pathname == "/contact") {
      if (title) title.textContent = data.contact.EN.title
      if (content) content.textContent = data.contact.EN.content
    }
    btnLanguage.textContent = 'ES'
    console.log('click1')
  } else if (btnLanguage.textContent === 'ES') {
    illusBtn.textContent = 'Ilustración'
    //kidlitBtn.textContent = 'Infantil'
    contactBtn.textContent = 'Contacto'
    aboutBtn.textContent = 'Acerca'
    let content = document.getElementById('content')
    let title = document.getElementById('title')
    if (window.location.pathname == "/about") {
      if (title) title.textContent = data.aboutMe.ES.title
      if (content) content.textContent = data.aboutMe.ES.content
    } else if (window.location.pathname == "/contact") {
      if (title) title.textContent = data.contact.ES.title
      if (content) content.textContent = data.contact.ES.content
    }
    btnLanguage.textContent = 'EN'
    console.log('click2')
  }
})

const logo = document.getElementById('pageLogo')
logo.src = data.logo