document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fillButton').addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          return;
        }
        if (!tabs || tabs.length === 0) {
          console.error('No active tabs found.');
          return;
        }
        const tabId = tabs[0].id;
        chrome.scripting.executeScript({    
          target: { tabId: tabId },
          files: ['content.js']
        }, () => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          }
        });
      });
    });
  });
  