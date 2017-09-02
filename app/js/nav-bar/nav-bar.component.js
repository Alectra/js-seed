(function () {
	'use strict';

	angular.module('app').component('navBar', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			// vm.things = null;

			// vm.$onInit = function () {
			// 	vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/nav-bar/nav-bar.component.html'
	});
})();