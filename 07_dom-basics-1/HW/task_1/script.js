document.addEventListener("DOMContentLoaded", function () {
	let timerInput = document.querySelector(".input");
	let startTimerBtn = document.querySelector(".btn");
	let timerCount = document.querySelector(".timer");
	let intervalTimer;

	function setTimerCount() {
		let initialTimerCount = parseInt(timerInput.value);
		if (initialTimerCount <= 0) {
			alert("Введите положительное число");
			return false;
		} else {
			timerCount.textContent = initialTimerCount;
		}
	}

	function decrementCount() {
		let currentTimerCount = parseInt(timerCount.textContent);
		currentTimerCount -= 1;
		timerCount.textContent = currentTimerCount;
		if (currentTimerCount == 0) {
			clearInterval(intervalTimer);
		}
	}

	function startTimer() {
		if (intervalTimer !== undefined) {
			clearInterval(intervalTimer);
		}
		if (setTimerCount() !== false) {
			intervalTimer = setInterval(decrementCount, 1000);
		}
		else {
			return false;
		}
	}

	startTimerBtn.addEventListener("click", startTimer);
});
