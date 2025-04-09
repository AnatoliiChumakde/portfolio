const body  = document.querySelector('body')

const nav = document.querySelector('nav')
const aboutButton = document.querySelector('#aboutButton')
const peopleButton = document.querySelector('#peopleButton')
const childrenButton = document.querySelector('#childrenButton')
const interiorsButton = document.querySelector('#interiorsButton')
const productsButton = document.querySelector('#productsButton')
const retouchButton = document.querySelector('#retouchButton')
const restorationButton = document.querySelector('#restorationButton')

const masonry  = document.querySelector('.masonry')
const aboutInfo  = document.querySelector('.about')

const carosel = document.querySelector('.carosel')
const closeButton = document.querySelector('.close')
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')

const imgprev = document.querySelector('#imgprev')
const imgcur = document.querySelector('#imgcur')
const imgnext = document.querySelector('#imgnext')
const imgWrapperPrev = document.querySelector('#imgwrapperprev')
const imgWrapperCur = document.querySelector('#imgwrappercur')
const imgWrapperNext = document.querySelector('#imgwrappernext')

const burgermenu = document.querySelector('.burgermenu')
const xmenu = document.querySelector('.xmenu')
const openMenuBtn = document.querySelector('.open_menu_btn')


//  массивы с фотками по категориям ------>>>

