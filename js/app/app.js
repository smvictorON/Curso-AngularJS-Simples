angular.module("meuModulo", ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/home",{
    templateUrl: "templates/home.html",
    controller: "indexController"
  })
  .when("/contato",{
    templateUrl: "templates/contato.html",
    controller: "contatoController"
  })
  .otherwise({redirectTo: "/"});

  $locationProvider.html5Mode(true);
})