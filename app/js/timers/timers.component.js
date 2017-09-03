(function () {
	'use strict';

	angular.module('app').component('timers', {
		controllerAs: 'vm',
        controller: function (appService, $timeout, $interval) {
			var vm = this;
			vm.timers = {
				timerText: 1000,
				timer: 0,
				timerStatus: 'Start',
				timerclickme: true,

				countdownRunning: false,
				countdownText: 5,
				countdownRemainingTime: 0,

				countupRunning: false,
				countupText: 5,
				countupRemainingTime: 0,

				clock: 'Loading...',
				clockRunning: false
			};

// Timer
			var timerObject;
			var updateTimer = function () {
				vm.timers.timer += 1;
			};
			vm.resetOtherTimer = function () {
				$interval.cancel(timerObject);
				vm.timers.timer = 0;
				vm.timers.timerStatus = 'Start';
				vm.timers.timerclickme = true;
			};
			vm.toggleTimer = function () {
				vm.timers.timerRunning = true;
				if (vm.timers.timerclickme === true) {
					vm.timers.timerStatus = 'Stop';
					vm.timers.timerclickme = false;
					timerObject = $interval(updateTimer, vm.timers.timerText);

				} else if (vm.timers.timerclickme === false) {
					vm.timers.timerclickme = true;
					$interval.cancel(timerObject);
				}
			}

// Countdown
			var countdownTimerObject;
			vm.onTimeout = function () {
				vm.timers.countdownRemainingTime--;
				if (vm.timers.countdownRemainingTime >= 1)
					countdownTimerObject = $timeout(vm.onTimeout, 1000);
				else
					vm.stopCountdown();
			}
			vm.startCountdown = function () {
				vm.timers.countdownRemainingTime = vm.timers.countdownText;
				countdownTimerObject = $timeout(vm.onTimeout, 1000);
				vm.timers.countdownRunning = true;
			}
			vm.stopCountdown = function () {
				$timeout.cancel(countdownTimerObject);
				vm.timers.countdownRunning = false;
			}

// Countup... Breaks countdown timer
			// var countupTimerObject;
			// vm.onTimeout = function () {
			// 	vm.timers.countupRemainingTime++;
			// 	if (vm.timers.countupRemainingTime < vm.timers.countupText)
			// 		countupTimerObject = $timeout(vm.onTimeout, 1000);
			// 	else
			// 		vm.stopCountup();
			// }
			// vm.startCountup = function () {
			// 	vm.timers.countupRemainingTime = 0;//vm.timers.countupText;
			// 	countupTimerObject = $timeout(vm.onTimeout, 1000);
			// 	vm.timers.countupRunning = true;
			// }
			// vm.stopCountup = function () {
			// 	$timeout.cancel(countupTimerObject);
			// 	vm.timers.countupRunning = false;
			// }

// Clock
			vm.startClock = function () {
				vm.timers.clockRunning = true;
				TimeCtrl();
				return vm.timers.clock;
			};
			this.ChangeTest = function (data) {
				$interval(function () {
					if (data.Test == 'Test') data.Test = 'Changed Test';
					else data.Test = 'Test';
				}, 500);
			};
			var TimeCtrl = function () {
				var tickInterval = 1000; //ms
				var tick = function () {
					vm.timers.clock = Date.now(); // get the current time
					$timeout(tick, tickInterval); // reset the timer
				}

				// Start the timer
				$timeout(tick, tickInterval);
			};


			// vm.$onInit = function () {
				// vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/timers/timers.component.html'
	});
})();