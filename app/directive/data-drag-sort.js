(function () {
    'use strict';

    angular
        .module('app')
        .directive('dragSort', dragSort);

    function dragSort() {

        return {
            restrict: "EA",
            link: link
        };

        function link(scope, element, attribute) {
            var list = attribute.list.split('.').reduce(function (a, b) {
                return a[b];
            }, scope.$parent);

            element.on('dragstart', function (event) {
                event.dataTransfer.setData("text/plain", element.attr('data-index'));
            });
            element.on('dragover', function (event) {
                event.preventDefault();
            });
            element.on('drop', function (event) {
                event.preventDefault();
                var dragIndex = event.dataTransfer.getData("text"),
                    targetIndex = element.attr('data-index'),
                    item = list[dragIndex];

                list.splice(dragIndex, 1);
                list.splice(targetIndex, 0, item);
                scope.$apply();
            });
        }
    }

})();