(function () {
	'use strict';

	angular.module('app').component('listBox', {
		controllerAs: 'vm',
        controller: function (appService) {
            var vm = this;
			vm.things = null;

			vm.$onInit = function () {
				vm.things = appService.getAllThings();
            }
        },
		templateUrl: 'js/list-box/list-box.component.html'
	});
})();