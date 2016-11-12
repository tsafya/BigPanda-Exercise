'use strict';

commentsApp.service('emailHash', function () {

    this.getEmail = function(email) {
        var emailHash = Crypto.MD5(email);
        return emailHash;
    }
});