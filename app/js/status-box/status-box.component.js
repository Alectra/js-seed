(function () {
	'use strict';

	angular.module('app').component('statusBox', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			// vm.things = null;

			// vm.$onInit = function () {
			// 	vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/status-box/status-box.component.html'
	});
})();