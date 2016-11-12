'use strict';

commentsApp.controller('MainCtrl', function ($scope) {

    $scope.comments = [];

    function clearNewCommentForm() {
        $scope.newComment = {
            email: '',
            message: ''
        };
        angular.element('#commentEmail').focus();
    }

    //-------------------------------------------------------------------------------------------------
    // Create new comment
    //-------------------------------------------------------------------------------------------------

    $scope.createComment = function (comment) {
        comment.emailHash = Crypto.MD5(comment.email);
        $scope.comments.push(comment);

        clearNewCommentForm();
    };

});