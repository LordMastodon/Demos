export class MainController {
    constructor ($scope, $log, $document, $mdDialog, demosService) {
        'ngInject';

        $scope.addDemo = function (name, html, demotype, url) {
            demosService.addDemo(name, html, demotype, url);
        };

        $scope.removeDemo = function (name) {
            demosService.removeDemo(name);
        };
 
        $scope.updateDemo = function (oldName, newName, html, demotype, url) {
            demosService.updateDemo(oldName, newName, html, demotype, url);
        }

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

        $scope.saveEdit = function (oldname) {
            //$scope.updateDemo($scope.demo.name, $scope.demo.newname, $scope.demo.newhtml, $scope.demo.newdemotypeid);
            $log.log($scope.oldname + ", " + $scope.newname + ", " + $scope.newhtml);
        };

        $scope.showNewDemo = function (ev) {
            $mdDialog.show({
                controller: MainController,
                templateUrl: "app/main/dialogs/newdemo.html",
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen
            });
        };

        $scope.showEditDemo = function (ev) {
            $log.log($scope.newname + ", " + $scope.newhtml + ", " + $scope.oldname);
            $mdDialog.show({
                controller: MainController,
                templateUrl: "app/main/dialogs/editdemo.html",
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen
            });
        };
    }
}
