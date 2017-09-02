(function () {
	'use strict';

	angular.module('app').component('infoBox', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			vm.things = null;

			vm.$onInit = function () {
				vm.things = appService.getAllThings();
            }
        },
		templateUrl: 'js/info-box/info-box.component.html'
	});
})();