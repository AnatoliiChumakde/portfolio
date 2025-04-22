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
   [
    'https://sun9-30.userapi.com/s/v1/ig2/M9OHqmK6v5o03UQbLVlEl8OWwVTM5pdGUCk04ttejVpy4pCqdAHiWplh14276NAOJnj6jq8jInLe8GSLFl-_42BM.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=jMXa0HIvUTlAitJl42VynApQsUmy1nqOd5StCcx-TuE&cs=320x480',
    'https://sun9-30.userapi.com/impg/kxYOxdAtvQKHprT--Xro7Qsi4VfKZDujf532Og/RvjyOhaD8NY.jpg?size=1440x2160&quality=95&sign=fb266ff56cd5e833853f3237624584be&type=album',
   ],
   [
    'https://sun9-15.userapi.com/s/v1/ig2/SkSIml375A83F1eaQn7XMMEjxwl2nosVc3B0YCDtsgpWXqqk37ZZ3eOoFncsnkhGkgCcuSjKg5HzObESTXkupSuq.jpg?quality=95&as=32x48,48x72,72x109,108x163,160x241,240x362,360x543,480x724,540x814,640x965,720x1086,1080x1628,1280x1930,1440x2171,1698x2560&from=bu&u=IIJOYIKBYhdfVI3SvfC_E4mP3J18tFC1MUB_eW6g_6c&cs=200x302',
    'https://sun9-15.userapi.com/impg/fS22ycXzkK-1gz4cxlcLO7xFQtxTa2GczqP7UQ/BoBVMe8rVm4.jpg?size=1433x2160&quality=95&sign=13e5c34c29f8f5099e7249f7b5ce708d&type=album',
   ],
   [
    'https://sun9-3.userapi.com/s/v1/ig2/VC2T96s31t3InE6qZ4dvtR7IiJiu5zB2rSuR_cl8W9sV-o_lXPQAl5fevCsakiqyDbyxEkjy71tWRUKJ--ZD5m09.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1621,1280x1921,1440x2161,1706x2560&from=bu&u=UFdStoLbWGrEVF6QKPuTkCToiXYUfYmGUs31FMgvfbM&cs=200x300',
    'https://sun9-3.userapi.com/impg/LEHdgiCnLwSTKwjwG4p7YreDr3G9J_QxOrFdqg/i5BLVL2zgms.jpg?size=1439x2160&quality=95&sign=80b6ac6e5864eaf03f5b917510780802&type=album',
   ],
   [
    'https://sun9-75.userapi.com/s/v1/ig2/_-bE_kHmbz3rn-IH89JqC_L9mIuz77PhD2n5YyWeVpGsZKnk0C8zRUe5x_z6X9oT6DPJuB99qXXrtid7z093x3sE.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160&from=bu&u=Lkkrc3rKRHxLxziCKwVvr3I70rfbizlUw7FdKe_Kmyo&cs=320x480',
    'https://sun9-75.userapi.com/impg/HZnNAeDZio_S96dGMJgYkEMskXJTwFi-dq7SeA/AHodYHC4OK8.jpg?size=1440x2160&quality=95&sign=b6bedd5ede02ae72a8ccb5ae332088f6&type=album',
   ],
   [
    'https://sun9-19.userapi.com/s/v1/ig2/ZNEt5l9KQkbBFS9WBez7bJ7paGJRM1FIWEYWwSbqxOkBZDE_HnPIYwB2o7tF8EcHXxgDvtor7pey0p07qv6nxnUB.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=7f7qjKiyIooNn60wwJ1t5P27rWBDzf6RiZvNboRoMpQ&cs=320x480',
    'https://sun9-19.userapi.com/impg/M3TaHG5jDD8MX8DwGK8fSmZg7klPLaAH1o3AKg/Ljdx01vFCZU.jpg?size=1440x2160&quality=95&sign=6d340993193f31dcd6234881cc2daea8&type=album',
   ],
   [
    'https://sun9-18.userapi.com/s/v1/ig2/KROJlnh7lvv2dOfgQ5hDoVnLVI44-Hn7k1wTYtoqj-iXajDz3H9zEt0uAnkfUxcK1rEujUafguYqmRKb72F8LRyi.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=jP7P-Jb4WSBfXokXMIbVMa7v9689Hqic5bKHTQQlQVU&cs=320x480',
    'https://sun9-18.userapi.com/impg/5neLlzIPUMBTqmnPXFVoqf6VN0N5sM4xEvBeMQ/iZ61X1iPwt0.jpg?size=1440x2160&quality=95&sign=ed64ecea9edbf7239798af85fa59e9f2&type=album',
   ],
   [
    'https://sun9-78.userapi.com/s/v1/ig2/WPn1oSZWOU1zTNsHhSZAfB_kr-pP4QmFYtNZP5lC5PkI_fJ2h0eUthDQxkuqLUvdIYtqo-0yitjQQVsmYyJpJqYZ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=2rpVUvfsLMnS5NfXYx5rqRoEIql4_U7gfWxAq_0du_A&cs=320x480',
    'https://sun9-78.userapi.com/impg/LyGTm93DB08bO3RUVjKcoXHKDMtnYyMrs2182g/2AvBKLSPXMc.jpg?size=1440x2160&quality=95&sign=4d4d033f25b20c21913d3b28dd92ef81&type=album',
   ],
   [
    'https://sun9-39.userapi.com/s/v1/ig2/GdGnC-iCSkUNNAkziLF7OM0_n6ypqqM6t0ThOtYMvWmtIclStpBP_MoQpQEx9U3S9iNmdyOMSTpupFILNbtEkDqj.jpg?quality=95&as=32x22,48x32,72x49,108x73,160x108,240x162,360x243,480x324,540x365,640x432,720x487,1080x730,1280x865,1440x973,2560x1730&from=bu&u=tU_MIvxWxk324AR3RZ71TB7xiYVgewqpRPT6NLSprsQ&cs=510x345',
    'https://sun9-39.userapi.com/impg/lx4ASaDHnrGTeFs8LKYsUc_EkcVuScMTBiax5g/6i1XKBD8e-M.jpg?size=2560x1730&quality=95&sign=c6076bfafae79bd7a5bbd2e2b522ab5c&type=album',
   ],
   [
    'https://sun9-24.userapi.com/s/v1/ig2/oPm8x9O_1jrUqnBr-epd40Eqy0T3aRc0YlxEu5--QLMKwnwfaoT7P7X8IDN2oTPZKMx6p7Kb3ifkOg4mtpWkN9Ei.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=68_HZqV8DobRyXegF3N4fDcOMll8Xg1phlq5tPuJ3ro&cs=320x480',
    'https://sun9-24.userapi.com/impg/jXlXwinvfAAjs8y5xwD2owppYtxjKHFealut2A/GH01RYYEAMo.jpg?size=1440x2160&quality=95&sign=01a254a436d98e07be299dc15a7fc69a&type=album',
   ],
   [
    'https://sun9-51.userapi.com/s/v1/ig2/n7T_RzdWgGUzekUo6QIYRH-oMb3JBe4neGo0DslGz9NqzYxWmkt8qCuSLl-oVQQmcyQHaX3j-d6oBVtIK512YxZd.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=Gt4j4uJm6HD3Nf3u8eWSFjOBYYrjB7oYW9-OlAHSOaE&cs=320x480',
    'https://sun9-51.userapi.com/impg/R8Ux_VLvUAL_Hktry0ugme9YZlkk0NGVWBYuCw/EPQQoFgbRg4.jpg?size=1440x2160&quality=95&sign=2e9220fe964716bcdfa50dedfc8f4bf7&type=album',
   ],
   [
    'https://sun9-2.userapi.com/s/v1/ig2/U6EcDgG5uKC3cmlz0N8kjUoimcj6kautco2gfGznQXbIVtBXb3SnS_6Ak0Ey-vF_v3uOHXcuAPsREpVTuy9LV9qe.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=2FscEj5Ep9lCAo_iBPaucBEIpJHggLDiYdzau4Zit8Y&cs=320x480',
    'https://sun9-2.userapi.com/impg/Tbg-LWN3YRivh7xVwZTdcPOQGJgI-uu2_NEUoQ/o-jTU0SzFOA.jpg?size=1440x2160&quality=95&sign=a6c4fb1ed580a1c4eef07ea3c0b3ed52&type=album',
   ],
   [
    'https://sun9-30.userapi.com/s/v1/ig2/8pZroHM415CrFTIWfyEkzWuoy5O2xHTdLUqtP412Qb2plqV2-KNAemvR4eyt4Kh0fUjHOZg-opgMZkb1TPmvkTzm.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=1FJHw06o0LuHUUqMKsaCU-FZKpV-JPNLCoyWlgOb0Fw&cs=510x340',
    'https://sun9-30.userapi.com/impg/2QLSNIdM5P86yn6cOBMWBIBgHW1FVx5CHdj8pA/kiHuqf1hWf4.jpg?size=2560x1707&quality=95&sign=1890d9ed307c12c6164d42b899c599b3&type=album',
   ],
   [
    'https://sun9-75.userapi.com/s/v1/ig2/CquafE3TsBfUkxeIMZL80hHZGKY3aQ-3__v4SMISKwSYLdN3IA5f1fWRIEQvFY-jFA1QjzL3MVFm0GFQ2uLc5A46.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=Old3GDJ0TduiBZin2Xjl29KZBn1ENnugfC-llrcSelI&cs=320x213',
    'https://sun9-75.userapi.com/impg/7KY4jn42f0vG7SjTCVNWTXnIQdEaLaeO9aVjiQ/DyrTHtmTyf8.jpg?size=2560x1707&quality=95&sign=b47c58a6dac64f764331ed1e58ac39db&type=album',
   ],
   [
    'https://sun9-7.userapi.com/s/v1/ig2/mEx6mr9LonNgFSUw0tFnyoQlpSMSFX9K92hQDJxQdPajhAuNGCaqOftkjarahvmMLLBunqfyPp4-ugxdI8B9ZvYn.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=61RpLoHFsGcnhZaT-L-L0TiG9Sv6xWLnlO31UZ3ic9M&cs=320x480',
    'https://sun9-7.userapi.com/impg/wlJMLK7em0_eruBaFZVEMCUbaqgLzvc3_b1v4w/8wKV-ZfHi0s.jpg?size=1440x2160&quality=95&sign=7076f8b99aa6642b5ccb4449af717337&type=album',
   ],
   [
    'https://sun9-15.userapi.com/s/v1/ig2/NbQmQYQydY44XmOSsxQ3WetBQo5yuLwEHzO8-ZAJPhmj9fRo41LyMNYMoe638YeUFDGzQ448ndgE6DbG4k2WKwyY.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=bsyc1O1Kuox9p5wmwzQCxQrE6u4O7eeKBHc5wZZch04&cs=320x480',
    'https://sun9-15.userapi.com/impg/fIJ6Anu8uzsE5Wfq2Wb7oocvLoEZYW6IYQ5-oQ/DoDZyY1Abqw.jpg?size=1440x2160&quality=95&sign=1d376a30df30b97ea49ae9e9a2372c62&type=album',
   ],
   [
    'https://sun9-5.userapi.com/s/v1/ig2/LTSLZUF8BzHuAjJUYNnrfQn17elZb_6I2Dkjgm--XNHzwIyPgnyzlO0_D0dOnVJ78K64vbFkjK76T2R3V1MbtDkQ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=cDVX7cd74gXj7SQnYzWrvt10ijwoQXRk8HHJEWN8rUw&cs=320x480',
    'https://sun9-5.userapi.com/impg/zRXVjoDn8PVgxsgmP8OUP5rvD5KTzMUN_0dhyw/TwioUbfj-cU.jpg?size=1440x2160&quality=95&sign=5e1ab7bb4b647cc8dfd39e37538d6488&type=album',
   ],
   [
    'https://sun9-57.userapi.com/s/v1/ig2/fRxArXP7fivLaDL5Rz9EVM4uVg6ttouw0d6mTR70Xyk9xYrpHQqjM0BTejkByQrgp6EuiHmsZ8d5bD79dQO3epYf.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=dvRvDg1C9ldnHZAvSL1fz7Utj-NIK1xJo9_9k5Z9Tbs&cs=320x480',
    'https://sun9-57.userapi.com/impg/by5L_WX1V9etYS_JmQrR0zt9LkBjgL68X_sIHw/hvya8kUlMI4.jpg?size=1440x2160&quality=95&sign=83a03ba0f991b728967fc2c70094bddd&type=album',
   ],
   [
    'https://sun9-45.userapi.com/s/v1/ig2/yk3Pd4_s1WwCsfPltBg_YjiXhMUvSKtTRH588GwffyQkjThiyIJyX7bFIW5iCKN0mcGJpQoUaSKA_oZrkAsnedK8.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=B67NA6ptkDJePIhrSFdNWZwLABPDpdXwYrIljMYFvk8&cs=320x480',
    'https://sun9-45.userapi.com/impg/OgMCzsv38R7vrib7x6scsoefiwFd5rbB-7GCKQ/zMCOlgSDKds.jpg?size=1440x2160&quality=95&sign=a7ebb26988be0e1475d42d8211a1f524&type=album',
   ],
   [
    'https://sun9-73.userapi.com/s/v1/ig2/2B6prkouW5JTLq_PlXJJtlksoIjF30U7e4hsP7-xOznon3dHvbjKvpsZxU7aD8-75UWJBEanva5OOCoZgHyGMSdO.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=Nu-eKGZjFyDhFtd1XyDn2eSPnXcP7HmepaocBt7bCm4&cs=320x480',
    'https://sun9-73.userapi.com/impg/EIw--px9t86mhDmMZFf1i2P5zYUdtK4RvlcvWA/hcmyZRFR3sc.jpg?size=1440x2160&quality=95&sign=23e8be79a813550493879c13f69ee364&type=album',
   ],
   [
    'https://sun9-21.userapi.com/s/v1/ig2/2IR6jYfMXFfDSC_bzf-qc_RpwBYmEPZwm8qIGm9JVYl4CUI5v4ua1dVQBWKLr9sO21o_85RNVIBfU5VPmcM8DcI2.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160&from=bu&u=l9tIC57AUNUDMZlh5w3GMKzoqCpSAU_Wl0zWAcY9D4U&cs=320x480',
    'https://sun9-21.userapi.com/impg/mp4D7jytktidUoGd2FtmdmZkmRYwluHwnsI8-g/Va4BRTAOW60.jpg?size=1440x2160&quality=95&sign=f585e0b1a975ebb3cad60b3c90a9a32d&type=album',
   ],
   [
    'https://sun9-6.userapi.com/s/v1/ig2/wKPNWq5uAok0JRXEBSPNKBMJwBCENsIpRcdEuvPf6fGN9HG5uWoiAvmkfgTGB2t_UEy0v541t6q7fqqRy5rGhdS7.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=Ls4YhOIdS52c3Z6l2FEIPg3i1zEBnwLS_T_zKeodcuU&cs=320x480',
    'https://sun9-6.userapi.com/impg/aywB3-C-ePvLiGUWK3vHJn3oqrfJGYkq7mseeQ/270EJPUkN0E.jpg?size=1440x2160&quality=95&sign=b5ccc424c2898a231d5fa01b5de7e0fc&type=album',
   ],
   [
    'https://sun9-14.userapi.com/s/v1/ig2/9lWCBoWXWPQZhxVB7H4KM1UkjAoggcm3wA2mWm6QF1Rn6j3SS5DOTfneXIZ6i1O_nq2jRsbcoSnd0pi9HIAPd6xX.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=irjd17wdaiXm4hinT5aJOK9CDr9Lx7Wq9ws2q3F8AZE&cs=510x340',
    'https://sun9-14.userapi.com/impg/rI14E-MedIGSWFDfFMObdd5eBV6BMPfv7mYbEA/7sS0cOSYAUw.jpg?size=2560x1707&quality=95&sign=d2a7f8c49db27210c26c33aa46510ded&type=album',
   ],
   [
    'https://sun9-57.userapi.com/s/v1/ig2/ZUhITQE33ubkfMFR46GwQGVJz1QBnNjAR651rbBAA8u5Uefsm1Zt6qC9hq91oh-ZAeWXZE3f2xRvagtFOqOXIIzF.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=uqzI-fkOWzkChG6BI3jM9CWO4PrXAM95Gj2CgV0bC8A&cs=320x213',
    'https://sun9-57.userapi.com/impg/oBHgLh76o4jYa5Rw-kphoC2gI5Gp0B5EIyb13w/4U5CD4JSnJY.jpg?size=2560x1707&quality=95&sign=4057df0c7129d0a353c441b2f53061ce&type=album',
   ],
   [
    'https://sun9-65.userapi.com/s/v1/ig2/cEqcNes4MQGWmnMPtS5SjNBho_cI2QKXy9N_a6ZQgtQG8rt9VWzLhFQJX3QNAbUOmq2zDk2PlEyV3nXzXgmGSEuf.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=2rXGfxTaBt7pUn4_KQ9-pCyz9ZdErKqR_u0J2rPFF04&cs=510x340',
    'https://sun9-65.userapi.com/impg/9C-o7gEEBLPQXXB3kBS8PRHxq2ilaPAcSJET1w/oRsEH7kZwuA.jpg?size=2560x1707&quality=95&sign=e54054102569646dfc51699d524dd50e&type=album',
   ],
   [
    'https://sun9-67.userapi.com/s/v1/ig2/yjR-OrP53RLncv68im6pTYgDpW3eWFQ9e2b-s5aPWWHBZPS6oCTOD_8fkQ-Ex9lX8NQlIPybYetGR14i-AJx-wzG.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=vwfcMbmy0yn4n4b0DL2zIc3jspJ_ZkqzDR0B-k_C-oA&cs=200x300',
    'https://sun9-67.userapi.com/impg/oSpbuqBsDrK-YnMKSuF_rcE8fDxDxssGILBj7Q/MOTxFZNzfZk.jpg?size=1440x2160&quality=95&sign=e50dafff1a76ed5d049a9ca7fc4932f7&type=album',
   ],
   [
    'https://sun9-59.userapi.com/s/v1/ig2/bdk7prC0h9a9ICTJXv8kj7qJJfrKxstUqqlTEjObyX6yFzTsht4lAHaoQoSoBoKlD7H5RbjgViXLbXnQVNdg_sJI.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=rdxfBQIkUUPKKYAgZgc0VEZq8GXrVpYj3mrgHsVXQlA&cs=200x300',
    'https://sun9-59.userapi.com/impg/gIhqD_c4m4xpY4cq6y9VBzQq4zzOsej7-dPs3w/gakMGxdVkAs.jpg?size=1440x2160&quality=95&sign=d76236fce6c7357a56e2a41c360e09f7&type=album',
   ],
   [
    'https://sun9-10.userapi.com/s/v1/ig2/Ksd4poiBpNdm0aNmnrbWlsDdLVbiERSi-N7iE8udtt8c78VAQf3z1LnLIIRoNpBS7OtDE00Jzpi_0rdQD6kdqc68.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=42mYQ2PHiExuGdJRPBbxW9_4hrsYGpe8JW7-66jdmUc&cs=320x480',
    'https://sun9-10.userapi.com/impg/7guyPNooZGWPfb0rvzlxZKymHSQlrrXw-ypmsg/-hIOr5xl5PM.jpg?size=1440x2160&quality=95&sign=6eb52c2078b13856fe65394404ca65f1&type=album',
   ],
   [
    'https://sun9-80.userapi.com/s/v1/ig2/LDwmLfjIEsmRHt9bFIC0nFBej-wY8bk92J3AxD7qv-qWceciWAIyFUeKM8n1IKlZCfFb1W3A1FPXqIEckoMPhxUE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=hRpyhBdXfFWqmjUs65dcZIrn-TK6420lqgD3Qqm49Zo&cs=510x340',
    'https://sun9-80.userapi.com/impg/m-_h0kE5rTRjUTvUJDkOSxdrpXkImOt5BwTWGw/nCtRXf2_tzQ.jpg?size=2560x1707&quality=95&sign=608b10e8e3094dc81295318e0c34154c&type=album',
   ],
   [
    'https://sun9-53.userapi.com/s/v1/ig2/azcil9B42oClaDGnELWVKcQB3849hnPe6MiKTIIVgKJt5e0bGk_W1tHFg6bgcXDp78H8zEmjHgknn15VeYhHu4YQ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=UQuNmPBDMCy1DEfMPhSaVCBHSdts4rvJYVNAOm9KkGU&cs=320x480',
    'https://sun9-53.userapi.com/impg/5a4D5w1HagaEo-fTGB24aBRLL-3aKloCR2BOvw/2LW0bovVnN8.jpg?size=1440x2160&quality=95&sign=c196f9a278aa926e9776290a0ec540a9&type=album',
   ],
   [
    'https://sun9-71.userapi.com/s/v1/ig2/lDReF13XcJw-Ld8CdK2n3Yl-1MEXZvHcV8JQ4WXlwCX2Vs96mDHkN3jmrlHobaYvs6O2mtQpYR1mf7vzOuuOOehK.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=yj7DClF5ECwJdesCqL_6FV0GhHIL-9o2gfrNCcuJqlU&cs=200x300',
    'https://sun9-71.userapi.com/impg/mbyyTv4z3BSBXIy04xzDmbjrQOKINX5JKUIu4A/DcR6_YsraIg.jpg?size=1440x2160&quality=95&sign=d94ccbc6b3ef745bf784cbe7869f164c&type=album',
   ],
   [
    'https://sun9-74.userapi.com/s/v1/ig2/_Sgy0ZXlB_psNPhmVn2JuStKgTRlkQ9WOu0gy6zvuZaNYdlCs_jmfQAK27UAl7c1afO0fJ0fAqeVzyoJNPPG0c_K.jpg?quality=95&as=32x22,48x33,72x49,108x74,160x110,240x164,360x247,480x329,540x370,640x438,720x493,1080x740,1280x876,1440x986,2560x1753&from=bu&u=Giac7aiiRCIvIyNMQ7LQ5oUmw0jl65lmBdadNb8ZcTQ&cs=510x349',
    'https://sun9-74.userapi.com/impg/2FcHxgOs_KMOzDvHTfYuBwh4gxj_W0sSD9WqPw/_WZVrxsaXVw.jpg?size=2560x1753&quality=95&sign=aef85bcbc94e84dbd21340ba77fdbd18&type=album',
   ],
   [
    'https://sun9-12.userapi.com/s/v1/ig2/rWgYjEimEFlU-KcForEBm3YpXZofWqjgtBsrro7LECkttFzhU6kA0a2zQitUVUuBgxzY1yKueb3R_04ERv11z4cA.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=j0gurIYf4UJfNIMF3tfCHht6eV9WdWkvmelwOnhX-8A&cs=200x300',
    'https://sun9-12.userapi.com/impg/g8RVFrgbiTbFMpNL__KhCwmbwUlcWgCS1VDzVQ/R_8DsVObsys.jpg?size=1440x2160&quality=95&sign=f13454946c84b88fdb3f19a9a7f4c970&type=album',
   ],
   [
    'https://sun9-47.userapi.com/s/v1/ig2/OOO73F47tWuoahUgrdH9m6Ftd7OWpFQ4tlOGvWlJ8eM6rK2IchicJhFJwA4FrK8aHRhAzlYzrbbKdm7I_tAuce18.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=tFZMfdsaMdn7KhyU6kE3lv-aqioKAwkn6Vvk4eNu6CA&cs=200x300',
    'https://sun9-47.userapi.com/impg/noCi6UFx1B4UHqw4z59B2-iddQHP12vuA9C3DQ/BLuFaQOIiuE.jpg?size=1440x2160&quality=95&sign=b5cb58548aaf3e2da5c7f5ab4d437dc6&type=album',
   ],
   [
    'https://sun9-7.userapi.com/s/v1/ig2/Y3vB5UTFE2IYxD_Q70Pus_XPa-zBcpWY_huQCM_M6rNvSys9B7Fl9tqGaNJIBljdow4iCLJGsM7lHaLd_ZGyqDSq.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=dPutA6i1w16ffQn16C0SRmJZ4t67w_vKSc_0IGGif0w&cs=320x480',
    'https://sun9-7.userapi.com/impg/i7zXbrf0PKd2XYl0AXUALXaZEOGMEfzBdZDmPQ/rnuf0LU4nhQ.jpg?size=1440x2160&quality=95&sign=e8e81526e8355999e2153f007474d953&type=album',
   ],
   [
    'https://sun9-60.userapi.com/s/v1/ig2/EAgc4Aun6IpoECIKTEOqZk8gdd0C19aA4oo0qeBvyyw27wBNH24F8NqTbqXQzWg6jWpgkOEL0AB_KJT7Uh9LHGrq.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=4MgFhkJqkkCC37COZe6Xi2ZjtKeKYo3YxtLJp9sTXNk&cs=320x480',
    'https://sun9-60.userapi.com/impg/rzwd2sv-DkV8ctnwlT78OHl8sibf1TKoZAckmQ/2lMz4kQvNJ4.jpg?size=1440x2160&quality=95&sign=e45a4310518ba47b5883a35d884e2e88&type=album',
   ],
   [
    'https://sun9-78.userapi.com/s/v1/ig2/vqMQ3xHfnC-dwzpNrrtyy4nF5zlYmItvUhRB5NZ6dh_q8ch7Pbn4bNeARKSLOFX9eFbAfho3Y68ilWTZM-OGAP99.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=1dXfhlq3iEWtwM5lNgR21G2b7Q1xg2NC63_UpDVjC48&cs=320x480',
    'https://sun9-78.userapi.com/impg/LrMYpCDvJywZRic9Rem5_MMkaT0PWjtFft1eXg/3QubzHVEynI.jpg?size=1440x2160&quality=95&sign=74db1605dcd5ea33f9afe6583874ffeb&type=album',
   ],
   [
    'https://sun9-69.userapi.com/s/v1/ig2/XztA5WI88XS1-vP0HV97Z7NcaI-YYC28eDQ16XNGj419Ydv-2JQSJyHAtiGDpJB6TzelkMP1KlZj50C5o0Ss_mh_.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=un8zNE_TVhtOZVjgClXRixwbjWynhZKODLtFtR7swsg&cs=320x213',
    'https://sun9-69.userapi.com/impg/rXpXOVXXKf8UG9A1xbgRGJHAdZxDv-TW3Q3wGQ/qtQHYFqPZ3s.jpg?size=2560x1707&quality=95&sign=ab8bbace1a2a4bca816f04143fde6a07&type=album',
   ],
   [
    'https://sun9-4.userapi.com/s/v1/ig2/qhPJUBlOwbjW4-E6oyGiPUHUW8nmONeZTT5G0JbQ3qIk-S7wNeK3vBoWDGccF0nUqWCBL9PPc16bXvFD9KO7ZBCB.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=uPnlaM050bvS-NUvSLmnCYcjaqEaQqNIRjtXQOgCX4s&cs=320x213',
    'https://sun9-4.userapi.com/impg/b4Ezl3vYc06AToYLPsLcB3kCrSxsjrpYvG03pQ/ZnVQH6DZsTE.jpg?size=2560x1707&quality=95&sign=fe4acd29c3755972e36dd215c65b88ba&type=album',
   ],
   [
    'https://sun9-48.userapi.com/s/v1/ig2/b-Gie-ewhPEGzY8AZx8NMwb5ScXVigJyp_i_IFTsalKc1GwZOwCflgjni1dbQ3VoKPng8sy4nFw-Avq-XUngsrBp.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=GveYVFn6yz2EMWVlWc_I-5IakSZJOyjo3aflrIld5rY&cs=200x300',
    'https://sun9-48.userapi.com/impg/JXcSoBTKO1vn-RKGHhAobuUoHM_nhvwg_tkvKg/0QvmkkaOod0.jpg?size=1440x2160&quality=95&sign=cee154818f170b12249244cc6a833c77&type=album',
   ],
   [
    'https://sun9-36.userapi.com/s/v1/ig2/A0V9noEsLA7JO4l_MHYOEwSk2p4VY9d3YzetNV2umMQ3cbs-UWLFNnmbpS2pzgCbokMIZKk4pt0LMJe7aoUgQ3UL.jpg?quality=95&as=32x50,48x75,72x112,108x168,160x249,240x374,360x561,480x748,540x842,640x998,720x1123,1080x1684,1280x1996,1440x2245,1642x2560&from=bu&u=6tm0wLobDJlk0LduaeCtRi9iMpZSM7jR4fiEaJT618w&cs=200x312',
    'https://sun9-36.userapi.com/impg/eNeqctGibFrgHgJrFFkXhg-wWyqQl7VctevTgQ/IKhEaU-jIrk.jpg?size=1385x2160&quality=95&sign=3d6fbe5e7901de618688d908ae8db36a&type=album',
   ],
   [
    'https://sun9-8.userapi.com/s/v1/ig2/14iEqZohd3p4IofXRAdyUOJzAQSDgFZcwlC6CjeRTxlKNpU6Qdi280wNSV54LMBMRMe7ep90iQ3OEJ9OYuBGBTec.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=IozBuQpvxAoRXTNcux3i0oSf4DjeKsiKBreUzGMLLfM&cs=510x340',
    'https://sun9-8.userapi.com/impg/-dOV8gSzpUJCLMtHMH8CBksDram3VbVgJGQbfA/-Q6gakIKaN0.jpg?size=2560x1707&quality=95&sign=6cb893da47c057a6890905040a403a6b&type=album',
   ],
   [
    'https://sun9-65.userapi.com/s/v1/ig2/wdXTJUb6bg7CqmsNVwY8Hv39b7YtS7R-wrwTZrzAhBAzWSQQOIS_tpSN7vzSTXWnOtvprH2q5A2rrPkO66tcNIYG.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=BUrJ8flh2F5ORaPhiw7icN3kji1YPHs3KgYh1Tl2dt4&cs=320x213',
    'https://sun9-65.userapi.com/impg/pqSIeRO1FQp3PFbJ0wiKFeHqmzcTkjUgkTzzZQ/AlxGh9myphM.jpg?size=2560x1707&quality=95&sign=8b1621949b223e4a71a61ee64281e1fe&type=album',
   ],
   [
    'https://sun9-18.userapi.com/s/v1/ig2/hw8N7PQ57GfqiJV8lC6MfIjbdDnda-bFOybUjRLTFE4vzOnW9em4nFtx67y7zNipDpqE0HhXKgqR-jhyxg1wRc9t.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=0VOWyJAqIG1XEeWLxL5fNCvQ_7khOEf1e_wqpoksMP4&cs=320x213',
    'https://sun9-18.userapi.com/impg/6P1dND2MYsUxdYl-RPB8_Jm_W1ZZEdYVtyi9pA/X6q36acL1yI.jpg?size=2560x1707&quality=95&sign=e857db0fc3d78e612352c0f38e02e41f&type=album',
   ],
]
const children = [
    [
        'https://sun9-75.userapi.com/s/v1/ig2/PSvGVnq2HU26koxH5uiiqSZTEM3w4bDcCmVrOuAZMVD5vOo4rUjWMkAHPPtE_kLCBA-ndi-vBvu0QEMEBcanRR0n.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=yGU3ljGi549NRZB-Sd-1tx3m-hXWNxO2sI10R2Px3Rs&cs=320x213',
        'https://sun9-75.userapi.com/impg/NdHe4PrFPtp46N_ey9i3eiXvVvTFuSIP0FV-yA/06Uk3G1FbdA.jpg?size=2560x1707&quality=95&sign=60dc2d418b66eb9c1af61e49c6cb4c34&type=album',
    ],
    [
        'https://sun9-59.userapi.com/s/v1/ig2/l8IaUcrOr0EjbgsgHsTWfgvMbBZNoDRUCSkHN-10uG5BYbBfqMbqxahvIYBG3WpSHOJ-Kjq_PEiKCXVQb0UhoCmW.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=eQnmIxgDQ_WukRaRF1Pduo0pFkRYOMFgsClPBtpG3pE&cs=320x213',
        'https://sun9-59.userapi.com/impg/tilnTM8nW2xM_26BEqgMtCAFbDcXx-LdZWcrXQ/9-RkZxgyLLo.jpg?size=2560x1707&quality=95&sign=5c570d09b752804930a6ab9bee4a78bf&type=album',
    ],
    [
        'https://sun9-44.userapi.com/s/v1/ig2/lxNFwqLRmO0cVyZ-D5QcZI5LRbxk7AAahVI2eSSA5WWewXyOVG73LTF4XJyMYsM04G-ZOFgK9Qs_NNPL5TNM6zyM.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=I1-5VfPCgh3LSJw9LpsuQxH8yAomFJiEjrZO9_vaHKM&cs=320x213',
        'https://sun9-44.userapi.com/impg/heLg3fMlpOwxBMW-3RMXfApwh0uBj0kYz35yaA/3wvpEyQgWcY.jpg?size=2560x1707&quality=95&sign=772ca236bbae39225fcc14a3dc9450bc&type=album',
    ],
    [
        'https://sun9-20.userapi.com/s/v1/ig2/vxnZAwDGmATSnS5DwQOR0kYI5gFY5fIxkIaw9rvu6hlWXnbbpWAjo6-fznI9vDXIQBYBEOQz5q_TMbGyzKoQT_0n.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=xkrfxYTvy1fMo-kyTP6rlLcP7asKWsAeJOD5cnrxHF0&cs=320x213',
        'https://sun9-20.userapi.com/impg/3Gtsv661F1-ASg-0T7IQKNBQ0hr6zXXZ0S5aRw/RCmqV17Sz0Y.jpg?size=2560x1707&quality=95&sign=cfa805ac38fd169152022d5d836f53de&type=album',
    ],
    [
        'https://sun9-15.userapi.com/s/v1/ig2/SegY2tXoyXWvibOWtyjK3k1QtknMDF6NWWRP-M21bIyj5ErREXDxjMV6to-j-bMsqc1qvkIq-AAXtbea6Rr_1cwQ.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=ChaFNjTiVJwMMYRbK8tTDLhvtMYyxY3g_AezuQiy0Uk&cs=320x213',
        'https://sun9-15.userapi.com/impg/jIJ3jiPGBEwnuRAmn3mtgaHr4aQvbf84z6RDzw/St-5LOu8I4s.jpg?size=2560x1707&quality=95&sign=155bae37d0561beae9bba2594e47432d&type=album',
    ],
    [
        'https://sun9-9.userapi.com/s/v1/ig2/j4Ai8Y55Yp_qnlGSCj7r86T2krYW9X-ba8NuKz4ey84KTxtuavmF-KfZl8evC3Eu8vjT3k-RB-hCLtSRZwtt6RZe.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=iS1oa2F5OP7sd3QyxYNqnqljbuNn3GDLZXcu-RMFh14&cs=510x340',
        'https://sun9-9.userapi.com/impg/d--ISP6KBb0FDtMWBuOcXip-WsM8F26BDJwfTA/m50f0R5dwc4.jpg?size=2560x1707&quality=95&sign=ba7663a71aa49e3022662412510acce3&type=album',
    ],
    [
        'https://sun9-44.userapi.com/s/v1/ig2/oVStneGUq18wnKnmnDVrjWeeeKbAgP-rcT1gnUyRUCmVCagusd1i2DbsjaDqWL5rTI2tJiarQzl0Xj44CZEmvDeo.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=OJmeB81nqo5q7FyDq3weNTbqLVSZFjF0Zms7Z8kH5o8&cs=320x480',
        'https://sun9-44.userapi.com/impg/wmsQT4-ArGo5W1DiLnNageYHHNtK6VXbyP8BqA/7t08gV4uaNY.jpg?size=1440x2160&quality=95&sign=d32444d74088c05c7904c686ff5baedd&type=album',
    ],
    [
        'https://sun9-30.userapi.com/s/v1/ig2/Ce3CP21011vFrUNcT_8rja6958_ZgLJ2xGYSGsE_ltGeKcYnVSPi0LcgRhL1Ga221T8t4atqkrtwaa2BYhWde9Kl.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=nKn9VL6cIapOYkf0NBx4Fa-NXLEBVpSzJRZJVwrmCWc&cs=510x340',
        'https://sun9-30.userapi.com/impg/xE_daowU5jgeQTXaM8pGabrTE03xBM_gJ29gDg/9vJ36FTfviE.jpg?size=2560x1707&quality=95&sign=3e9adb0d0eec26e4ff7f14855145318f&type=album',
    ],
    [
        'https://sun9-10.userapi.com/s/v1/ig2/P6dH2tcFKgwP6xG7MJSVPAatDUOYxudkjkUKuJEo-UcXaurfqfKDJ8hYEVy11Ru1PPUue3QW3nUBFpeThOD3ASs5.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=nMtpLXgKmL2LF0zqS7yxQKB4WSe65XqvIbY3Cb97MY8&cs=320x480',
        'https://sun9-10.userapi.com/impg/MRtmzOgUTEOXuR-KGhckti5CODw67fYzU4GI-w/lcR_TedHKKY.jpg?size=1440x2160&quality=95&sign=e884cf9b0124439b4d8719370bbfbbf6&type=album',
    ],
    [
        'https://sun9-34.userapi.com/s/v1/ig2/NcQqXSxOS2K2Y0m20YxGASe628UdqdCjE51-UOl32aWzhLA2iAzu_zoYXj_H2jZ0Cv4XT96sS0p2gBNSyTVF3_Z8.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=9O7C6PyzUKKo1SMjriFIVyQ2Cvzp7nx42irlXrDbgvk&cs=510x340',
        "https://sun9-34.userapi.com/impg/iubzM6B4UBVVC7GZZKrZvyw0sgRQY_7XJM2XAQ/caeY7_hJnb8.jpg?size=2560x1707&quality=95&sign=c372bbb32e45a3a2027354e49777a497&type=album",
    ],
    [
        'https://sun9-28.userapi.com/s/v1/ig2/o5Qt1Y4EMYh-wDZdmHzT1juUkh8jZTwz878RMP80fGbBouTOpJOv2JhC7CPDrFAH6JmLUtYVG3-qB-aLww97HvSA.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=Gc0fuSbZ6xn7UsOCehP_azoP79S4N9ovfyW2Wqx4QyM&cs=320x213',
        "https://sun9-28.userapi.com/impg/JjvJVEirD8sSJSVur-7_jrWSht0WZaSz9pnwhg/Cwr3i9AhX4A.jpg?size=2560x1707&quality=95&sign=5c2c1569f14c269b254f1001c6c160c0&type=album",
    ],
    [
        'https://sun9-58.userapi.com/s/v1/ig2/TgLSkxlLbPbPJsfgQaG6aeli8LWXKHCQNsTHYwWfsKnLf9Bz4vZpRl8SFK4jTAg6f25eGv1tsG4Egqd3Kb6vAv6u.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=hotjtiki2LTiHn-jlsSa-hvKiY6b5RR6klRv9I88Fgk&cs=320x213',
        "https://sun9-58.userapi.com/impg/TjVUQEFswhNWkhFcVn2ARbzT8x0CiCnDehHI7Q/BjFH32Jf5BE.jpg?size=2560x1707&quality=95&sign=6847bee6feb09aa7263dddb094b94030&type=album",
    ],
    [
        'https://sun9-74.userapi.com/s/v1/ig2/59G3hEBLJs2kKPlXyxn0_UmTM3UeTwrnmVtMomv-a6blIpel78cgDIJlb-fkLWD3Fj91GnLDlsy02ShdnnNvAwoN.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=XubqxSTMTqQwlWVL2hcZeKuHviyy80OZLQvpPITX7hs&cs=510x340',
        'https://sun9-74.userapi.com/impg/dC9af8voRT96doxRplAvr5a5ykAj_ZI5Qi2WNw/1akq02ZttG4.jpg?size=2560x1707&quality=95&sign=794a9e91d65ffb070f65034080835666&type=album',
    ],
    [
        'https://sun9-59.userapi.com/s/v1/ig2/L_pG6XfzuFxK9HBPR-yCDXLpmYYCHmRUZUm_QReg2wffFfy1CdEbjSXDajuiOMu6DAS4ElW5q4lGy3DiElC3kK6O.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=VVbto9jaHzvg8gQyaHvfsZcps2YbnGBh50TrnrWGW6U&cs=320x213',
        'https://sun9-59.userapi.com/impg/HzLK6yd4P7R6Uh7RjPcCI18qrcN-OdvU8B_uXA/oyJ2Ccj_Fjk.jpg?size=2560x1707&quality=95&sign=84e5da3f9fde3b1cc3c9cae944d35f68&type=album',
    ],
    [
        'https://sun9-18.userapi.com/s/v1/ig2/lr7MiZwnLt1bv4ezexuCyWnwPV_hO1DkNMAXbyXBsGvKtIUQzlsaZa9T1qAxQ8VErexVDLd9SsZfMXflcn65Iqqu.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=9twqmOnE5GcuxOaP7hwXdemmjfBw66Cw0XpbqeFZC9Y&cs=320x480',
        'https://sun9-18.userapi.com/impg/dEgLHRkU_xun9Wgt_hOfU3qi9JQwm3PQ59Hz-Q/3PWIsTqTajw.jpg?size=1440x2160&quality=95&sign=772049bcce1e454fa7633cbd63f5fd03&type=album',
    ],
    [
        'https://sun9-4.userapi.com/s/v1/ig2/7e9bKnKSj2m7-wGU9qCDxxEpzwVDSUh0No1zwqcz79RMZg_0KLD_M7_E0-tXnAn0oPFfOUxGLmJBVgcQxwWhTGeQ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=KXlGH5vajfBuxggxRf0ld0_ZMw-7DeM0s85q5L6UgYQ&cs=320x480',
        'https://sun9-4.userapi.com/impg/Ksa-3J3BGzJQOgkplnfa7aDdc-e83Hao8OuQRA/yCVCoeqjKsI.jpg?size=1440x2160&quality=95&sign=d5094448f8e207ba518865480a068ba7&type=album',
    ],
    [
        'https://sun9-47.userapi.com/s/v1/ig2/rb_jmSPSSgym5-bzFGUgLPGUzqU5n7zuMoZ8FznLTfaRhOw_klnWSFosB4uDv2ZSBUJ_NDZN3gcC8zeevqTFK9bv.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=bObV-bcZKY77EqeMebh_YptAV6_JfoJQC4JHBz6nPtQ&cs=320x213',
        'https://sun9-47.userapi.com/impg/nNF1lowvk15Bj-LH59KlrnUdGcE5k--S7B2gUA/YK6ZHiy9Eoc.jpg?size=2560x1707&quality=95&sign=f6a214315fd84d42c181f0da0bf363f3&type=album',
    ],
    [
        'https://sun9-33.userapi.com/s/v1/ig2/IM8jC5Cj8RnF1kHtt9mUvqOCARE2HjdKvDOp51hPpTth74kmjXpAyPARtYDQeQXEt_N7Gs9M-7cDXRK4ipyuBH8B.jpg?quality=95&as=32x41,48x61,72x91,108x137,160x203,240x305,360x457,480x609,540x685,640x812,720x914,1080x1371,1280x1625,1440x1828,2017x2560&from=bu&u=-x5BR_cYJvOUjzT63F5gmp2UCSeMoLSXLAL3IUk_upY&cs=320x406',
        'https://sun9-33.userapi.com/impg/yzEVPIsexBZooSU5Wcr_HCKX-_ZApwKemUln0Q/4aMmED2I0lw.jpg?size=1702x2160&quality=95&sign=bf5ab7dfeb419543d64d62a5e480811e&type=album',
    ],
    [
        'https://sun9-24.userapi.com/s/v1/ig2/H4ivzzigLJ03bvwiZTMCWl24C4MJDZIczNdVbYdwbIUzT7MxvoHkR210Rg-es2kJjjbHrpquW3lg05B_IQmBidmN.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=3cIwJofFnTOtQxYiYLyHyMWjpXJJA2VhQEhuT2c9bJY&cs=320x480',
        'https://sun9-24.userapi.com/impg/x8Ih5_nXbte-_tdKCuqelY2JVIiuyN7Dj9MVrw/evMJHACAPyk.jpg?size=1440x2160&quality=95&sign=6bf30df9feafcab3df4ccaaa9202b765&type=album',
    ],
    [
        'https://sun9-52.userapi.com/s/v1/ig2/k5XBB5mFIXADkZqIxJKSTNGigFo1k98t3MNbPTqCyYmKw46WNeEDfP7j5xOmPoc9f-N-ktFNlvqb-y05vNL8zzGT.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=1wHJuELQ9AGphE6212lVhCsCLz03maBr8VTPftRzF-A&cs=320x213',
        'https://sun9-52.userapi.com/impg/ypYBjyPTbnD_2LdC0VqfVdLyDLyx_fZGc2PWlA/vu5O_Zt2OxA.jpg?size=2560x1707&quality=95&sign=01609861436144203711b0f86eebd62b&type=album',
    ],
    [
        'https://sun9-17.userapi.com/s/v1/ig2/_Xm8duHxQZptbwzhSplZx2h_x9UZmiTOcaexIkW3cna3dL_EugNIb3pEzw0ZkM3kHElYf6c2hdFGhvJPKLDbD3gz.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=mXrhLguz4bfpz6XMQrqFrd9sjt8SFLQfSq2xAzoGRMA&cs=510x340',
        'https://sun9-17.userapi.com/impg/pqzKb4yTU9RXsMYpNmqKqlEqVvzxkn774lHenQ/YLwzfO25zKo.jpg?size=2560x1707&quality=95&sign=36e19f7850e299136526f6864d3ba1f0&type=album',
    ],
    [
        'https://sun9-26.userapi.com/s/v1/ig2/30bgTtDuiUgt5LSW7kQBtGeJrOllIt0NXvcB_Q6b3sgCHYQlMRlZB22G50jYGMb74N1m72jbAa_3VJR20wWJdTQu.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x960,2560x1706&from=bu&u=WveafiJ9P-9ConVIONj_Ut9aJZ5glnS8sGNZiTZFyP8&cs=510x340',
        'https://sun9-26.userapi.com/impg/xWTrm-Sd1eTK4sI2Kfhb2g0boZwvQ5Mii7lhqg/2k-ijzpSGpA.jpg?size=2560x1706&quality=95&sign=463d8f0dd68bee9aa14a0366ac9b3c02&type=album',
    ],
    [
        'https://sun9-55.userapi.com/s/v1/ig2/2m_BfQkuSJI9FPycxy7vgX2OW5pJ0uww1om8ymKDtqURdXOJemNB7TGlsbneC7UxhWNi92HvqIWWZGj_DT9pjdWj.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=gcT27yt9kNu0wxuw8B8ZDjZC2gxjahs66Vfvx73Wm-o&cs=320x480',
        'https://sun9-55.userapi.com/impg/5bb1w9uy6MT9BcfddjMDAPp0_f1rVDNS2-IN5A/gZGgDb6Dlmk.jpg?size=1440x2160&quality=95&sign=6d7ccfa50663343ce5860d63795e8968&type=album',
    ],
    [
        'https://sun9-46.userapi.com/s/v1/ig2/PpToQyYBFrHZdfVzyPv6Z69DBYLWEgZZJVn7XzNm6Bp7SfpLFZuw3fefS47nJzAHIydYsEG3cPYk48TfKre5AULT.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=veqRDwH1Lkp9Av7-TQSkSGeoUX7OtdaV9XuWX7D-ERA&cs=320x213',
        'https://sun9-46.userapi.com/impg/GmNYG502ZvJ2y60g99z2ormnCo_1lKgYJQ1mkQ/4wS-9ZeXUGM.jpg?size=2560x1707&quality=95&sign=7c8815f1930ef6e11a080617f2b5f7e1&type=album',
    ],
    [
        'https://sun9-42.userapi.com/s/v1/ig2/0iejmbM8et-xo6AAtYv6RC-kSp7DUf3gmo1WZqsZ8bz9zBeif8mD2xY1fZ8DeT16snN2OBHHjlv0TpulpnPlykhl.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=i8BWUJg7b1F5GA8UPIKrst7SR0vd78-bkMnGnt6XyH0&cs=320x213',
        'https://sun9-42.userapi.com/impg/N3L1Ku4H_kefD9KJMp7ZOAdipMxVSN3LiOTxKg/IWhczqlOm5s.jpg?size=2560x1707&quality=95&sign=09dd8bb31d66e048bd68ef5eb38d906b&type=album',
    ],
    [
        'https://sun9-78.userapi.com/s/v1/ig2/R368fL8qMVZw5Cz7gEwwND000-aUUaQ5vQ5mGjGH3ZC2NFdEcUHovd9c0EaqHxqr03WT2LAYRUhEiwj50xcqmczi.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=7RqNbTysBS6jPLNy4ciDB35Nc_hzvUsP928831M3AO0&cs=320x480',
        'https://sun9-78.userapi.com/impg/amwiDpLqETmZ2sE4rc6mtRoJIfxj3M6inEY_1w/RNfkg8s7xdQ.jpg?size=1440x2160&quality=95&sign=97da2f9c3449cd97ea896d5c4507a448&type=album',
    ],
    [
        'https://sun9-78.userapi.com/s/v1/ig2/KCSo9rxxhXmlOt3cyc6o7PDLwuSCiy5kE3Tnt2tLXRsHnI0gUeI0yxXMbH7twcgFCF7ykn5nk-SKDUu5rSmg90y9.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=aNONLzXX85j8gVrjTbQRR-g-GGQfmGrzItEdtaoOy9Q&cs=320x480',
        'https://sun9-78.userapi.com/impg/MPrj-8Frt8fjiRw02LpB13nIBvnRHRKSiv_0Zw/YbGUpBfHEcc.jpg?size=1440x2160&quality=95&sign=69c29d6e5c4e50496a4fdf9495e565bf&type=album',
    ],
    [
        'https://sun9-74.userapi.com/s/v1/ig2/eJvhTOu25frYWuyIFqC_l1rdc3BBTKfEpEyiPh6UmZotf02mlYPyyH0Jm0rFJMFqgVj-r2I9snJe8fKC4eEssKFd.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=ZKG40enk-DdciE_5QApbttlqubRMnVCbN-77k1lx4O4&cs=320x480',
        'https://sun9-74.userapi.com/impg/D22um2WmBx4dOzUOLmXY_w0HL2-_NnpSrQWzYg/4mILmhTCYTg.jpg?size=1440x2160&quality=95&sign=61cffa6c6818b2e36c00368f52a32b23&type=album',
    ],
    [
        'https://sun9-47.userapi.com/s/v1/ig2/wcg4kQyyApkRzuKEHtRO6e7nTzpLU3g8WK6XJXcU2DmUHPUY14zlmvlFMsPF73-dxt1E7SO07ENTMeM0UAcK_kwq.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=v7FAHNFB2Laq4HClmOM859qwhp9IBi00ZmK11r2A3Fc&cs=320x480',
        'https://sun9-47.userapi.com/impg/lXPVVu7M6NwCxU1zBKr9jpe2-7kyDKATNX7BQw/R4uterM-y_c.jpg?size=1440x2160&quality=95&sign=57834352a02e206bb81d1b1717625768&type=album',
    ],
    [
        'https://sun9-27.userapi.com/s/v1/ig2/sER4Qe_E78CkWIbAKRKq0aVoEp32A-jDnShalayAbPqjcEzImiKUMwci3Xsw6eTNAWYPGs1L4QSFrtVZ4CwxaV2E.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=HkNh2_FaFxnV7blqSPqUB3hRRv80OWMWFay3ndNUyr4&cs=320x480',
        'https://sun9-27.userapi.com/impg/FHoKLMfe2Fr4gW4pNzVlUYVxWxajQ-Acim-yeA/Bxg_NJsnnKI.jpg?size=1440x2160&quality=95&sign=d0c22ceea0e5820fd9042006dc956f0f&type=album',
    ],

]
const interiors = [
    [
        'https://sun9-77.userapi.com/s/v1/ig2/XWFe3ckw_ZglvqaqBkYZvqfVXw-5WcQf_4fDmf0NVnJdWbMxVDiTRwMEv_gk42_vtYAb8l7fDctc5Gb4OHIu4ek-.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=fD-4suC-aPLNWLUahqL7TWuLWaBTYJVnmlAecyVKnh0&cs=320x213',
        'https://sun9-77.userapi.com/impg/mbHFogEu2tWvmuB3HaWhhiVrns2Cedru0OnF0A/tWDtdBOzhzE.jpg?size=2560x1707&quality=95&sign=ecacfcdd2c8ae6c1cfa2eddc586e3cab&type=album',
    ],
    [
        'https://sun9-77.userapi.com/s/v1/ig2/RwujntRDON3fPTHdBvvV2g-Xl5T7_77JLkJpsaJnqd9XdmcpFfixZ4V9t2AGBxOOZUq9fuzz1vUitDVeJKaO-vyQ.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=YVo_VzsKwtFiRIYjclaxxgArk1-2MyA-n2F5BiMHlDQ&cs=320x213',
        'https://sun9-77.userapi.com/impg/TOoC0Xa_o99kw7pUR9FR67NK36Vu8-CKYXdvcA/ZmEg-2xrhmg.jpg?size=2560x1707&quality=95&sign=42bf4cde31b36d7f11adf7be387b0b23&type=album',
    ],
    [
        'https://sun9-75.userapi.com/s/v1/ig2/pcVRHwdGicdpPY_HalmU73nTZKMGzhbLvUuVcx5tg_WvvPVYzfnrIU62wtd4_4UT9RXkVemNBiNl_WpENxFGTg56.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x721,1280x854,1440x961,2560x1708&from=bu&u=Ol-CBajh9eMjt7tZ4ZK10HGtOeKTvi7_L4HVhtNyGZc&cs=320x213',
        'https://sun9-75.userapi.com/impg/EyNgyU5uyvDzbITa3BBWIa-iSYQ2_fxM1wa81Q/COAshxYwW6E.jpg?size=2560x1708&quality=95&sign=b9e458b34b88503b30f3ef5a875abdc1&type=album',
    ],
    [
        'https://sun9-62.userapi.com/s/v1/ig2/DBW2Gc_3l0L5YSEyj4PgLI93kDEKenqlL_4CuuWQbcmNj_l9zunhT-CDebktND77L2zB-W4nzhsY9zH9ld1Nbutm.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=v1jjyY5doctZfhRvD2w9zHZZYA2uEXJ9qxjhKJK0474&cs=320x213',
        'https://sun9-62.userapi.com/impg/fVvq8uik6d_CxlM34mjk9J2AFgjfXwg4GzJ6kA/VJzIXl5e6T8.jpg?size=2560x1707&quality=95&sign=4bcef637fa4b7e58f2563e2266b9323c&type=album',
    ],
    [
        'https://sun9-43.userapi.com/s/v1/ig2/nCik7Nrx4QGU3ZfU_BofVJvbXXaKtfExzJNI2RHBTM9wvwC5eDuRpURrg8K0-QvkptNzXHyrOivzKclBUytilbVP.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=TrHjPTofcUiDNzHQ8FuvZVVBWh0RYKexEwKj5FOBIqA&cs=200x300',
        'https://sun9-43.userapi.com/impg/-En0_BsMK09AAepeVYbyDhlHFnl3kembewoDnA/MvZyDwSIi-o.jpg?size=1440x2160&quality=95&sign=7612cc922edfa5aa8608187df6df8ceb&type=album',
    ],
    [
        'https://sun9-14.userapi.com/s/v1/ig2/WH-vMXKlp7so0Z0mAu3WamE2fL9A4Bb_SXrzlOvUz3wrICq53fvJKIRalDCfaCaVol7w6eWpTHcleLgvnJTB6JZq.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=_-rubOgw3ucDdJ68n5ALxC6VmdvJ1CNBz-BBbV_JeYA&cs=320x213',
        'https://sun9-14.userapi.com/impg/p-6rAvihbb_RMuVJlmkEqMLT7sAY-RX3u6E0sw/X10euBpmL9Q.jpg?size=2560x1707&quality=95&sign=0f0e0d3fc352be840004e088c5f79ea7&type=album',
    ],
    [
        'https://sun9-14.userapi.com/s/v1/ig2/gQxMshhExB7ZDRCZo1pGhvJCfx_NEmMiuJU0F7VmVZDNApnzS_V3dLsDCAW4o077lOqZxDg-9RfMQGg89yf0TSZK.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x481,1080x721,1280x854,1440x961,2560x1709&from=bu&u=y0GNJ9mcY6wg0XDWlmSi5rz2kZ9HnuScalQSP5SvgJA&cs=320x214',
        'https://sun9-14.userapi.com/impg/0-v0cU8g7dkxLWHyeJAZioNFEAHoCYwOSchgzw/7ofD4g22YvM.jpg?size=2560x1709&quality=95&sign=d56de9415cd2ea49638320503359e693&type=album',
    ],
    [
        'https://sun9-20.userapi.com/s/v1/ig2/KFhTWPS1AP0B0vh1sav4HlC00LPwoO_tQQQNQDeEMRyMjQ9XOigAV_ozVWlQK10w2YO7N_YtHOoPX3-RVAVmV0VL.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=mf11jLlWjQ2n0Ya7AGKHwDOJwPNEEkvlp9bBCbKUCGo&cs=320x213',
        'https://sun9-20.userapi.com/impg/imliZppQI0IAn7Zcrk_oZPek244LI7cEAO4Erw/omzWuo6TmhQ.jpg?size=2560x1707&quality=95&sign=a4871dc9dd64a3a7d51609ce425aec50&type=album',
    ],
    [
        'https://sun9-62.userapi.com/s/v1/ig2/4SC4oH1dqrLaY5xuLlX79bZaYNutGZtMgX2zee14r70uGKA0JNoymHRWrMfOtMTsCzCbCzqiCKBhMwPryGzBvmpa.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=IgycaPs1HTXPcbGnrud6jv3w7gCQyWkZPCJv0vJcHvY&cs=320x213',
        'https://sun9-62.userapi.com/impg/krjtKUXgXxFxS5T1JFhNvo_fETfhH3xXEFvMTQ/b4yevlFrob0.jpg?size=2560x1707&quality=95&sign=b7f8ba509d894ef661bfc474f36b672a&type=album',
    ],
    [
        'https://sun9-3.userapi.com/s/v1/ig2/nF_dr4GjOkilCJIZmdvUp93GTpiKJj9PXMbWXIjLYc-UXlDMKdB3-x1xbsn82r2fa2O4XP8HVN6k6u7WY3mxozdE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=ScIBq2Lnd8W36pPdftOAszk9rEPsWEPHjaQeUoCRcCI&cs=320x213',
        'https://sun9-3.userapi.com/impg/V3rZUjbkELgAvA3lSqYwl7uBbaR0fTxxdWF_sw/e3d3A6EvWVs.jpg?size=2560x1707&quality=95&sign=08aa8405547c6759a25fd0e9f9f02aef&type=album',
    ],
    [
        'https://sun9-54.userapi.com/s/v1/ig2/QA8_Ug8wuHAC7xxF7Wyguioalba2BQ_E27g-ueKaT12_pEaba0OukYtgZoJP8vW1jw6kAQqqKu1IfLvt34OLpecu.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=rQbzR6DJYpjAGK24-GMgaIUz3wMfFW05WOWgjJMcEeY&cs=320x213',
        'https://sun9-54.userapi.com/impg/hnkzX35fmXfhqRoE8FEmDK1k-m521CrofuyF0w/QSnrVEbrnTE.jpg?size=2560x1707&quality=95&sign=2d3cc9eebc24e2f70f36a024cba720e0&type=album',
    ],
    [
        'https://sun9-21.userapi.com/s/v1/ig2/TuzMQVPpdI1LIeQXAPnnJ1_xXrh22_-bf1HFdHE8MyZ8m5Z9x8W4mHGlgn4HU-CEPygmws6WPSoYR0WJl57JQUS0.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=voROmdBrNq8v_etR97XWFf245YfOTU9wAXds41L22p4&cs=510x340',
        'https://sun9-21.userapi.com/impg/fcPccL4qcqRWg6B3dilPbf_WN09z4t5qlaSLhQ/HFpDHe_d2fs.jpg?size=2560x1707&quality=95&sign=7e92e7f28392a9d995410e85e9d7b1db&type=album',
    ],
    [
        'https://sun9-79.userapi.com/s/v1/ig2/44HDW8MfFobkbfWeRg2hMVFnkjtKueV57Ga3_3phl31s7pyfNqw6U5Qs35LLUAhJyN1N8LbxVriCJo-AAQJf_ZHa.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=XW76iJFPaRJd0QJcIVOpeg6Bog7tgA-jXdHVm4-Ctsg&cs=320x480',
        'https://sun9-79.userapi.com/impg/QeVciGgSuMSRa1CW0YsUdOWOchjR6Iw6yclj5g/BJfiHvjRWQk.jpg?size=1440x2160&quality=95&sign=a8abeb5af6c2e12ade2bbb280190c8b1&type=album',
    ],
    [
        'https://sun9-31.userapi.com/s/v1/ig2/Lwpj5nZQFZAEpFYYZHZ6BW_3DmYb2kU8GyptjptPzHHv7icvg0m93XhSUVtHhdOarp1xTm1uf5PvLvyaof-T9cwW.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=Ta1RzU7qpRYSa955iRvZ1aJ1EgkRQXlRbxn_YcDJ_z0&cs=320x213',
        'https://sun9-31.userapi.com/impg/JpO8XxewPs4Q-2AYdVfLFySJJCg-tAK0UtXbCg/WdOA8G6KiGg.jpg?size=2560x1707&quality=95&sign=1abea1ad98df73d87b2cb9fa78bc8547&type=album',
    ],
    [
        'https://sun9-63.userapi.com/s/v1/ig2/lewchkY4yh1_Y7hGobI89RDmlLxdvmIc0CMCKTfYUOp4Ih_NmfHoDTqdfBTonxI0qDi3BHDUViQBBe4TIfW2YOxd.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=vzJYHQbcSme_BO-6ZHCF-9HYi9H1_CyQM7iW1m4AarI&cs=320x213',
        'https://sun9-63.userapi.com/impg/KCuEMmJtGLR0MAohwW1jlipoZ3TqvbnkVRa6Rw/SIH4vNE5jwU.jpg?size=2560x1707&quality=95&sign=8d4713a8423399d0daec4aeadc6a2307&type=album',
    ],
    [
        'https://sun9-55.userapi.com/s/v1/ig2/_mm7H1CDMFEUZo8GNXVDEBR2MqoR-yQzcwz3gFK0nQVW-MdvStrXH0OQsAAJ7EMnJB8GkviFC8QQTAwKs7JrMtXj.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=pcpQT2dhk6MapwpIH-ETwYo2G5f8EKxdiR-0uC2qeUY&cs=320x213',
        'https://sun9-55.userapi.com/impg/UMAICpkeQC-3PwOf_JZ_VRsfwjBAx7-aqtc-eA/_0b_lCKAnRc.jpg?size=2560x1707&quality=95&sign=499db8908b671e34d59f2d5efefaf3c7&type=album',
    ],
    [
        'https://sun9-2.userapi.com/s/v1/ig2/rRfmEYglU-e6TVP4v3cNibwG3YfQ-EAIY0KUJfwB_na7feu5pVdAJvgeImfv5av6f8LR8Ri6B6nbCYC4TBhgKaiY.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=OVcAI09eOFgc_9R5_kBWUZAy_msEi7m_7oB-Qkk1R58&cs=320x213',
        'https://sun9-2.userapi.com/impg/n9C91y7yDbpeoJdajjG8n1zd6zLqJrd0CuFIiQ/iphH6TfBCqA.jpg?size=2560x1707&quality=95&sign=2de665653b379f600ff7a17051b21e43&type=album',
    ],
    [
        'https://sun9-1.userapi.com/s/v1/ig2/yOpH_EDN1CjGBnBp85V8vswrASuOwt6o3oYtVIAkeBQC-wtkzaZDNdxQM6nmeASa2VLaYQH85afWZ94wDGrdeMr5.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=yNeSkcLbiAw8IvkvQCmX469XG8fu8WC-Jc9Dl134FRw&cs=320x213',
        'https://sun9-1.userapi.com/impg/z06aSp_Q4edf7RlhehRgq-KLGYDY8sBDXi3xaA/Bz3-iNdTc6c.jpg?size=2560x1707&quality=95&sign=6f02b7ee52d1543c6eeb20fc28135baf&type=album',
    ],
    [
        'https://sun9-48.userapi.com/s/v1/ig2/2xVQozZdzOF3igBBZJy2Y20JyqQsxuhIPz6sYjbNzRdrV2FNj_zWF7-t4qE2Uh6JLQa0ppNxwUU_iLodWZymKouC.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x481,1080x721,1280x854,1440x961,2560x1709&from=bu&u=h-u2ZR0gqXf_QZ3BpdVckZggu9qyzhEsplrWM2ZdST8&cs=320x214',
        'https://sun9-48.userapi.com/impg/60ADibYx2LShHGDOf76diy00k2gjy778Mj1Pbw/nR0EcFYLAxY.jpg?size=2560x1709&quality=95&sign=85bec13af20495bd25f3723fd1e5578c&type=album',
    ],
    [
        'https://sun9-62.userapi.com/s/v1/ig2/h-YuAwqHzPtREqc8tHOVdb3eAR4tWzZdr_PoblFc914PuGkQLzGzZEjzQtX1U6AR1LU7J1O-wCVSppcC__bmkAUT.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=4W_sfCpM7-LJ7HeZyuY-f55ppfsaNDdwC43dXflzVAI&cs=320x213',
        'https://sun9-62.userapi.com/impg/RlPXXzV9K3i2Uo4yNAss60Scd1nm_TzJD_AQNQ/FCAMYlsURFk.jpg?size=2560x1707&quality=95&sign=bb9078f5643f5962695b30183c8b1d31&type=album',
    ],
    [
        'https://sun9-13.userapi.com/s/v1/ig2/ETWbW66MQmN6QHRj_ALSKIYSTEoJnrhqINj65rxfYIOyOIUsoxexrKiseKYhuR-NEANkxOOO0T36zdN6tqIDScw1.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=rNWqXzWYvo9VlLips3jitfZTEtuaSxpnfG-K3J5dlyw&cs=200x300',
        'https://sun9-13.userapi.com/impg/C0k417wt16t8shZvwhflC5rlIFu_TYvyYeo4vw/DjoLnrKuD50.jpg?size=1440x2160&quality=95&sign=cb0b14a7b2fa76b0890a77dc66a43875&type=album',
    ],
    [
        'https://sun9-37.userapi.com/s/v1/ig2/7oV6Zur90BGA_OK-yCIS1lGWeRo0GSq9DNArKVE8N3pcYoxuBKe77Md1LnEYKdJkwZyVVRR-7Bd6uO3F2arxYyEj.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=dW43Jhbks9DLlh5RldW1Mc4QeqOPlsXJqgOxPyxvB_Y&cs=320x213',
        'https://sun9-37.userapi.com/impg/jjTcrscNZC4shg2KUVh04yALWqqbVw5uDx34vQ/s0bKWBGeB0Y.jpg?size=2560x1707&quality=95&sign=66319c91f7f19b2645556fe226f186b9&type=album',
    ],
    [
        'https://sun9-10.userapi.com/s/v1/ig2/VMuszmpu723F_ECbiA0EAOTUSnkhswGj4AwAVYwhFsqMR4C9JN9RXywHFgrdxxmZ4rj0Hg-YtVDme9vCA6E8NMO5.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=3R3Qq1Nvm56shpLe0H-cvVUUs_jc2P5gKnz5tQzQ1-Q&cs=320x213',
        'https://sun9-10.userapi.com/impg/9tJDXLYIhYDlC4Dj9jrxYTw6hBKWhqahnKNcCQ/p6TpnuuulBI.jpg?size=2560x1707&quality=95&sign=91bfe82f17615a0a8acb398d78f38355&type=album',
    ],
    [
        'https://sun9-7.userapi.com/s/v1/ig2/JXpY2aUcw6EKa_rkGPMGyesjMXJtXLVqsdg4pOFj-WiIgG1rR4cErMzEtesLoJIMqPRtKT3F4H3qs7LvfjUWawuW.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=prwtul5QWm1nGvrN2coThg3IeFs3hhuW8LaatCZeu0Y&cs=200x300',
        'https://sun9-7.userapi.com/impg/dskdzjXSaKs8ZhWgERVdja_aBphE5HGHX1YE0w/pcfx72878SM.jpg?size=1440x2160&quality=95&sign=5f12cc1078a136b64384d1dde6b143ad&type=album',
    ],
    [
        'https://sun9-36.userapi.com/s/v1/ig2/kjZLsm0JWyemouJVP5DTscYtoaQHONdK9BibPhu0-T3Q8JZohl5nndPEXt9HOD0YJFEc1N3VrrgVzsTw2HVjn_vh.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=BOcvTmuuuoEFgp3xnOhxDJ23jK5XhVJDxCf1oH0oW7I&cs=510x340',
        'https://sun9-36.userapi.com/impg/kkBSB1RWVW5hOlEOrQtSjq0JI5hx5kClUZtJDA/IQdFJOM6wyY.jpg?size=2560x1707&quality=95&sign=494e812f9494ebee5f05478dbe870c00&type=album',
    ],
    [
        'https://sun9-64.userapi.com/s/v1/ig2/01hJabyNGI_-WCTc2mRc-4GyEA7q0Wd_dAjVKLCJ9clodE7UCpl2mPDFfVu362HlkRK3weUdHKz17OXYuzfJ6dLA.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x161,360x241,480x322,540x362,640x429,720x483,1080x724,1280x858,1440x966,2560x1717&from=bu&u=WaUyYSYdQnwk14EFZsDh628M-QWYRO4vVUEpnUAufIA&cs=320x215',
        'https://sun9-64.userapi.com/impg/z05fER9aS84PK__UsyE9pwJ_lGOLRJae5r1npA/k6zykIZKzGw.jpg?size=2560x1717&quality=95&sign=d2948423eb516b5a371c9bbd303b1f71&type=album',
    ],
    [
        'https://sun9-59.userapi.com/s/v1/ig2/s1QUYJj1QOlxMwLOusXUms7T7a3ue2995eKUJ0bdn6UvAHYpG7AGkI6s9bkUSruJXTNcXEhzfwV35prNnVhMWD3z.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=Z7HKGU1amynl-huDdzCAerkazkmoDimK__KxYvFBmVQ&cs=320x213',
        'https://sun9-59.userapi.com/impg/Q2XOP02TKqDaF0q0kkw6zQHW5u9ywvcCAPL4ug/EdGwqpGTVj8.jpg?size=2560x1707&quality=95&sign=8da75f80fe7845112d658a8db8f22bb1&type=album',
    ],
    [
        'https://sun9-71.userapi.com/s/v1/ig2/50YINQJ31bCrjL-VL49L5qwqZjQ03JIX6trRf_ZF3ynLgmw5c4PUfBh3uB_MD03kmYbAbuImEzkQfMmmbY2-Utmz.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=uKqZRBIGXT2XtDFopfdUJIX_9CAwd5fiJkN9sL3MxUY&cs=320x213',
        'https://sun9-71.userapi.com/impg/LGpyX27NVJH52sdyhLD-0XkTMERiUYDYUgj_XQ/gMLL-jC2Ons.jpg?size=2560x1707&quality=95&sign=d62db6dae8915f1b7952a690d3db3599&type=album',
    ],
    [
        'https://sun9-18.userapi.com/s/v1/ig2/viXx8dahoXNxyi8AMdzxePBLgr1EQf93HGfeIutm3jjtlpDaDnklnuIPuLRTZMvFzO4GcN_Oee6Gtkgx1mGTalus.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=XEenv04McLC5f7FLs4bqGoTjETCRYk9g_XcYSTRFK-E&cs=320x213',
        'https://sun9-18.userapi.com/impg/oA-uDXTT_XFNMINP5tZ1fP8LmGqyJam7_Ldt1A/vd0eNiFqZMI.jpg?size=2560x1707&quality=95&sign=4a11844460c27e4a89f4c70b15f6a218&type=album',
    ],
    [
        'https://sun9-61.userapi.com/s/v1/ig2/_44M4hzt1YEnem9pB5T3fLZApgl3s4qOfHaZVWH1adIbmfaOzHvKR-vU9snsemHc1DYXDTlAPm1vE2lOipUexrbk.jpg?quality=95&as=32x22,48x33,72x49,108x73,160x109,240x163,360x244,480x326,540x366,640x434,720x489,1080x733,1280x868,1440x977,2560x1737&from=bu&u=X2Nl_Zs-4WzaslGw7xHjqjF76CVefuOHvhrJzGN3ico&cs=320x217',
        'https://sun9-61.userapi.com/impg/hs8hY_3ly2ep-_idDVhEXfDdGcSA34uMU2ZJUw/9Pa2cIZg_Kc.jpg?size=2560x1737&quality=95&sign=35a8d372d4105b84bc10c8b0c93cad7d&type=album',
    ],
    [
        'https://sun9-38.userapi.com/s/v1/ig2/kVN_YaCm6FJwMRY_bPmY1KTaV8elpVWd8QVhxoWIvfs2MT2gC-YKiACypUqnimeyx2_Mj-ZwhrSqmuvXzaf0MW3j.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=ENo-KwiPvH68iS2nEC_uBz6nhFHujyLBu_BYl-FzLm8&cs=320x213',
        'https://sun9-38.userapi.com/impg/PsY7ZtXy7E8e9DKHPQlgOIq8XcO9nRIy-Buz7Q/r23sm6CYdHA.jpg?size=2560x1707&quality=95&sign=d1479c7dea7d0c811d5c6359bf71c458&type=album',
    ],
]
const products = [
    [
        'https://sun9-17.userapi.com/s/v1/ig2/rp-G1B_cf3uwS84BNq-KhxKRKAK97ZYp6ZJt_wigayt9kviYEFTNTvDTvHycsEaBO6RLT2kaEvpFV3TFe_if7p3S.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=z6tmXAb8DAcrJn28mvHycz2FF2_YL2ARRDKFIwAjKa4&cs=510x340',
        'https://sun9-17.userapi.com/impg/LQSNrg6wbK7tkQ-sV--tB793M7w2O1hm1oBCfQ/hdo_FEA8rlE.jpg?size=2560x1707&quality=95&sign=980a9d08f3450804ad0750bbffb461f5&type=album',
    ],
    [
        'https://sun9-77.userapi.com/s/v1/ig2/8qGOHly2j7KHR5vGpDUKCJaH9f_26sQlBr5IqJhACgGhvIoXaJVG6_ka65tk5I3t8yU6pDG8HHCDGNRLGWBq9M0S.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=ivy0noSs7Bzc9kxsTXJjW6ur2qFaoyi8zdT1A8fX50Q&cs=320x480',
        'https://sun9-77.userapi.com/impg/MfMRoQAp8BdUDQhbt3tbnYlr6Y7-X3-Cbeg6_Q/04GEZ_kfoFw.jpg?size=1440x2160&quality=95&sign=5d3864520bb57ca5e65eadc2ad86dda2&type=album',

    ],
    [
        'https://sun9-9.userapi.com/s/v1/ig2/LEn5cFPgK0vaYMYJ5gy6I0aqH15qbRxp04utvV7wEHyaM8fSsfJc3Mys5BEIakWOet2JH8NUlUDOkb8XrXmeAt89.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=hZvM-HuLCoOEx1GlHU_wCT1WmY1qFjL_TuzcIJS2774&cs=320x480',
        'https://sun9-9.userapi.com/impg/Zp_QuRpqJTfMJuuWIBlzNl4r9ytbFCVbuKqLTA/fGUkQYp61Ig.jpg?size=1440x2160&quality=95&sign=66f8a4e3f1f4e825ca5329daf06b9095&type=album',

    ],
    [
        'https://sun9-1.userapi.com/s/v1/ig2/jUfz_6jkbhi-M6i4e6ceaA7MT7x9sDQl4wMhEBKtU39YITCVuWVQWKLBp-wCY_N9cjKm-V6VtfZr6Jo7LIwXhpKd.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=iEIKskmHNqb31mpVExNnj_ohTXhmomw_WnMb21vCG8A&cs=320x480',
        'https://sun9-1.userapi.com/impg/aYFWHoP7X_ZXpmbKHJx7E6WiWk1TKIAFt9ajBg/5kyvDV52usU.jpg?size=1440x2160&quality=95&sign=f17eab78eef893e1c8e599f613c1d66c&type=album',
        ''
    ],
    [
        'https://sun9-8.userapi.com/s/v1/ig2/ow1iTpkCWmtzzH4onhZp443JKkl4tlZTS8Negq8urpXJIHjehR7RD--kN8Q-c4ZVtL8WRqY1ZPChlKisLkB5FQBo.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=ByvruzK8Yziwt8Z26aGc2tEUeJDBaQozfSzpfoyXKjU&cs=320x480',
        'https://sun9-8.userapi.com/impg/NcHVNbYFX_0RcsoBYzz1E3RioTfQx-d76bVpOw/NYP2CYefP8U.jpg?size=1440x2160&quality=95&sign=a4a2adeb9914d6a8250f89e6487f72d4&type=album',

    ],
    [
        'https://sun9-17.userapi.com/s/v1/ig2/Srm0jfWppzC8YM4OJA4wFh8B-Wy1qhJvmdCNCY0PLsIrFb9B-_Clkxe9mVGOqo-lJR7K9m19tWgi5trGQJvaUIyt.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x425,720x479,1080x718,1280x851,1440x957,2560x1702&from=bu&u=3AjMZtS5t8z0brZdNA35MAyPJDFyhtL6AoZTcdxesvc&cs=510x340',
        'https://sun9-17.userapi.com/s/v1/ig2/Srm0jfWppzC8YM4OJA4wFh8B-Wy1qhJvmdCNCY0PLsIrFb9B-_Clkxe9mVGOqo-lJR7K9m19tWgi5trGQJvaUIyt.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x425,720x479,1080x718,1280x851,1440x957,2560x1702&from=bu&u=3AjMZtS5t8z0brZdNA35MAyPJDFyhtL6AoZTcdxesvc&cs=2560x1702',

    ],
    [
        'https://sun9-80.userapi.com/s/v1/ig2/Ve8UFepRWtlR0N5C1I47Y_iJ-ZfPmgsy7Kmby2zSMuU9jpwG8KMiF48OP9AOIQsPkUaeCBDJ3uHEU1VJ_wZINIVA.jpg?quality=95&as=32x52,48x79,72x118,108x177,160x262,240x393,360x590,480x786,540x884,640x1048,720x1179,1080x1769,1280x2096,1440x2359,1563x2560&from=bu&u=zaTv-f4ESTEUFgvKRKeJmvBjokjDzpWSAB6RgBKF5-U&cs=320x524',
        'https://sun9-80.userapi.com/impg/AvaC434gVLGghTIFmcLrDhuuVf0UDzJe2WEvcw/xomY8FsOt0A.jpg?size=1319x2160&quality=95&sign=bef3ac3800fe2273e5c4762966bff91f&type=album',

    ],
    [
        'https://sun9-11.userapi.com/s/v1/ig2/bMR-JtQ9nohm7NIC5a5ex-XL3S4xPwIKzeQuC-nXd7pinDDaw_Xo7RZ83Mn6sox-ET7QOdN4XOqgxmqfqtWX31v0.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x541,480x721,540x811,640x961,644x967&from=bu&u=5-4JyFyw1coj-JCaBiY_JLYJM87BmsSlnBFBHDIWi2M&cs=200x300',
        'https://sun9-11.userapi.com/impg/7bq99xueiZIvrt0rar-IYf27-FTKO-beWAoGiA/CKrvFr8NNfc.jpg?size=644x967&quality=95&sign=f746e7e2f88b43e322d2b87b25e2b9c3&type=album',

    ],
    [
        'https://sun9-11.userapi.com/s/v1/ig2/jaDwXr0hh9NnPkxsdaHTJzJsHQ4SPafVzVxmWu-dt1rEtgi-uHrtynHSj8zw6iUlg9Agpmqh7-CYBhMEmmC8osuA.jpg?quality=95&as=32x46,48x69,72x104,108x156,160x231,240x347,360x520,480x693,540x780,639x923&from=bu&u=lk56QU2mbSjeEf1XuOpkJJUQbHszbVNtipuIqTuTz1Y&cs=200x289',
        'https://sun9-11.userapi.com/impg/ty5GyKawyw7TscsoFiNaqUK2j7JIIzL6OBd29A/-bwVunJCZ_I.jpg?size=639x923&quality=95&sign=75ea173228b12f24dce13a44d9e9e61e&type=album',

    ],
    [
        'https://sun9-57.userapi.com/s/v1/ig2/nsblt-4svnfY3RcOmTHfMK7TJGnRRGyNhkKm3gtoj6_7RfOVdxwXkfJTpnbvglylFyVUWw3ZsvoJmbdtFecN1VN9.jpg?quality=95&as=32x47,48x70,72x105,108x158,160x234,240x352,360x527,480x703,540x791,640x937,667x977&from=bu&u=otxoEDo3uJzCfRNPx8GrzCj17F9RO9DlPPYKtnBe7Vo&cs=200x293',
        'https://sun9-57.userapi.com/impg/61dwOj5jgO0BtAkLb-gtVyuLY0mDGMDet2ydrA/IUT3PQCF9V8.jpg?size=667x977&quality=95&sign=22080b897a5857812bb3322efe6b4bb1&type=album',

    ],
    [
        'https://sun9-9.userapi.com/s/v1/ig2/2WdeCdRH625RrJ9WRLaM13GnoyxKI5yt4zRokgn7u5q6EmDMMhYIU1Ge3f6UOIGH5Qzm9cc4XSSgoI8mxpACHOWa.jpg?quality=95&as=32x47,48x70,72x105,108x158,160x234,240x352,360x528,480x703,540x791,636x932&from=bu&u=rnUzqgeiN96ZKyPxdOWkLUAXu00AsFi66Vasfm_te_8&cs=320x469',
        'https://sun9-9.userapi.com/impg/_xU1xO2VtdYjm3dh-d31OhDbQ_og6vkSmPmJHQ/AsNodQMnwpc.jpg?size=636x932&quality=95&sign=64cfbfd3b1fced2158e3f8cbd328ae8e&type=album',

    ],
    [
        'https://sun9-77.userapi.com/s/v1/ig2/KpxuN5h0XwqD5sapu7c_Sl8SBPitIoL0ZTOFsnqDZu0kPyvnMD9cm33ojwGbgV4YWx4Qmv7ePTvCs5NlSEWkpovC.jpg?quality=95&as=32x47,48x70,72x105,108x157,160x233,240x350,360x525,480x700,540x787,640x933&from=bu&u=WG_bYyUrBWO-BLcnOXER7zKkKoghpMOk_4Q1oJZnj0U&cs=320x466',
        'https://sun9-77.userapi.com/impg/QyApckuu-SIPA3_2hzQQekRX5UKbPIzxinvQ5g/vo4fpvDN6mc.jpg?size=640x933&quality=95&sign=eff50794a22ad3cd6c8b4078612ac320&type=album',

    ],
    [
        'https://sun9-75.userapi.com/s/v1/ig2/CbKpWYeQzWgSJr4i04RuQ1SNz3JSRHiHIASh9QZx7kZXYCclC0TJXaFQKRSMrNDChG0fsdF1OU4j6gialodykGRM.jpg?quality=95&as=32x46,48x70,72x105,108x157,160x232,240x349,360x523,480x697,540x785,640x930&from=bu&u=zyFiK64I3U2kx43Q4tcNvmd1yjytYBrADlBmxURyYZk&cs=320x465',
        'https://sun9-75.userapi.com/impg/DNGeFTnkbyGcXuclpaCK2onqtq-t9cDKY1PLGw/I5b9hx1U0VQ.jpg?size=640x930&quality=95&sign=48ad6e2a7bc7c7a6aa30bce85cbe22f5&type=album',

    ],
    [
        'https://sun9-64.userapi.com/s/v1/ig2/y2elPsRaVwI-p23wnT8nlWW8Pb0oXPwcFXueH7SChU1N4FKvw-GXS8-vNMwb_nHhrna2889vgMxq0kMPPX7E1Hnu.jpg?quality=95&as=32x47,48x70,72x105,108x158,160x233,240x350,360x525,480x700,540x788,636x928&from=bu&u=scR3sSJUs9U44WYayNB4Qmi_z2CqcA-0kLHPr_ifHi4&cs=320x467',
        'https://sun9-64.userapi.com/impg/9NqSJGRHg5DGmRb5iQF4yrrpzZfJZ2FAHIZEDw/yEZN7qu0YdY.jpg?size=636x928&quality=95&sign=b7fddddcfd4c3d15af250ca1ae2fce2c&type=album',

    ],
    [
        'https://sun9-2.userapi.com/s/v1/ig2/qYsG_tQJ9Bel53uZnGCCOEov-iu27KM98VeOM4dEuuhcehZBAmoMxzJxcyaS0Fx1a9m5DYbbuZqcp8EzRvpjod_h.jpg?quality=95&as=32x47,48x70,72x105,108x157,160x233,240x350,360x525,480x700,540x787,636x927&from=bu&u=U6uUnTLzR8xOkuM2P7QDwQ3eEkMgUGcLGVucEqfGUAo&cs=320x466',
        'https://sun9-2.userapi.com/impg/qA-qzz3YvoKxWhBCKcLHoPoVC4hvAOecluu-uA/0-xW4nfp_mE.jpg?size=636x927&quality=95&sign=a0eeb2a56778a87d2fd0e25b1cf72e48&type=album',

    ],
    [
        'https://sun9-70.userapi.com/s/v1/ig2/sZI2vZExVohNNh7Sm6LmR7mXGyfAi7qTVH4YKUGYa_3Qj0B5O3UCBmoRpdtanuV6izgOMSupZvYFnnpy5hQDu5Xd.jpg?quality=95&as=32x46,48x70,72x104,108x157,160x232,240x348,360x522,480x696,540x783,639x927&from=bu&u=wl52Hhdh1mrDMol7Sxm4oTpjCz0rIWABuxsWUDpyp1E&cs=320x464',
        'https://sun9-70.userapi.com/impg/d6miUpzea5VJv0GpZ65AtnEIubuh4UdzVfjISQ/hA2z2wrhYrQ.jpg?size=639x927&quality=95&sign=f21dbde3352967425ba9d216834b9014&type=album',

    ],
    [
        'https://sun9-61.userapi.com/s/v1/ig2/ndRWehZHXzvQKEujPGGWuYAicm-nFYrUR8gbQgImljvfy3NVeE1690lpsF3nyjmnjulzoto44xn_-2BlFJcC4ns1.jpg?quality=95&as=32x47,48x70,72x105,108x158,160x234,240x351,360x526,480x702,540x790,634x927&from=bu&u=HfApb1tsDCiPpYxbpaBFrWPrgjinUCRW-fcAEpL_ofU&cs=320x468',
        'https://sun9-61.userapi.com/impg/LssVFGVa2iTrbtDaaqBEUQjS-4nJBu00I1l6Rg/coFx2-qiAok.jpg?size=634x927&quality=95&sign=9fd560c68d50027eb6b9acfb844ce1cb&type=album',

    ],
    [
        'https://sun9-66.userapi.com/s/v1/ig2/dHbztdAmH0dhJcGkPZ6Q-PwFZHmiT1ZaDg9bX4mOc-jWvce_BT-vhscMtUC6QnyLh6bfLN395T3CxS5d3i5zqm2C.jpg?quality=95&as=32x46,48x70,72x104,108x156,160x232,240x348,360x522,480x696,540x783,639x926&from=bu&u=f3chCCBgyd4zmCBDzcM_w0ixyMXXi_DC9_FHSNFNLJk&cs=320x464',
        'https://sun9-66.userapi.com/impg/TKNv7vecjJqk0eATvgM3GSHLufxaxt44Cqpgkg/vKp0VC_k6mo.jpg?size=639x926&quality=95&sign=03899c2abe11205e5fa0dc040c7f07c0&type=album',

    ]
]
const retouch = [
    [
        'https://sun9-68.userapi.com/s/v1/ig2/oeS63mLBdUxm9tYUpnc3RQFcT4tSU_o7XMSzsQBTqby-x7GNuEdcHby4bPFb3s0_FcY9cG_GUv4arw6qjqs7zS-a.jpg?quality=95&as=32x33,48x50,72x75,108x112,160x166,240x250,360x374,480x499,540x562,640x666,720x749,1080x1123,1280x1331,1440x1498,2461x2560&from=bu&u=5vdTukHGnH04pADm_MhhMDX1RzNALovwyJbCeoKJAxg&cs=320x333',
        'https://sun9-68.userapi.com/impg/U3nP9ezonNk0fnxGKmYBsRiGFeGtzrZ2s2s9dw/FqNk9GSGxyk.jpg?size=2076x2160&quality=95&sign=7d99ad8dfafdfaa0014bb076a9ccf357&type=album'
    ],
    [
        'https://sun9-78.userapi.com/s/v1/ig2/bpUSflI34rtMe6TZ9CGIFyTPcderX7XeHPvi90R-LmIBdRgHMyXVD0aGlNq190VOgFu3iMP_mNE4dO_xT9SWUFBV.jpg?quality=95&as=32x42,48x63,72x94,108x141,160x209,240x313,360x470,480x627,540x705,640x835,720x940,1080x1410,1280x1671,1440x1880,1961x2560&from=bu&u=W6-NvaNy9hSixIryaxIkNfYCW4zvCfbrfalHW1eMoBw&cs=320x418',
        'https://sun9-78.userapi.com/impg/iODbJ4MK291-lGIToI_UfpTlO0Na0w284H3lEw/Cjptavhf77g.jpg?size=1655x2160&quality=95&sign=e0b31176d42ff2b2909ba0afbcd2e38e&type=album'
    ],
    [
        'https://sun9-12.userapi.com/s/v1/ig2/MEEtmi3r_vKaH7wVMhr5Pq1t7nUt26wpQQ8YRXTq8SbBcIQVP2qJhEcLYkAaCXLcgWx2nNLHdRlwlOw0RChSMZEh.jpg?quality=95&as=32x12,48x18,72x28,108x42,160x62,240x93,360x139,480x185,540x208,640x247,720x278,1080x416,1280x493,1440x555,2560x987&from=bu&u=AGR4VwtYhV0eKgw6YFvuWCTdg7sJqQSoiN2K88bt_yY&cs=320x213',
        'https://sun9-12.userapi.com/impg/dGt8SWjAf-T3gQGnyIn5mcmb06uHHlfCdBIeMQ/UPnAYyPYquQ.jpg?size=2560x987&quality=95&sign=670378f4ab558023f3eb0753993ea1c4&type=album'
    ],
    [
        'https://sun9-34.userapi.com/s/v1/ig2/O1UJCl0CC4UkwnPmrgCB_qdICzwMG_E32t6pc8Rswn-UHul0jJbfkGTW8t50oLkuuS-QYCqHcufX3gAIvR1YFVgJ.jpg?quality=95&as=32x20,48x30,72x45,108x68,160x100,240x151,360x226,480x301,540x339,640x401,720x452,1080x677,1280x803,1440x903,2296x1440&from=bu&u=hUOC2BlyuW4ZVunC0C6eIAotaLIeBXwFVZOee6BqLUo&cs=320x213',
        'https://sun9-34.userapi.com/impg/uKGOd6RVda0kf9MtPV7z9Dd2vxLWSYC-hjoTsw/eV9XQYj2dSw.jpg?size=2296x1440&quality=95&sign=046269d203ceac6500b15518cab107c9&type=album'
    ],
    [
        'https://sun9-80.userapi.com/s/v1/ig2/p8zw0BVfj1BOxl8ok4iY-dsMktpKimcfs1Lr6WQr5xxOTyQGOrH6tjOsEPRgsxtNJjnPFI2NFh5xiPzN3cjjvQVd.jpg?quality=95&as=32x15,48x22,72x33,108x50,160x74,240x111,360x167,480x223,540x251,640x297,720x334,1080x502,1280x594,1440x669,2558x1188&from=bu&u=Gj1cbWUaFMBZmhsxeDt_yQG6U8Vycap3CCI1gMnBrJo&cs=320x213',
        'https://sun9-80.userapi.com/impg/9HP8oeB2r2YYauBMUUia3kgDzypK8Fz67mPfcA/ZnBMwGKefLg.jpg?size=2558x1188&quality=95&sign=7a3be812615956887b5730dc275cef6a&type=album'
    ],
    [
        'https://sun9-22.userapi.com/s/v1/ig2/BDCifsYB9PKjEVQlSoa9Vzu7ItI_583aNe7rtJ6IyLaRBDOlvXJG24fy3SC8pFEHUn1d1CjIba-U3VIqqizuo8Ko.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x121,240x181,360x271,480x362,540x407,640x482,720x543,1080x814,1280x965,1440x1086,2560x1930&from=bu&u=nY4hkE7EK8Abv3wPTxgDQA1U0eHcqhhcUUH4aTPEnmI&cs=320x241',
        'https://sun9-22.userapi.com/impg/Dzajh7tlyrShlPdjbAmmC4gyQY3a1V0wqRC-_Q/FbH9QPdpHWc.jpg?size=2560x1930&quality=95&sign=4a8b2cea9bc787cd97e453c2d734a575&type=album'
    ],
    [
        'https://sun9-8.userapi.com/s/v1/ig2/rnzYZv4JjXgyn6blGsFB_vD9ftU6Hj9-LwWWw50TbxMxIfPI8OUdH_NBgRL0Z1OfLCrk16CTTOn9uF6Bjam-GQ6q.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x271,480x361,540x406,640x481,720x541,1080x812,1280x962,1440x1082,2560x1924&from=bu&u=9kr-jEO6Xyhd4oK4oLT5prR4w3_N7VIAZoBdHeg22wE&cs=320x240',
        'https://sun9-8.userapi.com/impg/uRm0a25kOttR2XB2XgEJUsxQVETclh-ISMCeLQ/M_eOol-eVaI.jpg?size=2560x1924&quality=95&sign=c94b924d21029ab15bd7c6f4421e5616&type=album'
    ],
    [
        'https://sun9-21.userapi.com/s/v1/ig2/komAFaCM55EEdA94bbnO6VRbQwyrabc0BuopfCprGucPy4Bf08760k9nm8_RwMIdiPTsVzxwMTXufiBgkgP3L8pB.jpg?quality=95&as=32x29,48x44,72x66,108x98,160x146,240x219,360x328,480x437,540x492,640x583,720x656,1080x984,1280x1166,1440x1312,2560x2332&from=bu&u=OtXk4XLqHX3E8tK8YLNH9aesgQuaGQ2NaXhkG3pc3Go&cs=320x291',
        'https://sun9-21.userapi.com/impg/pbQYoKKa2KwOqNtTr7oJZYVWxaFoTLl6ridwfA/91kKy0doAQw.jpg?size=2560x2332&quality=95&sign=2b14b11ad97ee559de32ef22d7ec2a5d&type=album'
    ],
    [
        'https://sun9-39.userapi.com/s/v1/ig2/i3gX6gqrpIvHr_yPU84GYxutGHTl65LlnN7lW9-odBZL1d0Cr9r21vJXB5ReB9rvKnet8jVeVtHpHy70RnPzAF1X.jpg?quality=95&as=32x18,48x28,72x41,108x62,160x92,240x138,360x207,480x276,540x311,640x368,720x415,1080x622,1280x737,1440x829,2560x1474&from=bu&u=UsZqPyLwmOkYThvRR4Elir3BLCDvHrfETj6w9utcEN8&cs=320x213',
        'https://sun9-39.userapi.com/impg/rnnhqkLtgEOnlR9AQQAcfykfsIMMyZc64ls4Vw/oXKbLX4L3WE.jpg?size=2560x1474&quality=95&sign=9da58b17fc3305eb63fd666ee31781a2&type=album'
    ],
    [
        'https://sun9-29.userapi.com/s/v1/ig2/docRnaC34ilDKCalehg4zqsbggzq_ohYERwASBXOtbgBdPyZI7f1imjldMyMLzgLdeF-rgATBwJnmKxpi_ZAVOjR.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x541,1080x811,1280x961,1440x1081,2560x1922&from=bu&u=QHy7oRa3I2UhkDks0Um5yF5yMY8zSvCSFiabjh-cWmg&cs=320x240',
        'https://sun9-29.userapi.com/impg/ALV1lLi88KNlqgQS18QhbmMlybMBkWpEeXsXGw/Tm36T0OIv3o.jpg?size=2560x1922&quality=95&sign=5023f36a124247769e758011df29dd92&type=album'
    ],
    [
        'https://sun9-22.userapi.com/s/v1/ig2/NEolzpuvufHck6Ghm0wf49rxgZYWIiIBHU38Lzg95itCJOUmjWIQKdQfucqzSMuKBkU5x-ia3WzvZn8va_lI8dqs.jpg?quality=95&as=32x40,48x60,72x91,108x136,160x201,240x302,360x453,480x604,540x679,640x805,720x905,1080x1358,1280x1609,1440x1811,2036x2560&from=bu&u=ogEAmS0U6WG2jVzpMEUQvj6xBlCqQqfGAM2kWckbm6Y&cs=320x402',
        'https://sun9-22.userapi.com/s/v1/ig2/NEolzpuvufHck6Ghm0wf49rxgZYWIiIBHU38Lzg95itCJOUmjWIQKdQfucqzSMuKBkU5x-ia3WzvZn8va_lI8dqs.jpg?quality=95&as=32x40,48x60,72x91,108x136,160x201,240x302,360x453,480x604,540x679,640x805,720x905,1080x1358,1280x1609,1440x1811,2036x2560&from=bu&u=ogEAmS0U6WG2jVzpMEUQvj6xBlCqQqfGAM2kWckbm6Y&cs=1718x2160'
    ],
    [
        'https://sun9-48.userapi.com/s/v1/ig2/jwaS-KSrjQX4mEFLZK2TuinJHDo2bQFWCsFOy4NES1PiwWMs8JeXBf6eTWn1KkeYbn-rfysPJF2J3emLXtOoBtH-.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x271,480x361,540x406,640x481,720x541,1080x812,1280x962,1440x1082,2560x1924&from=bu&u=RZBC0esoYtn3ILwbw6wr7bvMSXOFzOPcIklSD9-a1h0&cs=320x240',
        'https://sun9-48.userapi.com/impg/H31D6wtVowhReIocquIqDJ-qR7d0dVTT4HZr5A/_283KdqwTeY.jpg?size=2560x1924&quality=95&sign=14886eaf16eb9383fa0495dec55de446&type=album'
    ],

    [
        'https://sun9-43.userapi.com/s/v1/ig2/eT99k9vCiAHONdELZyyagKk5pcDOXhUpgm3yoXpFVjXpUCmdt210W8rmG24ru2ehVC1I4y57Kdnyvr8_vmxmpMtG.jpg?quality=95&as=32x44,48x67,72x100,108x150,160x222,240x333,360x500,480x667,540x750,640x889,720x1000,1080x1500,1280x1778,1440x2000,1843x2560&from=bu&u=T0Q7G--wz3ANolX7s2RuVWnOln7162hTYEICA-i1_jw&cs=320x444',
        'https://sun9-43.userapi.com/impg/GPXhpJ94Jun9o_SFb1I2vqC90qW4AKH73Czh_Q/n2lDU8-60W0.jpg?size=1555x2160&quality=95&sign=d6a49e0c8a41fd89a21a8f9a35edbd54&type=album'
    ],
    [
        'https://sun9-34.userapi.com/s/v1/ig2/KRV1wRDsRkJ5xiTBn34L3lCwq8Cc2dBlKrOXjccrkrAOn0oeJKvgTEFR6kZiN69qyzz8K7hcca2hefEWOtjHMJ1P.jpg?quality=95&as=32x39,48x58,72x88,108x131,160x195,240x292,360x438,480x584,540x657,640x779,720x876,1080x1314,1280x1557,1440x1752,2104x2560&from=bu&u=hWJ2sdfXKm2RyXza1B8I-mvBR82fb815WgWRnegNwOU&cs=320x389',
        'https://sun9-34.userapi.com/impg/KjowV84-xkxLoX3wOljFXPazmlinKhXOTYGL2w/CFYtZZIzt00.jpg?size=1775x2160&quality=95&sign=e3ccd64850bf203b0b59fa118de496f4&type=album'
    ],
    [
        'https://sun9-78.userapi.com/s/v1/ig2/-wQF6ovV1REr07_kunM7GgTkYW7Uy2_GIOisCEETZv9vn5tOIl67ahtFMluvE-7GH5cWKqt6CK_HKyfbrgyVcOwQ.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x959,1440x1079,2560x1919&from=bu&u=6oN0XIkfkBbv-Dvg6ZvGswm2WPhGGW9CPEhGqRSEU2U&cs=320x240',
        'https://sun9-78.userapi.com/impg/jlmY27zxKV76yFDIO6qKUF7Eyug2F7JzfH3Fhg/AxsXG15Ci2E.jpg?size=2560x1919&quality=95&sign=b3b29073a572724d8c608f58387c224b&type=album'
    ],
    [
        'https://sun9-19.userapi.com/s/v1/ig2/ryJ_aXEqKEVxtoSFr9O02L79oG8zam4XGHZyReAKSLU2pnxb1Y8se6sP-fPS7W5kkr2D7t4tj1OaRa3a3ahk7psu.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x959,1440x1079,2560x1919&from=bu&u=nFiI7_PJIRtYv9pnpBC-irt9JIhny_uSzVtq2pUeXaQ&cs=320x240',
        'https://sun9-19.userapi.com/impg/FruzE4oQQfC2Yfs0JzNF-1tweXRDWNUvNsf_-g/nE1waS8zFgk.jpg?size=2560x1919&quality=95&sign=e2ea3c4073b6585b5b891182140d7309&type=album'
    ],
    [
        'https://sun9-10.userapi.com/s/v1/ig2/UdTiTcKfLwgRpZMwZz-sFA16_m42bjQ0wZeQMpiLpfqYi5x1esUu3E3QmVdHC1617ZkSJJIpQ3OG5zjsn8hX2suS.jpg?quality=95&as=32x29,48x43,72x65,108x97,160x144,240x216,360x324,480x432,540x486,640x576,720x649,1080x973,1280x1153,1440x1297,2560x2306&from=bu&u=QZty5_-t3nTYkAppGqSjF541lTzrraEAvUsPZvJxfA8&cs=200x180',
        'https://sun9-10.userapi.com/impg/IRe8NI6hI_n_cymsw0OluPQaHcv86qsFLnSHAA/zvZMGXNZSj4.jpg?size=2560x2306&quality=95&sign=68bfadb1ae27b928053b36595c7fde45&type=album'
    ],
    [
        'https://sun9-64.userapi.com/s/v1/ig2/fOgXCf0oOo2GwNixeIggbHaL2_eNhmz4IlS_T9qW2CT5U_NSvgoik_xtAwfgOvdD4Col2E6MEtLoM0YvuwR72Otp.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x959,1440x1079,2560x1919&from=bu&u=uswS2MdQZHFDLAkRpt58SGYh3CrnYUOUIMg0KGa7ktU&cs=320x240',
        'https://sun9-64.userapi.com/impg/4jWSffEQQsWVf59i0LFk1AAJERNMYtRB3m2k2A/MCc6Wb4sAkg.jpg?size=2560x1919&quality=95&sign=803a9b8d153a7ff76423c51ca29005d7&type=album'
    ],
    [
        'https://sun9-10.userapi.com/s/v1/ig2/qNz1hfCPqRpwKtTZCx1cM4tPsaVQnX1QCuAQWNpvAtfPYGBjZ9LXvqbQ6gjkC6iH0pbdloqr9GkYLtQxWR_xXUTT.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x959,1440x1079,2560x1919&from=bu&u=Kbfj-lKGUi8uyjCGdyExeETv-VyE3sPNWRMY6CTzHIc&cs=320x240',
        'https://sun9-10.userapi.com/impg/VSmFh9ot8yJIS3S4bWvWSP5DZD2y1UR7iOijew/L0D_VPA9yAg.jpg?size=2560x1919&quality=95&sign=cd1e5017ab699bd1489f5baae4e7c182&type=album'
    ],
    [
        'https://sun9-32.userapi.com/s/v1/ig2/BAK5bnJoO5_waJxLWWT01oTA3_YBO0X6cNR8qQSv5nIITKBtZ1yg60Cul4-71PUm-8_SWYJh0QSNxoC23ZupitOt.jpg?quality=95&as=32x22,48x34,72x51,108x76,160x112,240x169,360x253,480x337,540x380,640x450,720x506,1080x759,1280x900,1440x1012,2560x1800&from=bu&u=joaRfIjLMx38J5dZnUO1vnvx84hmikz5ZwDtquTMbF0&cs=320x225',
        'https://sun9-32.userapi.com/impg/GPE97kc46X-zJphXv8tTtKuaes7EONX9r1NGrA/HD4rxgMobvE.jpg?size=2560x1800&quality=95&sign=135069ef0913f231c7b708d6da7cc34b&type=album'
    ],
    [
        'https://sun9-48.userapi.com/s/v1/ig2/DIdLoixFTETFjRaIijfHrcjV98cz0Ey1naZG2wcVenLr1PTSQToo5x8dPJRCQ5IKFwKb9evIjfjHdxlsvSuD-phw.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x959,1440x1079,2560x1919&from=bu&u=PJGuGBHnlQrw4NUrwEXaii3P957jTTjwhvdM6Lhc0r0&cs=320x240',
        'https://sun9-48.userapi.com/impg/CYAR2ro9d_7_NompUelvL-JPxUdCYU7E_Yw2yg/KwNLSX9ffA0.jpg?size=2560x1919&quality=95&sign=78b1599f357730b26e6134e9eee01fdd&type=album'
    ],
    [
        'https://sun9-16.userapi.com/s/v1/ig2/RUURp2UA0Y05F4aC6bU4PTnNJn8FKmQwbZeaWPeKriXAjVwXtdCWCWqBF6aOWFwGnvo__RXK75ixK0Kq5TxTyYFl.jpg?quality=95&as=32x28,48x41,72x62,108x93,160x138,240x207,360x310,480x414,540x466,640x552,720x621,1080x931,1280x1103,1440x1241,2560x2207&from=bu&u=4HdU-vnHNrMZyzqtA1GYMPk4KiJtjHFCWbLyO-Jd8CM&cs=320x276',
        'https://sun9-16.userapi.com/impg/8KnRs8AkCep6B2-QGWvmdiQoR3ytEr10CeP7uQ/R0pFOPrRaW0.jpg?size=2560x2207&quality=95&sign=b59d43bf5a25e5d0b4fe26341ffcf853&type=album'
    ],
    [
        'https://sun9-65.userapi.com/s/v1/ig2/fiMq-OXLZKRoGm2IeTC3mgFkOHtFVTAo1z87qVnD-LDJYrcZksXQZ0DmDLtYPZQvCZ_OrKLTxeTFOGngKZen8cl9.jpg?quality=95&as=32x24,48x36,72x54,108x80,160x119,240x179,360x268,480x358,540x402,640x477,720x536,1080x805,1280x953,1440x1073,2560x1907&from=bu&u=zQGrvxPHgG_38cJfHbaUYbgL2G4UGFfpZJ-1DkesM9w&cs=510x380',
        'https://sun9-65.userapi.com/impg/mrgbHk1EoGo9gXCYRqPkHrn5BVUt8mrxNVfGyQ/pXtO-baLc4o.jpg?size=2560x1907&quality=95&sign=32f6cd5060a6afb75dde9c8414b70d1d&type=album'
    ],
    [
        'https://sun9-52.userapi.com/s/v1/ig2/rB9geTRfHYbdT3A740zHmwmcz45tFSG6Szks8ofEXBYwOUd0wYDIW2ai2HyzbcmWaIkftf9ydp0mKeZMj_PUAJvC.jpg?quality=95&as=32x32,48x47,72x71,108x106,160x158,240x237,360x355,480x473,540x532,640x631,720x710,1080x1064,1280x1261,1440x1419,2560x2523&from=bu&u=4TX-3Eq92k6ecbawh-WhsoefN417AUfOsDM71_AU-t0&cs=320x315',
        'https://sun9-52.userapi.com/impg/iKDGLksCOwsH5XW6PNZwsa6YreTE9NYM_g1Qzw/yIo9KqY0Xmo.jpg?size=2560x2523&quality=95&sign=67fd88ef2d413d2909444edf1e38c805&type=album'
    ],
    [
        'https://sun9-60.userapi.com/s/v1/ig2/-TVHt0Y3vaQjZPJIgWCWpZVQ4Q83APD_xPFQjYwIMhozY_qeA29Frq1HLKSA7fd9UCbRD6mv7Kc1CjOo0qQ82J06.jpg?quality=95&as=32x26,48x39,72x59,108x88,160x130,240x195,360x293,480x391,540x439,640x521,720x586,1080x879,1280x1041,1440x1172,2560x2083&from=bu&u=RiqXzDo-530WuxJI8cG_TwiufFaDgWJivlxp2aOXxqc&cs=320x260',
        'https://sun9-60.userapi.com/impg/mB4nege7JOBt7bwP5YPXQkiPQXhQf0_-4Jd_8Q/BJi9ZUH0QGg.jpg?size=2560x2083&quality=95&sign=8d1c825748a93dc853ac25b2f4f4f9a2&type=album'
    ],
    [
        'https://sun9-4.userapi.com/s/v1/ig2/NdYa5LRyBN0GY3UPCIf9RGPmf3BjI6XMV9kkie0I_eGDRI69GIojMQNmjSUowpbGhFDLuUEhKTB3SLYQXLDrw16B.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1081,2560x1921&from=bu&u=pWQTa3SMcSU_40zh50KIEqpcBXJ7xmljg6z0Bopz_Sg&cs=510x383',
        'https://sun9-4.userapi.com/impg/Z22gCJW6mtQgS4usfXCAgT9vToPLIYM2JB8b1w/Pn4qBRw4ogY.jpg?size=2560x1921&quality=95&sign=40631dbf20028543de864cd0fe67e683&type=album'
    ],
    [
        'https://sun9-25.userapi.com/s/v1/ig2/CrB1lTKzUsxVnec7ZH77xFHNrs77EcxRz_o7Ic89QnnrbZb53k0jQiWpJmHVMaCXePmJz9owfrY0XNHjfuchRmI-.jpg?quality=95&as=32x29,48x43,72x65,108x97,160x143,240x215,360x323,480x430,540x484,640x573,720x645,1080x968,1280x1147,1440x1290,2560x2294&from=bu&u=VCBr0vD2plpl-RCpL7wF1NHKrvQ7I9_xbassyT0rj84&cs=320x287',
        'https://sun9-25.userapi.com/impg/Dbtjcw3ju3X1gtwMYvS5yrlPJJatQDYT2drLdw/1QB_eM50wrE.jpg?size=2560x2294&quality=95&sign=2fa5d25bd3458e3cff3f5abe68215591&type=album'
    ],
    [
        'https://sun9-47.userapi.com/s/v1/ig2/UvywvlLbcIc2504vQTaWoLd4OyfKoesy7rxfpB_ob7K7dxyuHSgxiGscXwhrGDTPhE9gLAdH_pHMuNSMfQ4cyNp6.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=C3kvYiok4e7-qa02ptYpuDsk0IkJBWUXe1zcUewjZRA&cs=320x427',
        'https://sun9-47.userapi.com/impg/E2Y39EFD-OitTT2zZ2hX26RrY4j9q44Ae-WMxQ/TDu4BWqr424.jpg?size=1620x2160&quality=95&sign=958085fa8170c8596b46e3f79ce3d9a3&type=album'
    ],
    [
        'https://sun9-20.userapi.com/s/v1/ig2/lsYSlbP6cBPDnZENu7coW0PS-ep4ZyX-cfiI2y30HHACJtwGbibaza1fUkEgHwpzgJ8XCS81fka7tMsUN9FdHQtA.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&u=4Ly0xSEZXciiyawa7INBQS99QFmJektnlfpnVGpIay4&cs=320x480',
        'https://sun9-20.userapi.com/impg/mnhFtlOtitx2gLx7kFBrW6PegciDNrISenXJ8w/t0Jo7jz16oY.jpg?size=1440x2160&quality=95&sign=be02291b6d085bbbfaffd6d0819f6fe1&type=album'
    ],
    
]
const restoration = [
    [
        'https://sun9-24.userapi.com/s/v1/ig2/KgaOO76Ify2-rB4pBcmqK4e1HFcdZy6uiiqlnrUo_c4G7OSsUpjQfx1H4oqHdQ6bsoWAjtV44FfXNClg5SlT3m55.jpg?quality=95&as=32x19,48x29,72x43,108x64,160x95,240x143,360x214,480x286,540x322,640x381,720x429,1080x643,1280x762,1440x858,2560x1525&from=bu&u=3mko18XnNboW5yIFEZPT70fmeX82Ad4nr_oaElpFxKc&cs=320x213',
        'https://sun9-24.userapi.com/impg/coZRcO0IvlHuiDVA6NVVLRkLt-miMF4J9LVhiA/VesgZyj-7pk.jpg?size=2560x1525&quality=95&sign=2753abd644aa6cb5d1c1d1d91b26ee8a&type=album'
    ],
    [
        'https://sun9-35.userapi.com/s/v1/ig2/8ZGsVwh1Y0GUWB8iVYIbITgzoP2kX0o1tNmn3Dwy2hOHTXGKSoKIngoZ-M1Y4FWIDkaH6dBcRwzAA6kW-ekGsO1T.jpg?quality=95&as=32x23,48x34,72x51,108x76,160x113,240x170,360x254,480x339,540x382,640x452,720x509,1080x763,1280x904,1440x1018,2560x1809&from=bu&u=zUjQ0TQUpj4smPbl4Ry1lqEFbAg7_k8lm4wZIlzXEeE&cs=320x226',
        'https://sun9-35.userapi.com/impg/br5Z35DdMStsbJkZQtziysWhhIr7wzaJkMnGEw/T-5ft9KdAb4.jpg?size=2560x1809&quality=95&sign=dbd333664d56222961eaff010bfa6774&type=album'
    ],
    [
        'https://sun9-4.userapi.com/s/v1/ig2/rXE6f-SGcz6tLLKKhHsNG7_XTxEjZoD6VOgQcbTmk76XUSIupsUFE3c4AWzo08ufyEiQQm-Ie2QWqgyR9WQ3MzT0.jpg?quality=95&as=32x49,48x73,72x110,108x164,160x243,240x365,360x548,470x715&from=bu&u=e9qU3KXycZgvoJvG-8U30DjDK55Fty_u8xkLkvvo31I&cs=200x304',
        'https://sun9-4.userapi.com/impg/H0SPeYaQ6kHA8hPse7-IRYUA7FNhRvQeMgVLbA/gY4yejgBl4c.jpg?size=470x715&quality=95&sign=3ff88045d4132c52ba54a81a69c48338&type=album'
    ],
    [
        'https://sun9-4.userapi.com/s/v1/ig2/niesMxiqvyJIARoKXFLf-HdshOKRGFAbfxIK1GYJc49FdoVMSZ7I0xHnYgMQMlyjlbpkS_M6aqPv8V7U1fcWhLR9.jpg?quality=95&as=32x22,48x33,72x49,108x73,160x109,240x163,360x244,480x326,540x366,640x434,720x488,1054x715&from=bu&u=3gJ_8mGwz74ZK35qnL-m7FjHl7NR5bK6zJbBKF8m7AQ&cs=320x217',
        'https://sun9-4.userapi.com/impg/F8Ji03Sj70jY5x7qaX5UziBZVwoYSbZ4Mza3lg/CP6Ubx_qNEI.jpg?size=1054x715&quality=95&sign=606e783c771c644eca8cfb30d94f0e66&type=album'
    ],
    [
        'https://sun9-45.userapi.com/s/v1/ig2/rTewnDFbcqCBizxpxIm_wvY-7nsYH-QOIzM8qbaJfzNf9IdVTZGA3EuKmZx3kLErV6O8OUbN9Y6d4f0okG_cs3a1.jpg?quality=95&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x299,540x337,640x399,720x449,1080x674,1280x799,1440x898,1739x1085&from=bu&u=AJXOVFBTtk2JQYnhryb_i_2_CLTZuqDP2DqIxacbXVU&cs=320x213',
        'https://sun9-45.userapi.com/impg/Lul_8Z3i52dkdGeFwXHS92E1JcG1JlnDDNXH8w/pCgjSIUxKL8.jpg?size=1739x1085&quality=95&sign=cc560a3c74601ef2fa5b2a403cc51560&type=album'
    ],
    [
        'https://sun9-34.userapi.com/s/v1/ig2/9gUQrdHMH_UFPbSenvfUPSq1NwlPmfnyyk-OtxbLzStryKpFu-iyI0Rh9hs-5PFu_ouctVELaKFoHZC97wRt3W1x.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,954x715&from=bu&u=88Pl0bwk-yMZOJaWYn5Dm0NCQNWQ7AuPKYcsonZlmpw&cs=510x382',
        'https://sun9-34.userapi.com/impg/72o1NDYxvonFM925AOmX05nR9WyCDXAFbM12HA/xuRRJevvHLQ.jpg?size=954x715&quality=95&sign=9b3656b23f41f9184e0b0b5e0858fa7c&type=album'
    ],
    [
        'https://sun9-34.userapi.com/s/v1/ig2/UqeYpGiXiP0Pt6aBHYI9PrX2iciYf5u7WUytmefInVuOZT976Fv9fdqD4MM5u_k8jM8UaJvQaH1QxbplZ4sq7i7L.jpg?quality=95&as=32x20,48x29,72x44,108x66,160x98,240x147,360x220,480x294,540x331,640x392,720x441,1080x661,1280x783,1440x881,2560x1567&from=bu&u=OuGZQg7F0pDNsiMmwQW6bmQrmurwT27_QSrYGIslxaE&cs=320x213',
        'https://sun9-34.userapi.com/impg/inLqPialiTVtMgiRS-uSnTDDHDp9AXt3gJRULg/MErI185bXlQ.jpg?size=2560x1567&quality=95&sign=17afc4118ed860faef3d585e8e2b57b5&type=album'
    ],
    [
        'https://sun9-5.userapi.com/s/v1/ig2/oSgkRA7WHrh-XWC8T7ag2H6H5Q-TjWQmMeuP222e5sS_EYu2lePbtmCUwjzcLUDiHQ26yLlE4OwmdE9K3rqzyAGu.jpg?quality=95&as=32x25,48x38,72x56,108x85,160x125,240x188,360x282,480x376,540x423,640x501,720x564,1080x845,1280x1002,1440x1127,2560x2004&from=bu&u=tmCVwg2TnhVZLui4nb4gfKoHqvboHcp7Fr1-GfJqrcg&cs=320x250',
        'https://sun9-5.userapi.com/impg/GoyF0-wEP_FHHBzpTXPgh3gPciZx3wPDQG7SNw/stdES4UbiIo.jpg?size=2560x2004&quality=95&sign=a03efa1d8eb88a9b7181ee8dff8c33ab&type=album'
    ],
]

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
    imgcur.setAttribute('src',`${curArr[curId][1]}`)
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
        imgnext.src =curArr[swapId][1]
        imgWrapperCur.classList.add('cur_animate_left')
        imgWrapperNext.classList.add('next_animate')
    }else{
        imgprev.src =curArr[swapId][1]
        imgWrapperCur.classList.add('cur_animate_rigth')
        imgWrapperPrev.classList.add('prev_animate')
    }

    setTimeout(() => {
        imgcur.src = curArr[swapId][1]
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
            newPhoto.setAttribute('src',`${ph[0]}`)
            newPhoto.setAttribute('class',`photo`)

            const hiddenPhoto = document.createElement('img')
            hiddenPhoto.setAttribute('src',`${ph[1]}`)
            hiddenPhoto.setAttribute('class',`hidden_photo`)


            if(((index+4)%3) === 0){
                masonryBlock3.append(newPhoto)
                masonryBlock3.append(hiddenPhoto)
            }else if(((index+4)%3) === 2){
                masonryBlock2.append(newPhoto)
                masonryBlock2.append(hiddenPhoto)
            }else{
                masonryBlock1.append(newPhoto)
                masonryBlock1.append(hiddenPhoto)
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

