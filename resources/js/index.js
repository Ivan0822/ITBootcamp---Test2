let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

const kupacInput = document.querySelector('#kupac')
const dinoSelect = document.querySelector('#select-dino')
const napomenaText = document.querySelector('.textarea-field')
const forma = document.querySelector('#forma')
const sveporudzbineBtn = document.querySelector('#btn-all')
const itemContainer = document.querySelector('#item-container')

let array = []
let cena 

kupacInput.value = ''
napomenaText.value = ''

dinos.forEach((el) => {
    const dinoOption = document.createElement('option')
    dinoOption.value = el.name
    dinoOption.id = el.id
    dinoOption.textContent = el.name
    dinoSelect.append(dinoOption)
})

dinos.forEach((el) =>{
    if(dinoSelect.value === el.name){
        cena = el.cena
    }
})

forma.addEventListener('submit', (e) => {
    e.preventDefault()
    if(kupacInput.value.trim() === '' || kupacInput.value.length < 4 || !Number.isNaN(Number(kupacInput.value))){
        console.log('Unos ne moze biti prazan/Mora biti veci od 4 slova')
        kupacInput.value = ''
        napomenaText.value = ''
        return
    }

    let cena = dinos.find(el => el.name === dinoSelect.value)


    array.push({
        Dinosaurus: dinoSelect.value,
        Kupac: kupacInput.value,
        Napomena: napomenaText.value,
        Cena: cena.cena
    })

    if(napomenaText.value.trim() === ''){
        napomenaText.value = '/'
    }

    const item = document.createElement('div')
    item.className = "item"
    item.innerHTML = `
    <p><span>Купац:</span> ${kupacInput.value}</p>
    <p><span>Напомена:</span> ${napomenaText.value}</p>
    <p><span>Диносаурус: </span> ${dinoSelect.value}</p>
    <p><span>Цена: </span> ${cena.cena}</p>`

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Obrisi"
    deleteBtn.addEventListener('click', (e) => {
        deleteBtn.parentElement.remove()
    })

    kupacInput.value = ''
    napomenaText.value = ''

    item.append(deleteBtn)
    itemContainer.append(item)
})

sveporudzbineBtn.addEventListener('click', (e) => {
    console.log(array)
})
