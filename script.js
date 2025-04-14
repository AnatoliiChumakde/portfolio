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
   'https://sun9-30.userapi.com/impg/kxYOxdAtvQKHprT--Xro7Qsi4VfKZDujf532Og/RvjyOhaD8NY.jpg?size=1440x2160&quality=95&sign=fb266ff56cd5e833853f3237624584be&type=album',
   'https://sun9-15.userapi.com/impg/fS22ycXzkK-1gz4cxlcLO7xFQtxTa2GczqP7UQ/BoBVMe8rVm4.jpg?size=1433x2160&quality=95&sign=13e5c34c29f8f5099e7249f7b5ce708d&type=album',
   'https://sun9-3.userapi.com/impg/LEHdgiCnLwSTKwjwG4p7YreDr3G9J_QxOrFdqg/i5BLVL2zgms.jpg?size=1439x2160&quality=95&sign=80b6ac6e5864eaf03f5b917510780802&type=album',
   'https://sun9-75.userapi.com/impg/HZnNAeDZio_S96dGMJgYkEMskXJTwFi-dq7SeA/AHodYHC4OK8.jpg?size=1440x2160&quality=95&sign=b6bedd5ede02ae72a8ccb5ae332088f6&type=album',
   'https://sun9-19.userapi.com/impg/M3TaHG5jDD8MX8DwGK8fSmZg7klPLaAH1o3AKg/Ljdx01vFCZU.jpg?size=1440x2160&quality=95&sign=6d340993193f31dcd6234881cc2daea8&type=album',
    'https://sun9-18.userapi.com/impg/5neLlzIPUMBTqmnPXFVoqf6VN0N5sM4xEvBeMQ/iZ61X1iPwt0.jpg?size=1440x2160&quality=95&sign=ed64ecea9edbf7239798af85fa59e9f2&type=album',
    'https://sun9-78.userapi.com/impg/LyGTm93DB08bO3RUVjKcoXHKDMtnYyMrs2182g/2AvBKLSPXMc.jpg?size=1440x2160&quality=95&sign=4d4d033f25b20c21913d3b28dd92ef81&type=album',

   'https://sun9-39.userapi.com/impg/lx4ASaDHnrGTeFs8LKYsUc_EkcVuScMTBiax5g/6i1XKBD8e-M.jpg?size=2560x1730&quality=95&sign=c6076bfafae79bd7a5bbd2e2b522ab5c&type=album',
   'https://sun9-24.userapi.com/impg/jXlXwinvfAAjs8y5xwD2owppYtxjKHFealut2A/GH01RYYEAMo.jpg?size=1440x2160&quality=95&sign=01a254a436d98e07be299dc15a7fc69a&type=album',
   'https://sun9-51.userapi.com/impg/R8Ux_VLvUAL_Hktry0ugme9YZlkk0NGVWBYuCw/EPQQoFgbRg4.jpg?size=1440x2160&quality=95&sign=2e9220fe964716bcdfa50dedfc8f4bf7&type=album',
   'https://sun9-2.userapi.com/impg/Tbg-LWN3YRivh7xVwZTdcPOQGJgI-uu2_NEUoQ/o-jTU0SzFOA.jpg?size=1440x2160&quality=95&sign=a6c4fb1ed580a1c4eef07ea3c0b3ed52&type=album',
   'https://sun9-30.userapi.com/impg/2QLSNIdM5P86yn6cOBMWBIBgHW1FVx5CHdj8pA/kiHuqf1hWf4.jpg?size=2560x1707&quality=95&sign=1890d9ed307c12c6164d42b899c599b3&type=album',
   'https://sun9-75.userapi.com/impg/7KY4jn42f0vG7SjTCVNWTXnIQdEaLaeO9aVjiQ/DyrTHtmTyf8.jpg?size=2560x1707&quality=95&sign=b47c58a6dac64f764331ed1e58ac39db&type=album',
   'https://sun9-7.userapi.com/impg/wlJMLK7em0_eruBaFZVEMCUbaqgLzvc3_b1v4w/8wKV-ZfHi0s.jpg?size=1440x2160&quality=95&sign=7076f8b99aa6642b5ccb4449af717337&type=album',
   'https://sun9-15.userapi.com/impg/fIJ6Anu8uzsE5Wfq2Wb7oocvLoEZYW6IYQ5-oQ/DoDZyY1Abqw.jpg?size=1440x2160&quality=95&sign=1d376a30df30b97ea49ae9e9a2372c62&type=album',
   'https://sun9-5.userapi.com/impg/zRXVjoDn8PVgxsgmP8OUP5rvD5KTzMUN_0dhyw/TwioUbfj-cU.jpg?size=1440x2160&quality=95&sign=5e1ab7bb4b647cc8dfd39e37538d6488&type=album',
   'https://sun9-57.userapi.com/impg/by5L_WX1V9etYS_JmQrR0zt9LkBjgL68X_sIHw/hvya8kUlMI4.jpg?size=1440x2160&quality=95&sign=83a03ba0f991b728967fc2c70094bddd&type=album',
   'https://sun9-45.userapi.com/impg/OgMCzsv38R7vrib7x6scsoefiwFd5rbB-7GCKQ/zMCOlgSDKds.jpg?size=1440x2160&quality=95&sign=a7ebb26988be0e1475d42d8211a1f524&type=album',
   'https://sun9-73.userapi.com/impg/EIw--px9t86mhDmMZFf1i2P5zYUdtK4RvlcvWA/hcmyZRFR3sc.jpg?size=1440x2160&quality=95&sign=23e8be79a813550493879c13f69ee364&type=album',
   'https://sun9-21.userapi.com/impg/mp4D7jytktidUoGd2FtmdmZkmRYwluHwnsI8-g/Va4BRTAOW60.jpg?size=1440x2160&quality=95&sign=f585e0b1a975ebb3cad60b3c90a9a32d&type=album',
   'https://sun9-6.userapi.com/impg/aywB3-C-ePvLiGUWK3vHJn3oqrfJGYkq7mseeQ/270EJPUkN0E.jpg?size=1440x2160&quality=95&sign=b5ccc424c2898a231d5fa01b5de7e0fc&type=album',

   'https://sun9-14.userapi.com/impg/rI14E-MedIGSWFDfFMObdd5eBV6BMPfv7mYbEA/7sS0cOSYAUw.jpg?size=2560x1707&quality=95&sign=d2a7f8c49db27210c26c33aa46510ded&type=album',
   'https://sun9-57.userapi.com/impg/oBHgLh76o4jYa5Rw-kphoC2gI5Gp0B5EIyb13w/4U5CD4JSnJY.jpg?size=2560x1707&quality=95&sign=4057df0c7129d0a353c441b2f53061ce&type=album',

   'https://sun9-65.userapi.com/impg/9C-o7gEEBLPQXXB3kBS8PRHxq2ilaPAcSJET1w/oRsEH7kZwuA.jpg?size=2560x1707&quality=95&sign=e54054102569646dfc51699d524dd50e&type=album',
   'https://sun9-67.userapi.com/impg/oSpbuqBsDrK-YnMKSuF_rcE8fDxDxssGILBj7Q/MOTxFZNzfZk.jpg?size=1440x2160&quality=95&sign=e50dafff1a76ed5d049a9ca7fc4932f7&type=album',
   'https://sun9-59.userapi.com/impg/gIhqD_c4m4xpY4cq6y9VBzQq4zzOsej7-dPs3w/gakMGxdVkAs.jpg?size=1440x2160&quality=95&sign=d76236fce6c7357a56e2a41c360e09f7&type=album',
   'https://sun9-10.userapi.com/impg/7guyPNooZGWPfb0rvzlxZKymHSQlrrXw-ypmsg/-hIOr5xl5PM.jpg?size=1440x2160&quality=95&sign=6eb52c2078b13856fe65394404ca65f1&type=album',
   'https://sun9-80.userapi.com/impg/m-_h0kE5rTRjUTvUJDkOSxdrpXkImOt5BwTWGw/nCtRXf2_tzQ.jpg?size=2560x1707&quality=95&sign=608b10e8e3094dc81295318e0c34154c&type=album',
   'https://sun9-53.userapi.com/impg/5a4D5w1HagaEo-fTGB24aBRLL-3aKloCR2BOvw/2LW0bovVnN8.jpg?size=1440x2160&quality=95&sign=c196f9a278aa926e9776290a0ec540a9&type=album',
   'https://sun9-71.userapi.com/impg/mbyyTv4z3BSBXIy04xzDmbjrQOKINX5JKUIu4A/DcR6_YsraIg.jpg?size=1440x2160&quality=95&sign=d94ccbc6b3ef745bf784cbe7869f164c&type=album',
   'https://sun9-74.userapi.com/impg/2FcHxgOs_KMOzDvHTfYuBwh4gxj_W0sSD9WqPw/_WZVrxsaXVw.jpg?size=2560x1753&quality=95&sign=aef85bcbc94e84dbd21340ba77fdbd18&type=album',
   'https://sun9-12.userapi.com/impg/g8RVFrgbiTbFMpNL__KhCwmbwUlcWgCS1VDzVQ/R_8DsVObsys.jpg?size=1440x2160&quality=95&sign=f13454946c84b88fdb3f19a9a7f4c970&type=album',
   'https://sun9-47.userapi.com/impg/noCi6UFx1B4UHqw4z59B2-iddQHP12vuA9C3DQ/BLuFaQOIiuE.jpg?size=1440x2160&quality=95&sign=b5cb58548aaf3e2da5c7f5ab4d437dc6&type=album',
   'https://sun9-7.userapi.com/impg/i7zXbrf0PKd2XYl0AXUALXaZEOGMEfzBdZDmPQ/rnuf0LU4nhQ.jpg?size=1440x2160&quality=95&sign=e8e81526e8355999e2153f007474d953&type=album',
   'https://sun9-60.userapi.com/impg/rzwd2sv-DkV8ctnwlT78OHl8sibf1TKoZAckmQ/2lMz4kQvNJ4.jpg?size=1440x2160&quality=95&sign=e45a4310518ba47b5883a35d884e2e88&type=album',
   'https://sun9-78.userapi.com/impg/LrMYpCDvJywZRic9Rem5_MMkaT0PWjtFft1eXg/3QubzHVEynI.jpg?size=1440x2160&quality=95&sign=74db1605dcd5ea33f9afe6583874ffeb&type=album',
   'https://sun9-69.userapi.com/impg/rXpXOVXXKf8UG9A1xbgRGJHAdZxDv-TW3Q3wGQ/qtQHYFqPZ3s.jpg?size=2560x1707&quality=95&sign=ab8bbace1a2a4bca816f04143fde6a07&type=album',
   'https://sun9-4.userapi.com/impg/b4Ezl3vYc06AToYLPsLcB3kCrSxsjrpYvG03pQ/ZnVQH6DZsTE.jpg?size=2560x1707&quality=95&sign=fe4acd29c3755972e36dd215c65b88ba&type=album',
   'https://sun9-48.userapi.com/impg/JXcSoBTKO1vn-RKGHhAobuUoHM_nhvwg_tkvKg/0QvmkkaOod0.jpg?size=1440x2160&quality=95&sign=cee154818f170b12249244cc6a833c77&type=album',
   'https://sun9-36.userapi.com/impg/eNeqctGibFrgHgJrFFkXhg-wWyqQl7VctevTgQ/IKhEaU-jIrk.jpg?size=1385x2160&quality=95&sign=3d6fbe5e7901de618688d908ae8db36a&type=album',
   'https://sun9-8.userapi.com/impg/-dOV8gSzpUJCLMtHMH8CBksDram3VbVgJGQbfA/-Q6gakIKaN0.jpg?size=2560x1707&quality=95&sign=6cb893da47c057a6890905040a403a6b&type=album',
   'https://sun9-65.userapi.com/impg/pqSIeRO1FQp3PFbJ0wiKFeHqmzcTkjUgkTzzZQ/AlxGh9myphM.jpg?size=2560x1707&quality=95&sign=8b1621949b223e4a71a61ee64281e1fe&type=album',
   'https://sun9-18.userapi.com/impg/6P1dND2MYsUxdYl-RPB8_Jm_W1ZZEdYVtyi9pA/X6q36acL1yI.jpg?size=2560x1707&quality=95&sign=e857db0fc3d78e612352c0f38e02e41f&type=album',
]
const children = [
    'https://sun9-75.userapi.com/impg/NdHe4PrFPtp46N_ey9i3eiXvVvTFuSIP0FV-yA/06Uk3G1FbdA.jpg?size=2560x1707&quality=95&sign=60dc2d418b66eb9c1af61e49c6cb4c34&type=album',
    'https://sun9-59.userapi.com/impg/tilnTM8nW2xM_26BEqgMtCAFbDcXx-LdZWcrXQ/9-RkZxgyLLo.jpg?size=2560x1707&quality=95&sign=5c570d09b752804930a6ab9bee4a78bf&type=album',
    'https://sun9-44.userapi.com/impg/heLg3fMlpOwxBMW-3RMXfApwh0uBj0kYz35yaA/3wvpEyQgWcY.jpg?size=2560x1707&quality=95&sign=772ca236bbae39225fcc14a3dc9450bc&type=album',
    'https://sun9-20.userapi.com/impg/3Gtsv661F1-ASg-0T7IQKNBQ0hr6zXXZ0S5aRw/RCmqV17Sz0Y.jpg?size=2560x1707&quality=95&sign=cfa805ac38fd169152022d5d836f53de&type=album',
    'https://sun9-15.userapi.com/impg/jIJ3jiPGBEwnuRAmn3mtgaHr4aQvbf84z6RDzw/St-5LOu8I4s.jpg?size=2560x1707&quality=95&sign=155bae37d0561beae9bba2594e47432d&type=album',
    'https://sun9-9.userapi.com/impg/d--ISP6KBb0FDtMWBuOcXip-WsM8F26BDJwfTA/m50f0R5dwc4.jpg?size=2560x1707&quality=95&sign=ba7663a71aa49e3022662412510acce3&type=album',

    'https://sun9-44.userapi.com/impg/wmsQT4-ArGo5W1DiLnNageYHHNtK6VXbyP8BqA/7t08gV4uaNY.jpg?size=1440x2160&quality=95&sign=d32444d74088c05c7904c686ff5baedd&type=album',

    'https://sun9-30.userapi.com/impg/xE_daowU5jgeQTXaM8pGabrTE03xBM_gJ29gDg/9vJ36FTfviE.jpg?size=2560x1707&quality=95&sign=3e9adb0d0eec26e4ff7f14855145318f&type=album',
    'https://sun9-10.userapi.com/impg/MRtmzOgUTEOXuR-KGhckti5CODw67fYzU4GI-w/lcR_TedHKKY.jpg?size=1440x2160&quality=95&sign=e884cf9b0124439b4d8719370bbfbbf6&type=album',

    "https://sun9-34.userapi.com/impg/iubzM6B4UBVVC7GZZKrZvyw0sgRQY_7XJM2XAQ/caeY7_hJnb8.jpg?size=2560x1707&quality=95&sign=c372bbb32e45a3a2027354e49777a497&type=album",
    "https://sun9-28.userapi.com/impg/JjvJVEirD8sSJSVur-7_jrWSht0WZaSz9pnwhg/Cwr3i9AhX4A.jpg?size=2560x1707&quality=95&sign=5c2c1569f14c269b254f1001c6c160c0&type=album",
    "https://sun9-58.userapi.com/impg/TjVUQEFswhNWkhFcVn2ARbzT8x0CiCnDehHI7Q/BjFH32Jf5BE.jpg?size=2560x1707&quality=95&sign=6847bee6feb09aa7263dddb094b94030&type=album",

    'https://sun9-74.userapi.com/impg/dC9af8voRT96doxRplAvr5a5ykAj_ZI5Qi2WNw/1akq02ZttG4.jpg?size=2560x1707&quality=95&sign=794a9e91d65ffb070f65034080835666&type=album',
    'https://sun9-59.userapi.com/impg/HzLK6yd4P7R6Uh7RjPcCI18qrcN-OdvU8B_uXA/oyJ2Ccj_Fjk.jpg?size=2560x1707&quality=95&sign=84e5da3f9fde3b1cc3c9cae944d35f68&type=album',

    'https://sun9-18.userapi.com/impg/dEgLHRkU_xun9Wgt_hOfU3qi9JQwm3PQ59Hz-Q/3PWIsTqTajw.jpg?size=1440x2160&quality=95&sign=772049bcce1e454fa7633cbd63f5fd03&type=album',
    'https://sun9-4.userapi.com/impg/Ksa-3J3BGzJQOgkplnfa7aDdc-e83Hao8OuQRA/yCVCoeqjKsI.jpg?size=1440x2160&quality=95&sign=d5094448f8e207ba518865480a068ba7&type=album',
    'https://sun9-47.userapi.com/impg/nNF1lowvk15Bj-LH59KlrnUdGcE5k--S7B2gUA/YK6ZHiy9Eoc.jpg?size=2560x1707&quality=95&sign=f6a214315fd84d42c181f0da0bf363f3&type=album',


    'https://sun9-33.userapi.com/impg/yzEVPIsexBZooSU5Wcr_HCKX-_ZApwKemUln0Q/4aMmED2I0lw.jpg?size=1702x2160&quality=95&sign=bf5ab7dfeb419543d64d62a5e480811e&type=album',
    'https://sun9-24.userapi.com/impg/x8Ih5_nXbte-_tdKCuqelY2JVIiuyN7Dj9MVrw/evMJHACAPyk.jpg?size=1440x2160&quality=95&sign=6bf30df9feafcab3df4ccaaa9202b765&type=album',

    'https://sun9-52.userapi.com/impg/ypYBjyPTbnD_2LdC0VqfVdLyDLyx_fZGc2PWlA/vu5O_Zt2OxA.jpg?size=2560x1707&quality=95&sign=01609861436144203711b0f86eebd62b&type=album',
    'https://sun9-17.userapi.com/impg/pqzKb4yTU9RXsMYpNmqKqlEqVvzxkn774lHenQ/YLwzfO25zKo.jpg?size=2560x1707&quality=95&sign=36e19f7850e299136526f6864d3ba1f0&type=album',

    'https://sun9-26.userapi.com/impg/xWTrm-Sd1eTK4sI2Kfhb2g0boZwvQ5Mii7lhqg/2k-ijzpSGpA.jpg?size=2560x1706&quality=95&sign=463d8f0dd68bee9aa14a0366ac9b3c02&type=album',

    'https://sun9-55.userapi.com/impg/5bb1w9uy6MT9BcfddjMDAPp0_f1rVDNS2-IN5A/gZGgDb6Dlmk.jpg?size=1440x2160&quality=95&sign=6d7ccfa50663343ce5860d63795e8968&type=album',
    'https://sun9-46.userapi.com/impg/GmNYG502ZvJ2y60g99z2ormnCo_1lKgYJQ1mkQ/4wS-9ZeXUGM.jpg?size=2560x1707&quality=95&sign=7c8815f1930ef6e11a080617f2b5f7e1&type=album',
    'https://sun9-42.userapi.com/impg/N3L1Ku4H_kefD9KJMp7ZOAdipMxVSN3LiOTxKg/IWhczqlOm5s.jpg?size=2560x1707&quality=95&sign=09dd8bb31d66e048bd68ef5eb38d906b&type=album',
    'https://sun9-78.userapi.com/impg/amwiDpLqETmZ2sE4rc6mtRoJIfxj3M6inEY_1w/RNfkg8s7xdQ.jpg?size=1440x2160&quality=95&sign=97da2f9c3449cd97ea896d5c4507a448&type=album',
    '',
    '',


]
const interiors = [
    'https://sun9-77.userapi.com/impg/mbHFogEu2tWvmuB3HaWhhiVrns2Cedru0OnF0A/tWDtdBOzhzE.jpg?size=2560x1707&quality=95&sign=ecacfcdd2c8ae6c1cfa2eddc586e3cab&type=album',
    'https://sun9-77.userapi.com/impg/TOoC0Xa_o99kw7pUR9FR67NK36Vu8-CKYXdvcA/ZmEg-2xrhmg.jpg?size=2560x1707&quality=95&sign=42bf4cde31b36d7f11adf7be387b0b23&type=album',
    'https://sun9-75.userapi.com/impg/EyNgyU5uyvDzbITa3BBWIa-iSYQ2_fxM1wa81Q/COAshxYwW6E.jpg?size=2560x1708&quality=95&sign=b9e458b34b88503b30f3ef5a875abdc1&type=album',
    'https://sun9-62.userapi.com/impg/fVvq8uik6d_CxlM34mjk9J2AFgjfXwg4GzJ6kA/VJzIXl5e6T8.jpg?size=2560x1707&quality=95&sign=4bcef637fa4b7e58f2563e2266b9323c&type=album',
    'https://sun9-43.userapi.com/impg/-En0_BsMK09AAepeVYbyDhlHFnl3kembewoDnA/MvZyDwSIi-o.jpg?size=1440x2160&quality=95&sign=7612cc922edfa5aa8608187df6df8ceb&type=album',
    'https://sun9-14.userapi.com/impg/p-6rAvihbb_RMuVJlmkEqMLT7sAY-RX3u6E0sw/X10euBpmL9Q.jpg?size=2560x1707&quality=95&sign=0f0e0d3fc352be840004e088c5f79ea7&type=album',
    'https://sun9-14.userapi.com/impg/0-v0cU8g7dkxLWHyeJAZioNFEAHoCYwOSchgzw/7ofD4g22YvM.jpg?size=2560x1709&quality=95&sign=d56de9415cd2ea49638320503359e693&type=album',
    'https://sun9-20.userapi.com/impg/imliZppQI0IAn7Zcrk_oZPek244LI7cEAO4Erw/omzWuo6TmhQ.jpg?size=2560x1707&quality=95&sign=a4871dc9dd64a3a7d51609ce425aec50&type=album',
    'https://sun9-62.userapi.com/impg/krjtKUXgXxFxS5T1JFhNvo_fETfhH3xXEFvMTQ/b4yevlFrob0.jpg?size=2560x1707&quality=95&sign=b7f8ba509d894ef661bfc474f36b672a&type=album',
    'https://sun9-3.userapi.com/impg/V3rZUjbkELgAvA3lSqYwl7uBbaR0fTxxdWF_sw/e3d3A6EvWVs.jpg?size=2560x1707&quality=95&sign=08aa8405547c6759a25fd0e9f9f02aef&type=album',
    'https://sun9-54.userapi.com/impg/hnkzX35fmXfhqRoE8FEmDK1k-m521CrofuyF0w/QSnrVEbrnTE.jpg?size=2560x1707&quality=95&sign=2d3cc9eebc24e2f70f36a024cba720e0&type=album',
    'https://sun9-79.userapi.com/impg/QeVciGgSuMSRa1CW0YsUdOWOchjR6Iw6yclj5g/BJfiHvjRWQk.jpg?size=1440x2160&quality=95&sign=a8abeb5af6c2e12ade2bbb280190c8b1&type=album',
    'https://sun9-31.userapi.com/impg/JpO8XxewPs4Q-2AYdVfLFySJJCg-tAK0UtXbCg/WdOA8G6KiGg.jpg?size=2560x1707&quality=95&sign=1abea1ad98df73d87b2cb9fa78bc8547&type=album',
    'https://sun9-63.userapi.com/impg/KCuEMmJtGLR0MAohwW1jlipoZ3TqvbnkVRa6Rw/SIH4vNE5jwU.jpg?size=2560x1707&quality=95&sign=8d4713a8423399d0daec4aeadc6a2307&type=album',
    'https://sun9-55.userapi.com/impg/UMAICpkeQC-3PwOf_JZ_VRsfwjBAx7-aqtc-eA/_0b_lCKAnRc.jpg?size=2560x1707&quality=95&sign=499db8908b671e34d59f2d5efefaf3c7&type=album',
    'https://sun9-2.userapi.com/impg/n9C91y7yDbpeoJdajjG8n1zd6zLqJrd0CuFIiQ/iphH6TfBCqA.jpg?size=2560x1707&quality=95&sign=2de665653b379f600ff7a17051b21e43&type=album',
    'https://sun9-1.userapi.com/impg/z06aSp_Q4edf7RlhehRgq-KLGYDY8sBDXi3xaA/Bz3-iNdTc6c.jpg?size=2560x1707&quality=95&sign=6f02b7ee52d1543c6eeb20fc28135baf&type=album',
    'https://sun9-48.userapi.com/impg/60ADibYx2LShHGDOf76diy00k2gjy778Mj1Pbw/nR0EcFYLAxY.jpg?size=2560x1709&quality=95&sign=85bec13af20495bd25f3723fd1e5578c&type=album',
    'https://sun9-62.userapi.com/impg/RlPXXzV9K3i2Uo4yNAss60Scd1nm_TzJD_AQNQ/FCAMYlsURFk.jpg?size=2560x1707&quality=95&sign=bb9078f5643f5962695b30183c8b1d31&type=album',
    'https://sun9-13.userapi.com/impg/C0k417wt16t8shZvwhflC5rlIFu_TYvyYeo4vw/DjoLnrKuD50.jpg?size=1440x2160&quality=95&sign=cb0b14a7b2fa76b0890a77dc66a43875&type=album',
    'https://sun9-37.userapi.com/impg/jjTcrscNZC4shg2KUVh04yALWqqbVw5uDx34vQ/s0bKWBGeB0Y.jpg?size=2560x1707&quality=95&sign=66319c91f7f19b2645556fe226f186b9&type=album',
    'https://sun9-7.userapi.com/impg/dskdzjXSaKs8ZhWgERVdja_aBphE5HGHX1YE0w/pcfx72878SM.jpg?size=1440x2160&quality=95&sign=5f12cc1078a136b64384d1dde6b143ad&type=album',
    'https://sun9-10.userapi.com/impg/9tJDXLYIhYDlC4Dj9jrxYTw6hBKWhqahnKNcCQ/p6TpnuuulBI.jpg?size=2560x1707&quality=95&sign=91bfe82f17615a0a8acb398d78f38355&type=album',
    'https://sun9-21.userapi.com/impg/fcPccL4qcqRWg6B3dilPbf_WN09z4t5qlaSLhQ/HFpDHe_d2fs.jpg?size=2560x1707&quality=95&sign=7e92e7f28392a9d995410e85e9d7b1db&type=album',
    'https://sun9-36.userapi.com/impg/kkBSB1RWVW5hOlEOrQtSjq0JI5hx5kClUZtJDA/IQdFJOM6wyY.jpg?size=2560x1707&quality=95&sign=494e812f9494ebee5f05478dbe870c00&type=album',
    'https://sun9-64.userapi.com/impg/z05fER9aS84PK__UsyE9pwJ_lGOLRJae5r1npA/k6zykIZKzGw.jpg?size=2560x1717&quality=95&sign=d2948423eb516b5a371c9bbd303b1f71&type=album',
    'https://sun9-59.userapi.com/impg/Q2XOP02TKqDaF0q0kkw6zQHW5u9ywvcCAPL4ug/EdGwqpGTVj8.jpg?size=2560x1707&quality=95&sign=8da75f80fe7845112d658a8db8f22bb1&type=album',
    'https://sun9-71.userapi.com/impg/LGpyX27NVJH52sdyhLD-0XkTMERiUYDYUgj_XQ/gMLL-jC2Ons.jpg?size=2560x1707&quality=95&sign=d62db6dae8915f1b7952a690d3db3599&type=album',
    'https://sun9-18.userapi.com/impg/oA-uDXTT_XFNMINP5tZ1fP8LmGqyJam7_Ldt1A/vd0eNiFqZMI.jpg?size=2560x1707&quality=95&sign=4a11844460c27e4a89f4c70b15f6a218&type=album',
    'https://sun9-61.userapi.com/impg/hs8hY_3ly2ep-_idDVhEXfDdGcSA34uMU2ZJUw/9Pa2cIZg_Kc.jpg?size=2560x1737&quality=95&sign=35a8d372d4105b84bc10c8b0c93cad7d&type=album',
    'https://sun9-38.userapi.com/impg/PsY7ZtXy7E8e9DKHPQlgOIq8XcO9nRIy-Buz7Q/r23sm6CYdHA.jpg?size=2560x1707&quality=95&sign=d1479c7dea7d0c811d5c6359bf71c458&type=album',
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

let curArr = [...children]
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

