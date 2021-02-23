let today = new Date();

console.log(today)
console.log(today.getDate())
console.log(today.getFullYear())
console.log(today.getMonth())
console.log('-----',today.getDay())

// let date = new Date('January 24, 2021 23:15:30')
// console.log(date.getDay())

let monthList = [
    ['January', 31],
    ['February', 28, 29], 
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 30 ],
    ['July', 31 ],
    ['August', 31 ],
    ['September', 30 ],
    ['October', 31 ],
    ['November', 30 ],
    ['December', 31 ]
]

let weekDayList = [ 'Sun', 'Mon',  'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

console.log(`${weekDayList[today.getDay()]} ${monthList[today.getMonth()][0]} ${today.getDate()} ${today.getFullYear()}`)


let tableDate = new Array();

let td = document.querySelectorAll('.calendar tbody td');


// generate start Arr
function generateStartArr(){
    console.log('generateStartArr')
    for(let i=0; i<7; i++){
        let s = ''
        let row = []
        for(let j=0;j<6;j++){
            row.push(0);
            s = s + '---' + tableDate[i,j]
        }
        tableDate.push(row);
    }
}



function setNewDate(obj){
    console.log('setNewDate')

    let colNumber = 0;
    let month;
    for (let i=1; i<=monthList[obj.getMonth()][1]; i++){

        let newDate =    new Date(`${weekDayList[obj.getDay()]} ${monthList[obj.getMonth()][0]} ${i} ${obj.getFullYear()}`) // set new date
        tableDate[newDate.getDay()][colNumber] = i


        console.log('--------------',tableDate[newDate.getDay()][colNumber], i)

        month = `${monthList[0][0]}`
        console.log(newDate.getDay(),colNumber,` ${i} ---${weekDayList[newDate.getDay()]}  ${newDate.getDay()}  ${colNumber}`) 
        if(newDate.getDay() == 6) colNumber++   //edit row number
    } 
}



function clearTable(){
    console.log('clearTable')

    for(let i=0; i<td.length; i++){
        td[i].textContent= ''
        if(td[i].classList.contains('today')) {
            td[i].classList.remove('today')
        }
    }
}



function fillTable(obg){
    console.log('fillTable')

    let n = 1
    for(let i=0; i<7; i++){
        let s = ''
        for(let j=0;j<6;j++){
            console.log(n,tableDate[i][j])
            n++
            document.querySelector(`.calendar tbody tr:nth-of-type(${j+1}) td:nth-of-type(${i+1})`).textContent = tableDate[i][j] !== 0 ? tableDate[i][j] : ''

            if(tableDate[i][j]  == today.getDate() && today.getMonth() == obg.getMonth() && today.getFullYear() == obg.getFullYear()){
                document.querySelector(`.calendar tbody tr:nth-of-type(${j+1}) td:nth-of-type(${i+1})`).classList.add('today')
            }
            tableDate[i][j] = 0;
        }
    }
    
    currentYear.textContent = `${monthList[obg.getMonth()][0]} - ${obg.getFullYear()}`
    console.log(today,  obg)

}



clearTable()
generateStartArr()
setNewDate(today)
fillTable(today)

let savaDate = new Date(today)
let newMonth = savaDate.getMonth()




let leftArr = document.querySelector('.glyphicon-chevron-left'),
    rightArr = document.querySelector('.glyphicon-chevron-right')

   

leftArr.addEventListener('click',function(){
   
    console.log('savaDate')

    newMonth = savaDate.getMonth() - 1
    savaDate = new Date(savaDate.setMonth(newMonth))
    console.log(savaDate)
    clearTable()
    setNewDate(savaDate)
    fillTable(savaDate)  
     
})

rightArr.addEventListener('click',function(){
   
    console.log('savaDate')

    newMonth = savaDate.getMonth() + 1
    savaDate = new Date(savaDate.setMonth(newMonth))
    console.log(savaDate)
    clearTable()
    setNewDate(savaDate)
    fillTable(savaDate)  
     
})