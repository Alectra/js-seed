(function () {
	'use strict';

	angular.module('app').service('appService', function ($timeout, $interval) {
		var self = this;
		var name = 'tmp';
		var things = [
			{
				name:'thing 1'
			},
			{
				name:'thing 2'
			},
			{
				name:'thing 3'
			},
			{
				name:'thing 4'
			},
			{
				name:'thing 5'
			}
		];
		self.getAllThings = function () {

			return things;
		};

		self.submitName = function (first, last) {
			name = first + ' ' + last;
			// things[0].name = name;
			// console.log(name);
			return name;
		};
		self.getName = function () {
			return name;
		};

		var timer = 0;
		self.startOtherTimer = function (val) {
			timer = val;
			return timer;
		};
		self.stopOtherTimer = function () {
			timer = 50;
			return timer;
		};

		var countdown = 0;
		self.startCountdown = function (val) {
			countdown = val;
			$timeout(function () { countdown--; }, 1000);
			return countdown;
		};

		var clock = 'loading clock...';
		self.startClock = function () {
			TimeCtrl();
			return clock;
		}
		this.ChangeTest = function (data) {
        $interval(function () {
            if (data.Test == 'Test') data.Test = 'Changed Test';
            else data.Test = 'Test';
        },500);
    }
		var TimeCtrl = function () {
			// clock = "loading clock..."; // initialise the time variable
			var tickInterval = 1000; //ms
			var tick = function () {
				clock = Date.now(); // get the current time
				$timeout(tick, tickInterval); // reset the timer
			}

			// Start the timer
			$timeout(tick, tickInterval);
		};
	});
})();