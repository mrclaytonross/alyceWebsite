const App = angular.module('acdApp', ['ngRoute']);

App.config(function ($routeProvider, $httpProvider) {
  // $routeProvider
  //   .when('/form', {
  //     templateUrl: 'app/form/form.html',
  //     controller: 'formController',
  //   })
  //   .when('/books', {
  //     templateUrl: 'app/books/books.html',
  //     controller: 'booksController',
  //   })
  //   .when('/cancel', {
  //     templateUrl: 'app/cancel/cancel.html',
  //     controller: 'cancelController',
  //   })
  //   .when('/edit', {
  //     templateUrl: 'app/edit/edit.html',
  //     controller: 'editController',
  //   })
  //   .otherwise({ redirectTo: '/form' });
});
