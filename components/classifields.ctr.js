(function() {
    'use strict';
    angular
        .module("ngClassifields")
        .controller("classifieldsCtrl",function($scope, $http, classifiedsFactory,$mdSidenav, $mdToast) {
            // $mdSidenav is provided by angular material
            classifiedsFactory.getClassifieds().then(function(classifieds) {
                $scope.classifieds = classifieds.data
            })
            let contact = {
                name: "leo dong",
                phone: "(999)999-9999",
                email: "leodong@gmail.com"
            }
            $scope.openSidebar = function() {
                $mdSidenav('left').open();
            }
            $scope.closeSidebar = function() {
                $mdSidenav('left').close();
            }
            $scope.saveClassified = function(classified) {
                console.log(classified);
                if (classified) {
                    classified.contact = contact;
                    $scope.classifieds.push(classified);
                    $scope.classified = {};
                    $scope.closeSidebar();
                    $mdToast.show(
                        $mdToast.simple()
                        .content("Classified Saved!")
                        .position('top, right')
                        .hideDelay(2000)
                    )
                }
            }
            $scope.editClassified = function (classified) {
                $scope.editing = true;
                $scope.openSidebar();
                $scope.classified = classified;
                console.log(classified)
            }
            $scope.saveEdit = function() {
                $scope.editing= false;
                $scope.classified = {};
                $scope.closeSidebar();
            }
        });
})();