document.getElementById("chatbotToggle").addEventListener("click", function() {
    var chatbotWindow = document.getElementById("chatbotWindow");
    if (chatbotWindow.style.display === "none" || chatbotWindow.style.display === "") {
        chatbotWindow.style.display = "block";
    } else {
        chatbotWindow.style.display = "none";
    }
});

document.getElementById("closeChatbot").addEventListener("click", function() {
    document.getElementById("chatbotWindow").style.display = "none";
});
