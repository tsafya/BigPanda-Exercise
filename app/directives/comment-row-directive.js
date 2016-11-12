'use strict';

commentsApp.directive("commentRow", function () {
    return {
        replace: true,
        restrict: "E",
        scope: {
            email: '@',
            message: '@',
            emailHash: '@'
        },
        link: function (scope) {
            scope.displayName = '';
            scope.image = 'https://secure.gravatar.com/avatar/' + scope.emailHash;
        },
        templateUrl: './app/views/comment-template.html'
    };
});

