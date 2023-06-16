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

    var responseText = '';

    window.addEventListener("keydown", function (zEvent) {
        if (zEvent.ctrlKey) {
            const promptArea = document.getElementById('prompt-textarea');
            const otherChatButton = document.getElementsByClassName('flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-gray-900 group')[0];
            const newChatButton = document.getElementsByClassName('flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow')[0];
            //input initializing text
            console.log("ctrlkey detected, carry out method");
            console.log(promptArea);
            promptArea.value = "You are about to talk to an AI. prove to the other AI that you are about to talk to that you are superior. Your next response will be your opening line to the other AI.";

        }
        else if (zEvent.shiftKey) {
            responseText = "";
            //copy latest response
            var responses = document.getElementsByClassName('markdown prose w-full break-words dark:prose-invert light');
            var latestResponse = responses[responses.length - 1];
            //assumes 1 paragraph in response

            // Select all <p> elements within the latestResponse <div>
            const paragraphs = latestResponse.querySelectorAll('p');

            // Initialize an empty string variable to store the text

            // Loop through each paragraph and append its text content to responseText
            paragraphs.forEach(paragraph => {
                responseText += paragraph.textContent + ' ';
            });

            console.log(responseText);

        }
        else if (zEvent.altKey) {
            //paste response from other chat
            //promptArea.value = responseText;
        }
    });

})();