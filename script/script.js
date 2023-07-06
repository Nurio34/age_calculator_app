
const dayInp = document.getElementById("dayInp")
const monthInp = document.getElementById("monthInp")
const yearInp = document.getElementById("yearInp")



    dayInp.addEventListener("input",()=> {

        const value = dayInp.value
        const dayLabel = document.querySelector(`label[for="Day"]`)
        const invalidDayEl = document.getElementById("invalidDayEl")
        const dayPattern = new RegExp("^(?:[1-9]|[1-2][0-9]|3[0-1])$")
            
            validation(dayLabel,dayInp,invalidDayEl,dayPattern,value,"day")
            displayTime()
    })

    monthInp.addEventListener("input",()=> {

        const value = monthInp.value
        const monthLabel = document.querySelector(`label[for="Month"]`)
        const invalidMonthEl = document.getElementById("invalidMonthEl")
        const monthPattern = new RegExp("^(?:[1-9]|1[0-2])$")

            validation(monthLabel,monthInp,invalidMonthEl,monthPattern,value,"month")
            displayTime()
    })

    yearInp.addEventListener("input",()=> {

        const value = yearInp.value
        const yearLabel = document.querySelector(`label[for="Year"]`)
        const invalidYearEl = document.getElementById("invalidYearEl")
        const yearPattern = new RegExp("^(?:19[0-9]{2}|20[0-2][0-3])$")
            validation(yearLabel,yearInp,invalidYearEl,yearPattern,value,"year")
            displayTime()
    })

function validation(label,input,element,pattern,value,time) {

    if(pattern.test(value) ) {

        label.classList.remove("invalid_label")
        input.classList.remove("invalid_input")
        element.classList.remove("visible")
    } 
    else if (!pattern.test(value)) {

        label.classList.add("invalid_label")
        input.classList.add("invalid_input")
        element.classList.add("visible")
        element.innerText = `Must be a valid ${time}`
    } 
    if (value == "") {

        element.innerText = `This field is required`
    }
}

function displayTime() {
    const birthYear = yearInp.value
    const birthMonth = monthInp.value
    const birthDay = dayInp.value

    const currentTime = new Date().getTime()
    const aDay = 1000 * 60 * 60 * 24
    const aYear = (aDay * 365) + (1000 * 60 * 60 * 6)
    const aMonth = aYear / 12
    
    const birth = new Date(birthYear,birthMonth-1,birthDay).getTime()
    const year = (((currentTime-birth)/aYear).toFixed())
    const month = (((currentTime-birth)/aMonth).toFixed()) % 12
    const day = (((currentTime-birth)/aDay).toFixed()) % 30

    const yearEl = document.querySelector("#yearEl span").innerText = year
    const monthEl = document.querySelector("#monthEl span").innerText = month
    const dayEl = document.querySelector("#dayEl span").innerText = day

    console.log(yearEl);
}




