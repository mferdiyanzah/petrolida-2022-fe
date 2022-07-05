export const countdown = () => {
  const now = new Date().getTime()
  const launchingDate = new Date("Feb 18, 2022 09:00:00").getTime()
  const distance = launchingDate - now
  const digit = (n) => n < 10 ? "0" + n : "" + n

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return {
    days: digit(days),
    hours: digit(hours),
    minutes: digit(minutes),
    seconds: digit(seconds)
  }
}


