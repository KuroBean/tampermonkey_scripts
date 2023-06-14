// ==UserScript==
// @name         chatgpt self convo script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chat.openai.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    //'use strict';
    
    window.addEventListener('click', function () {
        console.log("click detected, carry out method");
        
        const otherChatButton = document.querySelector('[data-projection-id="3"]');
        console.log(otherChatButton);
        this.setTimeout(otherChatButton.firstChild.click());
        //setTimeout(otherChatButton.click(), 1000);
        //var newChatButton = document.getElementsByClassName('mb-1 flex flex-row gap-2')[0];
        //setTimeout(newChatButton.click(), 1000);

        //ONLY HAPPEN ONCE LIKE THIS, RIGGER WORKS BC END WITH RELOAD WHICH IS THE TRIGGER
        /**
        // Click the button to make a new chat
        document.getElementById('new-chat-button').click();

        // Wait for the question text box to appear and write the question
        setTimeout(() => {
            document.getElementById('question-textbox').value = 'This is a question';

            // Click the send button
            document.getElementById('send-button').click();

            // Wait for the newest response to finish printing out
            setTimeout(() => {
                // Save the response in a variable
                const response = document.getElementById('newest-response').innerText;

                // Select the most recent preexisting chat
                const preexistingChat = document.getElementsByClassName('preexisting-chat')[0];

                // Write the response in that chat
                preexistingChat.value = response;

                // Click send in the preexisting chat
                document.getElementById('preexisting-chat-send-button').click();
            }, 3000); // Adjust the delay (in milliseconds) based on how long it takes for the response to appear
        }, 2000); // Adjust the delay (in milliseconds) based on how long it takes for the question text box to appear
    */
    });
})();