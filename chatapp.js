window.addEventListener('load', function () {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function () {
        var username = document.getElementById('username').value;
        var message = document.getElementById('message').value;
        //Print that up.
        console.log(username, message);

        function loadDoc(username, message) {
            var request = new XMLHttpRequest();
            request.open('POST', 'http://chat.queencityiron.com/messages');
            request.send(JSON.stringify({
                name: username,
                message: message,
            }));
        }
        loadDoc(username, message);
    });
    var get = document.getElementById('new');
    get.addEventListener('click', function () {
        function getMessage() {
            var request = new XMLHttpRequest();
            request.open('GET', 'http://chat.queencityiron.com/messages');
            request.onload = function () {
                var data = JSON.parse(request.responseText);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].user, data[i].message);
                }
            };
            request.send();
        }
        console.log('HEY');
        //Pull what you want, and produce that - username and message, and time stamp.
        getMessage();
    }); // End of window.addEventListener
});
