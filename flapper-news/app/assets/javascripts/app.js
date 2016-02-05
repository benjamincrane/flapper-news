angular.module('flapperNews', ['ui.router','templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/_home.html',
            controller: 'MainCtrl'
        });

    $urlRouterProvider.otherwise('home');
},
.state('posts', {
    url: '/posts/{id}',
    templateUrl: 'posts/_posts.html',
    controller: 'PostsCtrl'
});
])







$scope.incrementUpvotes = function(post) {
    post.upvotes +=1;
};

$scope.posts = posts.posts;