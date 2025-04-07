const body  = document.querySelector('body')

const nav = document.querySelector('nav')
const peopleButton = document.querySelector('#peopleButton')
const childrenButton = document.querySelector('#childrenButton')

const masonry  = document.querySelector('.masonry')
const masonryBlock1 = document.createElement('div')
const masonryBlock2 = document.createElement('div')
const masonryBlock3 = document.createElement('div')
masonryBlock1.classList.add('masonry_block')
masonryBlock2.classList.add('masonry_block')
masonryBlock3.classList.add('masonry_block')

const imgfull = document.querySelector('#imgfull')
const carosel = document.querySelector('.carosel')
const closeButton = document.querySelector('.close')
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')

const burgermenu = document.querySelector('.burgermenu')
const xmenu = document.querySelector('.xmenu')

const people = [
    'https://lh3.google.com/u/0/d/12fuxxYAYvz5Xv5PcJ23LNdcQcMURivOm=w1280-h1319-iv1',
    'https://lh3.google.com/u/0/d/1868wnbyic3e3hWMee0lTL7K5u4FKnuR4=w1280-h1318-iv1?auditContext=forDisplay',
    'https://lh3.google.com/u/0/d/1RmAXrb8wENgt8Vbt334aZ39zGcfLl_N3=w636-h1319-iv1',
    'https://lh3.google.com/u/0/d/1i6ksiyR-m181Y2VbgmcGEgEsP6c86pwO=w636-h1319-iv1',
    'https://lh3.google.com/u/0/d/1qZY43vDmD9rmZllwV7W0PpLk4WvwpnsX=w636-h1319-iv2',
    'https://lh3.google.com/u/0/d/1rH6R7TC85v51JmQpLLYJ9plHG6BYSNHN=w635-h1319-iv2',
    'https://lh3.google.com/u/0/d/1rGnJI7voGF58o_Zx0YrbI2OBSlhbvQZP=w1280-h1319-iv2',
    'https://lh3.google.com/u/0/d/1rObyJ0k9Ph_lewi_xmwI9GPMq283EsKG=w1280-h1319-iv2',
    'https://lh3.google.com/u/0/d/1rMrAtQ62grXF0Kzpfrq0a_1uEuThgnu_=w1280-h1319-iv2?auditContext=forDisplay',

]
const children = [
    'https://lh3.google.com/u/0/d/1k67TAbk05LOZ1S_WSaOj0b6EiRQ_4m5d=w1279-h1318-iv5',
    'https://lh3.google.com/u/0/d/1xi9KLaksOYdWKKdrr8TysQXMPVagGrba=w1279-h1318-iv3',
    'https://lh3.google.com/u/0/d/1j4zoCgBtsOu3Pg1UMd_RYGBSqrmeiIX-=w675-h1318-iv3',
    'https://lh3.google.com/u/0/d/1oOyHJBxfWMmCAILgTSeuTO76CkPSR3zT=w675-h1318-iv3',
    'https://lh3.google.com/u/0/d/1PmWZY4qO39-syn6GYUMr-zyhfHIa2QwA=w675-h1318-iv5',
    'https://lh3.google.com/u/0/d/1pNVueWaolhcuyac7aoXYbT92YJXbwflh=w675-h1318-iv3',
    'https://lh3.google.com/u/0/d/1-Kb9-Qmm2cZWMCNx4mNg4f9aotBfvXJA=w675-h1318-iv3',
    'https://lh3.google.com/u/0/d/19GxYqcu8g58U4l6JqRxagdN89NS0tmkM=w675-h1318-iv3',
    'https://lh3.google.com/u/0/d/1gQnJTuGhKAQEavZwVouglowaXFFggAS1=w675-h1318-iv3',

]

window.addEventListener('scroll', function() {
    if(window.scrollY>200){
        nav.classList.add('nav_close')
    }else if(window.scrollY<200){
        nav.classList.remove('nav_close')
    }
  });

let curArr = [...children]
let curId = 0


const burgerOn = () => {
    nav.classList.add('nav_burger')
}

const burgerOff = () => {
    nav.classList.remove('nav_burger')
}

// кликаем кнопки меню --------->>

burgermenu.addEventListener('click',()=> {
    burgerOn()
})
xmenu.addEventListener('click',()=> {
    burgerOff()
})
// -----------------
peopleButton.addEventListener('click',()=> {
    curArr = [...people]
    render()
    burgerOff()
})
childrenButton.addEventListener('click',()=> {
    curArr = [... children]
    render()
    burgerOff()
})

// << ---------    кликаем кнопки меню 


const openModal = (index) => () => {
    curId = index
    carosel.classList.add('carosel_active')
    imgfull.setAttribute('src',`${curArr[curId]}`)
}

const closeModal = (e) => {
    if(e.target == e.currentTarget){
        carosel.classList.remove('carosel_active')
    }
}

const nextPhoto = () => {
    curId = (curId+1)%curArr.length
    imgfull.setAttribute('src',`${curArr[curId]}`)
}

const prevPhoto = () => {
    curId = (curId-1 + curArr.length)%curArr.length
    imgfull.setAttribute('src',`${curArr[curId]}`)
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        nextPhoto()
    } else if (e.key === 'ArrowRight') {
        prevPhoto()
    } else if (e.key === 'Escape') {
        carosel.classList.remove('carosel_active')
      }
  });


closeButton.addEventListener('click',closeModal )
carosel.addEventListener('click',closeModal )
arrow_right.addEventListener('click',nextPhoto)
arrow_left.addEventListener('click',prevPhoto)




const render = () => {
    masonryBlock1.innerHTML = ''
    masonryBlock2.innerHTML = ''
    masonryBlock3.innerHTML = ''

    curArr.map((ph, index) => {
        const newPhoto = document.createElement('img')
        newPhoto.setAttribute('src',`${ph}`)
        newPhoto.setAttribute('class',`photo`)
    
        if(((index+4)%3) === 0){
            masonryBlock3.append(newPhoto)
        }else if(((index+4)%3) === 2){
            masonryBlock2.append(newPhoto)
        }else{
            masonryBlock1.append(newPhoto)
        }
    
        masonry.append(masonryBlock1)
        masonry.append(masonryBlock2)
        masonry.append(masonryBlock3)
    
        newPhoto.addEventListener('click',openModal(index) )
    
    })
}

render()

