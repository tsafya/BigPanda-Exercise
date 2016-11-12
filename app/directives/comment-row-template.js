'use strict';

commentsApp.directive("personImage", function () {
    return {
        replace: true,
        restrict: "E",
        scope: {
            email: '@',
            message: '@',
            emailHash: '@'
        },
        link: function (scope, el, attr) {
            scope.image = 'https://secure.gravatar.com/avatar/' + scope.emailHash;
            scope.defaultImage = 'https://somedomain.com/images/avatar.png';
        },
        templateUrl: './app/views/comment-template.html'
    };
});