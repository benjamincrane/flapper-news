angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
    $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') {return;}
    $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
            {author: 'Joe', body: 'Cool!', upvotes: 0},
            {author: 'Bob', body: 'Wrong!', upvotes: 0}
        ]
    });
    $scope.title = '';
    $scope.link = '';
    }
}])