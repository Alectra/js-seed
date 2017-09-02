(function () {
	'use strict';

	angular.module('app').component('formBox', {
		controllerAs: 'vm',
        controller: function (appService) {
			var vm = this;

			vm.fullName = '';
			vm.name = {
				first: '',
				last: ''
			};
			vm.submit = function () {
				// vm.fullName = vm.name.first + ' ' + vm.name.last;
				vm.fullName = appService.submitName(vm.name.first, vm.name.last);
			};

			// vm.things = null;
			// vm.$onInit = function () {
			// 	vm.things = appService.getAllThings();
            // }
        },
		templateUrl: 'js/form-box/form-box.component.html'
	});
})();