const selectMenu = document.querySelectorAll('select')
const timeBox = document.querySelector('.time')
const setAlarmBtn = document.querySelector('button')
let alarmTime , alamState = 'noset';
let content = document.querySelector('.content')
const ringtone = new Audio('./files/ringtone.mp3'); 

for(let i = 23 ; i >=0 ; i--){
    i = i < 10 ? '0' + i : i;
    // if(i<10){
    //     i='0' +i;
    // }else{
    //     i=i;
    // }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)
}   
for(let i = 59 ; i >=0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)
}   
setInterval(()=>{
    let date =new Date();
    let h =date.getHours();
    let m =date.getMinutes();
    let s =date.getSeconds();

    h = h <10 ? '0'+ h: h;
    m = m <10 ? '0'+ m: m;
    s = s < 10? '0'+ s: s;
    timeBox.innerHTML = `${h}: ${m}: ${s}`;
    if(alarmTime == `${h}: ${m}`){
        ringtone.play();
        ringtone.loop = true;
    }

},1000)
setAlarmBtn.addEventListener('click' , ()=>{
    alarmTime = `${selectMenu[0].value} : ${selectMenu[1].value}`
    if(alarmTime.includes('Hour') || alarmTime.includes('Minuet') ){
        return alert(`Select the correct alarm!`)
    }
   


})
function checkState(state){
    if(state == 'noset'){
         content.classlist.add('disable')
        setAlarmBtn.innerText= 'Clear Alarm';
        alamState = 'set'
    }else{
        content.classList.remove('disable')
        alarmTime = ''
        ringtone.pause()
        alamState = 'noset'
    }
}