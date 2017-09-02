(function () {
	'use strict';

	angular.module('app').component('otherHome', {
		controllerAs: 'vm',
        controller: function (appService) {
			var vm = this;
			vm.other = {
				timerRunning: false,
				timerText: 0,
				totalTimer: 0,

				countdownRunning: false,
				countdownText: 0,
				remainingTime: 0
			};

			vm.toggleTimer = function () {
				if (!vm.other.timerRunning) {
					vm.other.timerRunning = true;
					vm.other.totalTimer = appService.startOtherTimer(vm.other.timerText);
				}
				else {
					vm.other.timerRunning = false;
					vm.other.totalTimer = appService.stopOtherTimer();
				}

            }
			vm.startTimer = function () {
				if (!vm.other.countdownRunning) {
					vm.other.countdownRunning = true;
					vm.other.remainingTime = appService.startCountdown(vm.other.countdownText);
					// myService.ChangeTest($scope.Data);
				}
			};

			vm.clock = 'loading...';
			vm.startClock = function () {
				vm.clock = appService.startClock();
			};
			// vm.$onInit = function () {
				// vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/other-home/other-home.component.html'
	});
})();