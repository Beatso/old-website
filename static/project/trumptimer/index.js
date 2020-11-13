const countdownContainer = document.getElementById("countdown")

const countdownTimer = _ => {
	const difference = +new Date("2021-01-20") - +new Date()

	if (difference > 0) {
		
		const parts = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60)
		}

		countdownContainer.innerHTML = "<span style=font-size:2vh;font-weight:700;>DAYS : HRS : MINS : SECS</span><br><b>" + Object.keys(parts)
			.map((part) => {
				if (!parts[part]) return "00:"
				return `${String("0000" + parts[part]).slice(-2)}:`
			})
			.join(" ").slice(0, -1) + "</b><br>left"

	} else countdownContainer.innerHTML = "bye bye donald"

}

countdownTimer()
setInterval(countdownTimer, 1000)