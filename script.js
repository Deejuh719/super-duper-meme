console.log('Practice 1:')
let thisDate = new Date()
console.log(thisDate.toISOString())

console.log('')
console.log('Practice 2:')
let thisOtherDate = new Date()
thisOtherDate.getFullYear()
console.log('The actual year is ' + thisOtherDate.getFullYear())
thisOtherDate.setFullYear(2024)
console.log('The edited year is ' + thisOtherDate.getFullYear())

console.log('')
console.log('Practice 3:')
let someDate = new Date()
console.log(someDate.toLocaleString())
console.log(someDate.toLocaleDateString())
console.log(someDate.toLocaleTimeString())

console.log('')
console.log('Practice 4:')
let someOtherDate = new Date()
console.log('The current month is ' + someOtherDate.getMonth().toString())
someOtherDate.setMonth(11)
console.log('The new month is ' + someOtherDate.getMonth().toString())

console.log('')
console.log('Practice 5:')
let aDate = new Date()
console.log('American English Date and Time: ' + aDate.toLocaleString('en-US'))
console.log('American English Date: ' + aDate.toLocaleDateString('en-US'))
console.log('American English Time: ' + aDate.toLocaleTimeString('en-US'))

console.log('')
console.log('Practice 6:')
let dateDate = new Date(2022, 0, 15, 15, 45, 30, 0);
console.log(dateDate.toLocaleString('en-US'))

console.log('')
console.log('Practice 7:')
let theDate = new Date(2023, 2, 8, 9, 30, 0, 0);
console.log(theDate.toLocaleString())
theDate.getHours()
console.log('The Original Hours: ' + theDate.getHours())
theDate.setHours(14)
console.log(theDate.toLocaleString())

console.log('')
console.log('Practice 8:')
let theOtherDate = new Date()
let written = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}
console.log(theOtherDate.toLocaleString('en-US', written))

console.log('')
console.log('Practice 9:')
let randomDate = new Date(2022, 5, 30, 12, 45, 30);
console.log(randomDate.toISOString())

console.log('')
console.log('Practice 10:')
let newRandom = new Date(2022, 0, 1, 12);
console.log('Previous Day: ' + newRandom.getDate())
newRandom.setDate(15);
console.log('Updated Date: ' + newRandom.toLocaleString('en-US'))
