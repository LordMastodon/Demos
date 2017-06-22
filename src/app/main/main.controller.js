export class MainController {
    constructor ($scope, $log, $document, $mdDialog, demosService) {
        'ngInject';

        $scope.addDemo = function (name, html, demotype, url) {
            demosService.addDemo(name, html, demotype, url);
        };

        $scope.removeDemo = function (name) {
            demosService.removeDemo(name);
        };

        $scope.getDemos = function () {
            return demosService.getDemos();
        };

        $scope.getDemoTypeByID = function (ID) {
            return demosService.getDemoTypeByID(ID);
        }

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.saveNew = function () {
            $scope.addDemo($scope.newdemo.name, $scope.newdemo.html, $scope.getDemoTypeByID($scope.newdemo.demotypeid), $scope.newdemo.url);
            $scope.cancel();
        };

        $scope.loggle = function (log) {
            $log.log(log);
        }

        $scope.isEmpty = function (thing) {
            return (thing == "" || typeof thing == "undefined");
        }

        $scope.saveEdit = function (newname, html, demotype, url) {
            demosService.updateDemo(this.oldname, newname, html, demotype, url);
            $scope.cancel();
        };

        $scope.showNewDemo = function (ev) {
            var me = this;
            $mdDialog.show({
                templateUrl: "app/main/dialogs/newdemo.html",
                targetEvent: ev,
                fullscreen: $scope.customFullscreen,
                parent: angular.element($document.body),
                controller: function () { return me },
                controllerAs: '$filterController',
                clickOutsideToClose: true,
                escapeToClose: true
            });
        };

        $scope.showEditDemo = function (ev, oldname, html, demotype, url) {
            this.oldname = oldname;
            this.newname = oldname;
            this.html = html;
            this.url = url;
            this.demotypeid = demotype;
            var me = this;
            $mdDialog.show({
                templateUrl: "app/main/dialogs/editdemo.html",
                targetEvent: ev,
                fullscreen: $scope.customFullscreen,
                parent: angular.element($document.body),
                controller: function () { return me },
                controllerAs: '$filterController',
                clickOutsideToClose: true,
                escapeToClose: true
            });
        };
    }
}
