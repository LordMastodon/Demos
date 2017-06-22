export class MainController {
    constructor ($scope, $log, $document, $mdDialog, demosService) {
        'ngInject';

        $scope.addDemo = function (name, html, demotype) {
            demosService.addDemo(name, html, demotype);
        };

        //$scope.getHTML = function (url) {
        //    var xmlHttp = null;

        //    xmlHttp = new XMLHttpRequest();
        //    xmlHttp.open("GET", url, false);
        //    xmlHttp.send(null);
        //    $log.log(xmlHttp.responseText);
        //}

        $scope.removeDemo = function (name, html) {
            demosService.removeDemo(name, html);
        };
 
        $scope.updateDemo = function (oldName, newName, html, demotype) {

        };

        $scope.getDemoInfo = function (name) {

        };

        $scope.getDemos = function () {
            return demosService.getDemos();
        };

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.saveNew = function () {
            $scope.addDemo($scope.newdemo.name, $scope.newdemo.html, $scope.newdemo.demotype);
            $scope.cancel();
        };

        $scope.loggle = function (log) {
            $log.log(log);
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
