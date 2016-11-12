'use strict';

commentsApp.controller('MainCtrl', function ($scope, emailHash) {

    $scope.comments = [
        {"emailHash": "4e42e58e93aad44fd45884d09419d4ae", "email": "tsafya@gmail.com", "message": "test comment"}
    ];

    function clearNewCommentForm() {
        $scope.newComment = {
            email: '',
            message: ''
        };
    }

    //-------------------------------------------------------------------------------------------------
    // Create new comment
    //-------------------------------------------------------------------------------------------------

    $scope.createComment = function (comment) {
        comment.emailHash = emailHash.getEmail(comment.email);
        $scope.comments.push(comment);

        clearNewCommentForm();
    };

});