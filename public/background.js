// Log when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log("YouTube Metronome Tool installed or updated.");
  });
  
  // Listen for messages from the popup or content scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Received message:", message);
    // Here, you can process the message and perform various tasks if needed
    sendResponse({ received: true });
  });
  