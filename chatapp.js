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
                console.log(request.responseText);
                var data = JSON.parse(request.responseText);
                console.log(data.length);
            };
            request.send();
        }
        getMessage();
    });
}); // End of window.addEventListener
