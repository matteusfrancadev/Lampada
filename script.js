const on = document.querySelector('#on')
const off = document.querySelector('#off')
const image = document.querySelector('.image')
const broken = document.querySelector('#broken')

const onLight = () =>{ 
    image.src = 'ligada.jpg'
}

const offLight = () => {
    image.src = 'desligada.jpg'
}

const convertImageBroken = () => {
    image.src = 'quebrada.jpg'
}

off.addEventListener('click', offLight)
on.addEventListener('click' , onLight )
broken.addEventListener('click', convertImageBroken)
broken.addEventListener('mouseover', onLight)
broken.addEventListener('mouseleave', offLight)

/*const button = document.querySelector('button')
const on = document.querySelector('#on')
const off = document.querySelector('#off')
const image = document.querySelector('.image')

const onLight = () =>{
    convertImageOn()
}

const offLight = () => {
    convertImageOff()
}

const convertImageOn = () => {
    image.src = 'ligada.jpg'
}

const convertImageOff = () =>{
    image.src = 'desligada.jpg'
}

const convertImageBroken = () => {
    image.src = 'quebrada.jpg'
}


off.addEventListener('click', offLight)
on.addEventListener('click' , onLight )
image.addEventListener('change' , convertImageOn)
image.addEventListener('change' , convertImageOff)
image.addEventListener('click', convertImageBroken)*/
