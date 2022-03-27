
// calculates the number of days an argument's date is from today
// argument pastTime takes Unix epoch time in seconds

const daysAgo = (pastTime) => {
    const today = Date.now(); //Date.now crates Date in milliseconds
    const timeDif = today - (pastTime * 1000);
    const daysDif = Math.floor(timeDif / 86400000); //86,400,000 represents number of milliseconds in a day

    //if #days is less than 1, then return in hours
    if (daysDif < 1) {
        const hoursDif = Math.floor(timeDif / 3600000)
        return `${hoursDif} hours ago`
    } else {
        return `${daysDif} days ago`
    }
}

export default daysAgo;