const about =['about']

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
const interiors = [
    'https://sun9-77.userapi.com/impg/mbHFogEu2tWvmuB3HaWhhiVrns2Cedru0OnF0A/tWDtdBOzhzE.jpg?size=2560x1707&quality=95&sign=ecacfcdd2c8ae6c1cfa2eddc586e3cab&type=album',
    'https://sun9-77.userapi.com/impg/TOoC0Xa_o99kw7pUR9FR67NK36Vu8-CKYXdvcA/ZmEg-2xrhmg.jpg?size=2560x1707&quality=95&sign=42bf4cde31b36d7f11adf7be387b0b23&type=album',
    'https://sun9-75.userapi.com/impg/EyNgyU5uyvDzbITa3BBWIa-iSYQ2_fxM1wa81Q/COAshxYwW6E.jpg?size=2560x1708&quality=95&sign=b9e458b34b88503b30f3ef5a875abdc1&type=album',
    'https://sun9-62.userapi.com/impg/fVvq8uik6d_CxlM34mjk9J2AFgjfXwg4GzJ6kA/VJzIXl5e6T8.jpg?size=2560x1707&quality=95&sign=4bcef637fa4b7e58f2563e2266b9323c&type=album',
    'https://sun9-43.userapi.com/impg/-En0_BsMK09AAepeVYbyDhlHFnl3kembewoDnA/MvZyDwSIi-o.jpg?size=1440x2160&quality=95&sign=7612cc922edfa5aa8608187df6df8ceb&type=album',
    'https://sun9-31.userapi.com/impg/JpO8XxewPs4Q-2AYdVfLFySJJCg-tAK0UtXbCg/WdOA8G6KiGg.jpg?size=2560x1707&quality=95&sign=1abea1ad98df73d87b2cb9fa78bc8547&type=album',
    'https://sun9-63.userapi.com/impg/KCuEMmJtGLR0MAohwW1jlipoZ3TqvbnkVRa6Rw/SIH4vNE5jwU.jpg?size=2560x1707&quality=95&sign=8d4713a8423399d0daec4aeadc6a2307&type=album',
    'https://sun9-55.userapi.com/impg/UMAICpkeQC-3PwOf_JZ_VRsfwjBAx7-aqtc-eA/_0b_lCKAnRc.jpg?size=2560x1707&quality=95&sign=499db8908b671e34d59f2d5efefaf3c7&type=album',
    'https://sun9-2.userapi.com/impg/n9C91y7yDbpeoJdajjG8n1zd6zLqJrd0CuFIiQ/iphH6TfBCqA.jpg?size=2560x1707&quality=95&sign=2de665653b379f600ff7a17051b21e43&type=album',
    'https://sun9-1.userapi.com/impg/z06aSp_Q4edf7RlhehRgq-KLGYDY8sBDXi3xaA/Bz3-iNdTc6c.jpg?size=2560x1707&quality=95&sign=6f02b7ee52d1543c6eeb20fc28135baf&type=album',
    'https://sun9-48.userapi.com/impg/60ADibYx2LShHGDOf76diy00k2gjy778Mj1Pbw/nR0EcFYLAxY.jpg?size=2560x1709&quality=95&sign=85bec13af20495bd25f3723fd1e5578c&type=album',
    'https://sun9-62.userapi.com/impg/RlPXXzV9K3i2Uo4yNAss60Scd1nm_TzJD_AQNQ/FCAMYlsURFk.jpg?size=2560x1707&quality=95&sign=bb9078f5643f5962695b30183c8b1d31&type=album',
    'https://sun9-13.userapi.com/impg/C0k417wt16t8shZvwhflC5rlIFu_TYvyYeo4vw/DjoLnrKuD50.jpg?size=1440x2160&quality=95&sign=cb0b14a7b2fa76b0890a77dc66a43875&type=album',
    'https://sun9-37.userapi.com/impg/jjTcrscNZC4shg2KUVh04yALWqqbVw5uDx34vQ/s0bKWBGeB0Y.jpg?size=2560x1707&quality=95&sign=66319c91f7f19b2645556fe226f186b9&type=album',
    'https://sun9-10.userapi.com/impg/9tJDXLYIhYDlC4Dj9jrxYTw6hBKWhqahnKNcCQ/p6TpnuuulBI.jpg?size=2560x1707&quality=95&sign=91bfe82f17615a0a8acb398d78f38355&type=album',
    'https://sun9-14.userapi.com/impg/p-6rAvihbb_RMuVJlmkEqMLT7sAY-RX3u6E0sw/X10euBpmL9Q.jpg?size=2560x1707&quality=95&sign=0f0e0d3fc352be840004e088c5f79ea7&type=album',
    'https://sun9-14.userapi.com/impg/0-v0cU8g7dkxLWHyeJAZioNFEAHoCYwOSchgzw/7ofD4g22YvM.jpg?size=2560x1709&quality=95&sign=d56de9415cd2ea49638320503359e693&type=album',
    'https://sun9-20.userapi.com/impg/imliZppQI0IAn7Zcrk_oZPek244LI7cEAO4Erw/omzWuo6TmhQ.jpg?size=2560x1707&quality=95&sign=a4871dc9dd64a3a7d51609ce425aec50&type=album',
    'https://sun9-62.userapi.com/impg/krjtKUXgXxFxS5T1JFhNvo_fETfhH3xXEFvMTQ/b4yevlFrob0.jpg?size=2560x1707&quality=95&sign=b7f8ba509d894ef661bfc474f36b672a&type=album',
    'https://sun9-3.userapi.com/impg/V3rZUjbkELgAvA3lSqYwl7uBbaR0fTxxdWF_sw/e3d3A6EvWVs.jpg?size=2560x1707&quality=95&sign=08aa8405547c6759a25fd0e9f9f02aef&type=album',
    'https://sun9-54.userapi.com/impg/hnkzX35fmXfhqRoE8FEmDK1k-m521CrofuyF0w/QSnrVEbrnTE.jpg?size=2560x1707&quality=95&sign=2d3cc9eebc24e2f70f36a024cba720e0&type=album',
    'https://sun9-79.userapi.com/impg/QeVciGgSuMSRa1CW0YsUdOWOchjR6Iw6yclj5g/BJfiHvjRWQk.jpg?size=1440x2160&quality=95&sign=a8abeb5af6c2e12ade2bbb280190c8b1&type=album',
    'https://sun9-21.userapi.com/impg/fcPccL4qcqRWg6B3dilPbf_WN09z4t5qlaSLhQ/HFpDHe_d2fs.jpg?size=2560x1707&quality=95&sign=7e92e7f28392a9d995410e85e9d7b1db&type=album',
    'https://sun9-36.userapi.com/impg/kkBSB1RWVW5hOlEOrQtSjq0JI5hx5kClUZtJDA/IQdFJOM6wyY.jpg?size=2560x1707&quality=95&sign=494e812f9494ebee5f05478dbe870c00&type=album',
    'https://sun9-64.userapi.com/impg/z05fER9aS84PK__UsyE9pwJ_lGOLRJae5r1npA/k6zykIZKzGw.jpg?size=2560x1717&quality=95&sign=d2948423eb516b5a371c9bbd303b1f71&type=album',
    'https://sun9-7.userapi.com/impg/dskdzjXSaKs8ZhWgERVdja_aBphE5HGHX1YE0w/pcfx72878SM.jpg?size=1440x2160&quality=95&sign=5f12cc1078a136b64384d1dde6b143ad&type=album',
    'https://sun9-27.userapi.com/impg/0tu6vkmNfkPeOD_gqfzwKtACNWgD6RGzzIOWpA/FC0h-be1z-4.jpg?size=2560x1707&quality=95&sign=8d07dcbb5f55875291d373c5705ea40b&type=album',
]
const products = []
const retouch = []
const restoration = []

// <<<----------массивы с фотками по категориям


// анимация навигации при скролле  ------>>>
window.addEventListener('scroll', function() {
    if(window.scrollY>200){
        nav.classList.add('nav_close')
    }else if(window.scrollY<200){
        nav.classList.remove('nav_close')
    }
});

