function lifeInWeeks(age) {
    let yearsRemainig = 90 - age;
    let daysRemaining = yearsRemainig * 365;
    let weeksRemaing = yearsRemainig * 52;
    let monthsRemaining = yearsRemainig * 12;
    // console.log('You have ' + daysRemaining + 'days,' + weeksRemaing + 'weeks,' + 'and ' + monthsRemaining + 'months remaining.')
    const res = 'You have ' + daysRemaining + 'days,' + weeksRemaing + 'weeks,' + 'and ' + monthsRemaining + 'months remaining.'
    return res;
}
// console.log(lifeInWeeks(22));


function lifeInWeeks(age) {
    let yearsRemainig = 90 - age;
    let daysRemaining = yearsRemainig * 365;
    let weeksRemaing = yearsRemainig * 52;
    let monthsRemaining = yearsRemainig * 12;
    // console.log('You have ' + daysRemaining + 'days,' + weeksRemaing + 'weeks,' + 'and ' + monthsRemaining + 'months remaining.')
    const lifeTime = 'You have ' + daysRemaining + 'days,' + weeksRemaing + 'weeks,' + 'and ' + monthsRemaining + 'months remaining.'
    return lifeTime
}
console.log(lifeInWeeks(22))