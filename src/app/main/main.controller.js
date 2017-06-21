export class MainController {
    constructor ($scope, $log, $document, $mdDialog, demosService) {
        'ngInject';

        $scope.addDemo = function (name, html) {
            demosService.addDemo(name, html);
        };

        $scope.removeDemo = function (name, html) {
            demosService.removeDemo(name, html);
        };
 
        $scope.updateDemo = function (oldName, newName, html) {

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
            $scope.addDemo($scope.newdemo.name, $scope.newdemo.html);
            $scope.cancel();
        };

        $scope.loggle = function (log) {
            $log.log(log);
        }

        $scope.saveEdit = function (oldname) {
            //$scope.updateDemo($scope.demo.name, $scope.demo.newname, $scope.demo.newhtml);
            console.log($scope.oldname + ", " + $scope.newname + ", " + $scope.newhtml);
        };

        $scope.showNewDemo = function (ev) {
            $mdDialog.show({
                controller: MainController,
                template: "<form ng-cloak style='width: 800px'><md-toolbar><div class='md-toolbar-tools'><h2 style='color: #fff !important;'>New Demo</h2><span flex></span><md-button class='md-icon-button' ng-click='cancel()'>"
                +         "<i class='material-icons' style='color: #fff !important;'>clear</i></md-button></div></md-toolbar><md-dialog-content>"
                + "<div class='md-dialog-content'><md-input-container class='md-block'><label>Name</label><input ng-model='newdemo.name'></md-input-container></div><md-input-container class='md-block' style='padding-left: 25px; padding-right: 25px;'><label style='margin-left:25px; margin-bottom: 5px;'>HTML</label><textarea ng-model='newdemo.html' rows='5' md-select-on-focus></textarea></md-input-container ></md-dialog-content><md-dialog-actions layout='row'>"
+                         "<span flex></span><md-button ng-click='cancel()'>Cancel</md-button><md-button ng-click='saveNew()'>Save</md-button></md-dialog-actions></form>",
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen
            });
        };

        $scope.showEditDemo = function (ev) {
            console.log($scope.newname + ", " + $scope.newhtml + ", " + $scope.oldname);
            $mdDialog.show({
                controller: MainController,
                template: "<form ng-controller='MainController' ng-cloak style='width: 800px'><md-toolbar><div class='md-toolbar-tools'><h2 style='color: #fff !important;'>Edit Demo</h2><span flex></span><md-button class='md-icon-button' ng-click='cancel()'>"
                + "<i class='material-icons' style='color: #fff !important;'>clear</i></md-button></div></md-toolbar><md-dialog-content>"
                + "<div class='md-dialog-content'><md-input-container class='md-block'><label>Name</label><input ng-model='newname'></md-input-container></div><md-input-container class='md-block' style='padding-left: 25px; padding-right: 25px;'><label style='margin-left:25px; margin-bottom: 5px;'>HTML</label><textarea ng-model='newhtml' rows='5' md-select-on-focus></textarea></md-input-container></md-dialog-content><md-dialog-actions layout='row'>"
                + "<span flex></span><md-button ng-click='cancel()'>Cancel</md-button><md-button ng-click='loggle()'>Save</md-button></md-dialog-actions></form>",
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen
            });
        };
    }
}
