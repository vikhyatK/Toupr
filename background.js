var rule1 = {
      conditions: [
        // When a page contains a textbox tag...
        new chrome.declarativeContent.PageStateMatcher({
          css: ["input[type=text]"]
        }),
		// When a page contains a textarea tag...
		new chrome.declarativeContent.PageStateMatcher({
          css: ["textarea"]
        })
      ],
      // ... show the page action.
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    };

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule1]);
  });
});