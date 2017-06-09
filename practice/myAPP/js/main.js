(function() {
    'use strict';

    var comment = document.getElementById('js-comment');
    var label = document.getElementById('js-label');
    var message = document.getElementById('js-alert');
    var messageText = 'unable to be input';

    var LIMIT = 30;
    var WARNING = 10;

    label.innerHTML = LIMIT;

    comment.addEventListener('keyup', function() {
        var remaining = LIMIT - this.value.length;
        label.innerHTML = remaining;
        // if (remaining < WARNING) {
        //     label.className = 'warning';
        // } else {
        //     label.className = '';
        // }
        label.className = remaining < WARNING ? 'warning' : '';

        if (remaining === 0) {
            comment.readOnly = true;
            message.innerHTML = '<br>' + messageText;
            message.className = 'warning';
        } else {
            comment.readOnly = false;
        }
    });

})();