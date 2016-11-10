
angular.module('Comments', [])
.controller('MainCtrl', function($scope) {

	$scope.comments = [
		{"image" : "url", "email" : "testEmail@bigpanda.com", "comment" : "test comment"}
	];

	function clearNewCommentForm() {
		$scope.newComment = {
			email: '',
			message: ''
		};
	}

	//-------------------------------------------------------------------------------------------------
	// CRUD
	//-------------------------------------------------------------------------------------------------

	$scope.createComment = function(comment)	{
		$scope.comments.push(comment);

		clearNewCommentForm();
	};

});