// <<<--------   анимация навигации при скролле 

let curArr = [...about]
let curId = 0

// свитчер бургерменю моб версия ------>>>

const burgerOn = () => nav.classList.add('nav_burger')
const burgerOff = () => nav.classList.remove('nav_burger')
burgermenu.addEventListener('click',() => burgerOn())
openMenuBtn.addEventListener('click',() => burgerOn())
xmenu.addEventListener('click',() => burgerOff())

// <<<------- свитчер бургерменю моб версия

// кликаем кнопки меню --------->>

const navMenuButtonsHandler = (tempArr , avtiveBtn) => {
    curArr = [...tempArr]
    render()
    burgerOff()

    aboutButton.classList.remove('active_nav_button')
    peopleButton.classList.remove('active_nav_button')
    childrenButton.classList.remove('active_nav_button')
    interiorsButton.classList.remove('active_nav_button')
    productsButton.classList.remove('active_nav_button')
    retouchButton.classList.remove('active_nav_button')
    restorationButton.classList.remove('active_nav_button')

    avtiveBtn.classList.add('active_nav_button')
}

aboutButton.addEventListener('click',()=> navMenuButtonsHandler(about , aboutButton))
peopleButton.addEventListener('click',()=> navMenuButtonsHandler(people , peopleButton ))
childrenButton.addEventListener('click',()=> navMenuButtonsHandler(children , childrenButton))
interiorsButton.addEventListener('click',()=> navMenuButtonsHandler(interiors , interiorsButton))
productsButton.addEventListener('click',()=> navMenuButtonsHandler(products , productsButton))
retouchButton.addEventListener('click',()=> navMenuButtonsHandler(retouch , retouchButton))
restorationButton.addEventListener('click',()=> navMenuButtonsHandler(restoration , restorationButton))

// << ---------    кликаем кнопки меню 

// modal window handler ----------------------------------------->>>>>>>>>>
const openModal = (index) => () => {
    curId = index
    carosel.classList.add('carosel_active')
    imgcur.setAttribute('src',`${curArr[curId]}`)
}

const closeModal = (e) => {
    if(e.target == e.currentTarget){
        carosel.classList.remove('carosel_active')
    }
}

const animatedPhoto = (direction) => {
    const swapId = (direction === 'next') 
    ? (curId+1)%curArr.length 
    : (curId-1+curArr.length)%curArr.length ;

    if(direction === 'next'){
        imgnext.src =curArr[swapId]
        imgWrapperCur.classList.add('cur_animate_left')
        imgWrapperNext.classList.add('next_animate')
    }else{
        imgprev.src =curArr[swapId]
        imgWrapperCur.classList.add('cur_animate_rigth')
        imgWrapperPrev.classList.add('prev_animate')
    }

    setTimeout(() => {
        imgcur.src = curArr[swapId]
        imgnext.src = ''
        imgprev.src = ''
        imgWrapperCur.classList.remove('cur_animate_left')
        imgWrapperNext.classList.remove('next_animate')
        imgWrapperCur.classList.remove('cur_animate_rigth')
        imgWrapperPrev.classList.remove('prev_animate')
        curId = swapId
    }, 250)

    
}

const nextPhoto = () => {
    animatedPhoto('next')
}

const prevPhoto = () => {
    animatedPhoto('prev')
}

let startX = 0

imgcur.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    // console.log(startX)
})

imgcur.addEventListener('touchend', (e) => {
    let diff = e.changedTouches[0].clientX - startX
    if (Math.abs(diff) > 50){
       diff>0? prevPhoto() : nextPhoto()
    } 
     
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevPhoto()
    } else if (e.key === 'ArrowRight') {
        nextPhoto()
    } else if (e.key === 'Escape') {
        carosel.classList.remove('carosel_active')
      }
  });


closeButton.addEventListener('click',closeModal )
imgWrapperCur.addEventListener('click',closeModal )
carosel.addEventListener('click',closeModal )
arrow_right.addEventListener('click',nextPhoto)
arrow_left.addEventListener('click',prevPhoto)


//<<<<<<<<-------------------------------- modal window handler




const render = () => {
    masonry.innerHTML = ''

    if(curArr[0] === 'about'){
        aboutInfo.classList.remove('about_hidden')
    }else{
        aboutInfo.classList.add('about_hidden')
        const masonryBlock1 = document.createElement('div')
        const masonryBlock2 = document.createElement('div')
        const masonryBlock3 = document.createElement('div')
        masonryBlock1.classList.add('masonry_block')
        masonryBlock2.classList.add('masonry_block')
        masonryBlock3.classList.add('masonry_block')
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
}

render()
aboutButton.classList.add('active_nav_button')

