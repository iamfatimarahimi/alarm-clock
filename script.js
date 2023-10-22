const selectMenu = document.querySelectorAll('select')
const timeBox = document.querySelector('.time')
for(let i = 23 ; i >=0 ; i--){
    i = i<10? '0'+i : i;
    // if(i<10){
    //     i='0' +i;
    // }else{
    //     i=i;
    // }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)
}   
for(let i = 59 ; i >=0 ; i--){
    i = i< 10 ? '0'+ i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)
}   
setInterval(()=>{
    let date =new Date();
    let hour =date.getHours();
    let minuet =date.getMinutes();
    let second =date.getSeconds();

    hour = hour<10? '0'+ hour: hour;
    minuet = minuet<10? '0'+ minuet: minuet;
    second = second<10? '0'+ second: second;
    timeBox.innerHTML = `${hour}: ${minuet}: ${second}`;
},1000)
setInterval(()=>{
    let date =new Date();
    let hour =date.getHours();
    let minuet =date.getMinutes();
    let second =date.getSeconds();

    hour = hour<10? '0'+ hour: hour;
    minuet = minuet<10? '0'+ minuet: minuet;
    second = second<10? '0'+ second: second;
    timeBox.innerHTML = `${hour}: ${minuet}: ${second}`;
},1000)