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
    'https://drscdn.500px.org/photo/1111556548/q%3D90_m%3D2048/v2?sig=e2f075d4596320b4e8a04a2236a94683643f3bc58cc65a4de5454d9d8785f6f0',
    'https://drscdn.500px.org/photo/1111556687/q%3D90_m%3D2048/v2?sig=11094914a71ad2dacf82f60e2aebdd72594dcc2e97e404c72c6ad576a70bd5e7',
    'https://drscdn.500px.org/photo/1111556689/q%3D90_m%3D2048/v2?sig=baa6e4e7718fbc052deaccd3ceaba9d25fcd2e57e2c2e93ee76c828b81331843',
    'https://drscdn.500px.org/photo/1111556694/q%3D90_m%3D2048/v2?sig=60a87431d57712e9e43f8953b6fd4c390343370c0808aa58aeb4ee537afeee06',
    'https://drscdn.500px.org/photo/1111556693/q%3D90_m%3D2048/v2?sig=afeec72a18fab8f902ae1cc217b05360173750e6a307c7464695508ff39fb39e',
    'https://drscdn.500px.org/photo/1111556688/q%3D90_m%3D2048/v2?sig=37cfb1918687efacfb57e52f10f576e5c67764bdd67773209cac6180e2773272',
    'https://drscdn.500px.org/photo/1111556690/q%3D90_m%3D2048/v2?sig=2266c8260c2cfb30663e53c5ad0d485b56e08544f45527c9e14513f9aa86567a',
    'https://drscdn.500px.org/photo/1111556691/q%3D90_m%3D2048/v2?sig=123fbea32c6479dcee71252b900ea619254ca862e7adff5c5c9486f7723cd615',
    'https://drscdn.500px.org/photo/1111556692/q%3D90_m%3D2048/v2?sig=af7b1517dfb7f46e1d7181054fc2b82705eeaa9f6b9700130db20e730a3cf33d',
    'https://drscdn.500px.org/photo/1111556696/q%3D90_m%3D2048/v2?sig=ba50ad3086d945e6a77568d713e3e4aeb98a87998785a0ba294e3037bfc7e4e2',
    'https://drscdn.500px.org/photo/1111556695/q%3D90_m%3D2048/v2?sig=e09a5296e7a7076ff178b8204d8411c110b9bca818e622ebc9c70108c2b8b806',
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

let curArr = [...people]
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

