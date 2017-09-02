(function () {
	'use strict';

	angular.module('app').component('home', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			// vm.things = null;

			// vm.$onInit = function () {
			// 	vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/home/home.component.html'
	});
})();