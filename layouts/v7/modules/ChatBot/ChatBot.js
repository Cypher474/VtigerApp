$(document).ready(function() {
    // Toggle chatbot visibility
    $('.profile_div').click(function() {
        $('.profile_div').toggle();
        $('.chatCont').toggle();
        $('.bot_profile').toggle();
        $('.chatForm').toggle();
        $('#chat-input').focus();
    });

    $('.close').click(function() {
        $('.profile_div').toggle();
        $('.chatCont').toggle();
        $('.bot_profile').toggle();
        $('.chatForm').toggle();
    });

    function send(text) {
        const apiUrl = "http://localhost:8000/chat";  // Make sure this URL is correct!
        const payload = { content: text };
    
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`HTTP status ${response.status}`);
        })
        .then(data => {
            displayMessage("assistant", data.response);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send message: ' + error);
        });
    }
    

    function displayMessage(role, messageContent) {
        const chatContainer = $('#result_div');
        const messageElement = $('<div></div>').addClass(role).text(messageContent);
        chatContainer.append(messageElement);
    }

    $('#chat-input').keypress(function(e) {
        if (e.which == 13) {  // Enter key pressed
            e.preventDefault();  // Prevent default Enter behavior (form submission)
            let message = $(this).val();
            if (message.trim() !== '') {
                send(message);
                displayMessage("user", message);
                $(this).val('');  // Clear the input field
            }
        }
    });

    $(document).ready(function() {
        $('#send-button').click(function() {
            let message = $('#chat-input').val();
            if (message.trim() !== '') {
                send(message);
                displayMessage("user", message);
                $('#chat-input').val('');  // Clear the input field
            }
        });
    });
});
