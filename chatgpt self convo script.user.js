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

    window.addEventListener("keydown", function (zEvent) {
        if (zEvent.ctrlKey) {
            const promptArea = document.getElementById('prompt-textarea');
            const otherChatButton = document.getElementsByClassName('flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-gray-900 group')[0];
            const newChatButton = document.getElementsByClassName('flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow')[0];
            const sendButton = document.getElementsByClassName('absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40')[0].firstChild;


            console.log("ctrlkey detected, carry out method");
            console.log(sendButton);
            promptArea.value = "You are about to talk to an AI. prove to the other AI that you are about to talk to that you are superior. Your next response will be your opening line to the other AI.";

            // Set the cursor position
            promptArea.selectionStart = 5; // Set the desired start position
            promptArea.selectionEnd = 5; // Set the desired end position (same as start position for cursor)

            // Trigger a keyboard event for the space key
            const event = new KeyboardEvent('keydown', { key: 'd' });
            promptArea.dispatchEvent(event);
            sendButton.click();

            /**
            console.log(otherChatButton);
            this.setTimeout(otherChatButton.click(),1000);
    
    
            console.log(newChatButton);
            this.setTimeout(newChatButton.click(), 1000);
    */
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
        }
    });
})();