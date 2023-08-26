const begHourInput = document.querySelector(".begHour")
const begMinuteInput = document.querySelector(".begMinute")
const endHourInput = document.querySelector(".endHour")
const endMinuteInput = document.querySelector(".endMinute")
const button = document.querySelector("button")
const form = document.forms.form
const res = document.querySelector(".res")

let hour, minute, hourStr, minuteStr

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

button.addEventListener("click", () => {
  if (
    begHourInput.value < 1 ||
    endHourInput.value < 1 ||
    endHourInput.value > 24 ||
    begHourInput.value > 24 ||
    begMinuteInput.value < 0 ||
    endMinuteInput.value < 0 ||
    endMinuteInput.value > 60 ||
    begMinuteInput.value > 60
  ) {
    res.textContent = `Введите корректные данные`
  } else {
    if (endMinuteInput.value >= begMinuteInput.value) {
      hour = endHourInput.value - begHourInput.value
      minute = endMinuteInput.value - begMinuteInput.value
    } else {
      hour = endHourInput.value - begHourInput.value - 1
      minute = 60 - Math.abs(endMinuteInput.value - begMinuteInput.value)
    }
    if (hour === 1 || hour === 21) {
      hourStr = "час"
    } else if (
      hour === 2 ||
      hour === 3 ||
      hour === 4 ||
      hour === 22 ||
      hour === 23
    ) {
      hourStr = "часа"
    } else {
      hourStr = "часов"
    }
    if (["1"].includes(String(minute).at(-1)) && minute != 11) {
      minuteStr = "минута"
    } else if (
      ["2", "3", "4"].includes(String(minute).at(-1)) &&
      !["11", "12", "13", "14", "15", "16", "17", "18", "19"].includes(
        String(minute)
      )
    ) {
      minuteStr = "минуты"
    } else {
      minuteStr = "минут"
    }
    if (hour === 0) {
      hourStr = ""
      hour = ""
    }
    if (minute === 0) {
      minuteStr = ""
      minute = ""
    }
    res.innerHTML = `Прошло времени: <br> ${hour} ${hourStr} ${minute} ${minuteStr}`
  }
})
