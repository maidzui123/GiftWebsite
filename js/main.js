var mainContainer = document.getElementById("mainContainer")
var cakeOuter = document.getElementById("cakeOuter")
var instructorOuter = document.getElementById("instructorOuter")
var countInstructor = 0
var countCandle = 0
var btnInstructor = document.getElementById("btnInstructor")
var instructorSay = document.getElementById("instructorSay")
var instructorSayDetail = document.getElementById("instructorSayDetail")
var btnLight = document.getElementById("btnLight")
var btnBlow = document.getElementById("btnBlow")
var candleOne = document.getElementById("candleOne")
var candleTwo = document.getElementById("candleTwo")
var candleThree = document.getElementById("candleThree")
var instructorPray1 = document.getElementById("instructorPray1")
var instructorPray2 = document.getElementById("instructorPray2")
var hpbdSong = document.getElementById("hpbdSong")
var maiduyOuter = document.getElementById("maiduyOuter")
hpbdSong.pause()
btnInstructor.addEventListener("click", function (e) {
    e.preventDefault()
    countInstructor++
    switch (countInstructor) {
        case 1:
            newChat("Xin chào chị Ý Nhi.")
            break;
        case 2:
            newChat("Em là ZuyEm (Bot do anh Mai Duy lập trình).")
            break;
        case 3:
            newChat("Em sẽ là người hướng dẫn cho chị Nhi ngày hôm nay.")
            break;
        case 4:
            newChat("Bây giờ là 0h00 3/9/2023 (hoặc hơn xíu :<).")
            break;
        case 5:
            newChat("Em chúc mừng sinh nhật chị Nhi nhaaa :>")
            break;
        case 6:
            newChat("Anh Mai Duy đã làm cho chị cái bánh này nè.")
            addCake()
            break;
        case 7:
            newChat("Đang hông biết làm sao để đốt nến đúng hong he he.")
            break;
        case 8:
            newChat("Đợi xíu để em đi lấy diêm cho chị đốt nến nhó.")
            activeLight()
            break;

    }
})
btnLight.addEventListener("click", function (e) {
    e.preventDefault()
    countCandle++
    switch (countCandle) {
        case 1:
            newCandle(candleOne)
            break;
        case 2:
            newCandle(candleTwo)
            break;
        case 3:
            newCandle(candleThree)
            prayWork()
            break;
    }
})
async function newChat(chat) {
    instructorSay.classList.add("none")
    instructorSayDetail.innerHTML = chat
    await new Promise(resolve => setTimeout(resolve, 1000));
    instructorSay.classList.remove("none")
}
async function addCake() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    cakeOuter.classList.remove("none")
}
async function activeLight() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    btnLight.classList.add("btn-light")
    btnLight.removeAttribute("disabled")
}
async function newCandle(candle) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    candle.classList.remove("none")
}
function removeCandle(candle) {
    candle.classList.add("animate__fadeOutUp")
}
async function changeBg(color) {
    instructorOuter.classList.add("hide")
    await new Promise(resolve => setTimeout(resolve, 1000));
    mainContainer.style.background = color
}

async function prayWork() {
    btnLight.classList.add("none")
    await new Promise(resolve => setTimeout(resolve, 1200));
    newChat("Chuẩn bị 3s gòi chị sẽ cầu nguyện trong vòng 10s nhá.")
    await new Promise(resolve => setTimeout(resolve, 3500));
    newChat("3 nè")
    await new Promise(resolve => setTimeout(resolve, 4500));
    newChat("2 nè")
    await new Promise(resolve => setTimeout(resolve, 5500));
    newChat("1 nè")
    await new Promise(resolve => setTimeout(resolve, 5800));
    changeBg("rgba(0, 0, 0, 0.8)")
    hpbdSong.play()
    instructorPray1.classList.remove("hide")
    instructorPray2.classList.remove("hide")
    waitUntilDone()
}
async function waitUntilDone() {
    await new Promise(resolve => setTimeout(resolve, 32000));
    btnBlow.removeAttribute("disabled")
    btnBlow.classList.add("btn-blow")
}

btnBlow.addEventListener("click", (e) => {
    e.preventDefault()
    removeCandle(candleOne)
    removeCandle(candleTwo)
    removeCandle(candleThree)

})
async function showMaiDuy() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    cakeOuter.classList.add("none")
    maiduyOuter.classList.remove("none")
}