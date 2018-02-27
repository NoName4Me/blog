// -------- basic router
angular
    .module("root", ["ui.router"])
    .controller("basic.ctrl", function($scope, $stateParams) {
        $scope.jonge = $stateParams.jonge;
    })
    .config(function($stateProvider) {
        var helloState = {
            name: "hello",
            url: "/hello",
            controller: "basic.ctrl",
            template: "<h3>hello world!</h3>"
        };

        var aboutState = {
            name: "about",
            url: "/about",
            template: "<h3>Its the UI-Router hello world app!</h3>"
        };

        var urlState = {
            name: "hello.jonge",
            url: "/hello/:jonge",
            template: `<a ui-sref="url.state" ui-sref-active="active">Say</a>
            <ui-view></ui-view>`
        };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
        $stateProvider.state(urlState);
    });