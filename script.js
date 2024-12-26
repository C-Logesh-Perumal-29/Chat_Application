// Chat Application Script (Handling the Send Button Click Event)
document.getElementById('send-button').addEventListener('click', function (e) {
  e.preventDefault();

  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  const chatWindow = document.getElementById('chat-window');
//
  if (message) {
    // Add sent message
    const sentMessage = document.createElement('div');
    sentMessage.className = 'message sent';
    sentMessage.textContent = message;
    chatWindow.appendChild(sentMessage);

    // Auto-scroll to the bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Clear input field
    messageInput.value = '';

    // Generate bot response after 1 second
    setTimeout(() => {
      const botResponse = getBotResponse(message); // Get response based on input
      const botMessage = document.createElement('div');
      botMessage.className = 'message received';
      botMessage.textContent = botResponse;
      chatWindow.appendChild(botMessage);

      // Auto-scroll to the bottom
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
  }
});

// Function to generate bot responses
function getBotResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  if (userMessage.includes('hello') || userMessage.includes('hi')) {
    return 'Hello there! How can I assist you today?';
  } else if (userMessage.includes('how are you')) {
    return 'I am just a bot, but I am doing great! How about you?';
  } else if (userMessage.includes('what is your name')) {
    return 'I am your friendly chat assistant. You can call me ChatBot!';
  } else if (userMessage.includes('time')) {
    const currentTime = new Date().toLocaleTimeString();
    return `The current time is ${currentTime}.`;
  } else if (userMessage.includes('date')) {
    const currentDate = new Date().toLocaleDateString();
    return `Today's date is ${currentDate}.`;
  } else if (userMessage.includes('weather')) {
    return 'I cannot fetch live weather updates right now, but it might be sunny or cloudy. Check your local weather app for details!';
  } else if (userMessage.includes('bye')) {
    return 'Goodbye! Have a great day!';
  } else if (userMessage.includes('joke')) {
    return 'Why don’t skeletons fight each other? They don’t have the guts!';
  } else if (userMessage.includes('help')) {
    return 'Sure! I can assist with common questions like time, date, jokes, and more. Just ask!';
  } else if (userMessage.includes('thanks') || userMessage.includes('thank you')) {
    return 'You’re welcome! Let me know if there’s anything else I can help with.';
  } else if (userMessage.includes('capabilities') || userMessage.includes('what can you do')) {
    return 'I can chat with you, tell jokes, provide the current date and time, and answer simple questions. Let’s chat!';
  } else if (userMessage.includes('tell me about yourself')) {
    return 'I am a chatbot created to assist you with common tasks and provide a fun and interactive chat experience!';
  } else {
    return 'I am not sure I understand that. Can you try rephrasing?';
  }
}

// Drag-and-drop functionality for input box and button container
const chatInputContainer = document.getElementById('chat-input-container');
let offsetX, offsetY, dragging = false;

// Mouse down event to start drag
chatInputContainer.addEventListener('mousedown', function(e) {
  dragging = true;
  offsetX = e.clientX - chatInputContainer.getBoundingClientRect().left;
  offsetY = e.clientY - chatInputContainer.getBoundingClientRect().top;
  chatInputContainer.style.cursor = 'move';
});

// Mouse move event to drag the element
document.addEventListener('mousemove', function(e) {
  if (dragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      chatInputContainer.style.left = `${x}px`;
      chatInputContainer.style.top = `${y}px`;
  }
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', function() {
  dragging = false;
  chatInputContainer.style.cursor = 'grab';

  // Save position to localStorage
  localStorage.setItem('inputX', chatInputContainer.style.left);
  localStorage.setItem('inputY', chatInputContainer.style.top);
});

// Load saved position from localStorage
window.addEventListener('load', function() {
  const inputX = localStorage.getItem('inputX');
  const inputY = localStorage.getItem('inputY');
   
  if (inputX && inputY) {
      chatInputContainer.style.left = inputX;
      chatInputContainer.style.top = inputY;
  }
});

// Listen for Enter key press to send message
document.getElementById('message-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      document.getElementById('send-button').click();
  }
});


