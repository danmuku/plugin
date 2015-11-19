// Load prefs about whether danmaco  is on. Structure is:
//  { httpNowhere: true/false }

var danmacoOn = false;
chrome.storage.sync.get({danmacoOn: false}, function(item) {
  danmacoOn = item.danmacoOn;
  setIconColor();
});

chrome.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName === 'sync') {
    for (var key in changes) {
      if (key === 'danmacoOn') {
        danmacoOn = changes[key].newValue;
        setIconColor();
      }
    }
  }
});


/**
 * Set the icon color correctly
 * Depending on danmakco it should be red/default
 */
var setIconColor = function() {
  var newIconPath = danmacoOn ? './close.png' : './open.png';
  chrome.browserAction.setIcon({
    path: newIconPath
  });
};
