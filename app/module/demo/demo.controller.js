(function () {
    'use strict';

    angular
        .module('app.demo', [])
        .controller('DemoController', DemoController);

    DemoController.$inject = [];

    function DemoController() {
        var vm = this;

        vm.someWrapperObj = {};
        vm.someWrapperObj.itemList = [
            {name: 'Item A'},
            {name: 'Item B'},
            {name: 'Item C'},
            {name: 'Item D'},
            {name: 'Item E'}
        ];
    }
})();