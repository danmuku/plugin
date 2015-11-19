	
/**
 * Fill in content into the popup on load
 */
document.addEventListener("DOMContentLoaded", function () {
  // Set up toggle checkbox for danmaco mode
  getOption_('danmacoOn', false, function(item) {
    var danmacoOnCheckbox = document.getElementById('danmaco-checkbox');
    danmacoOnCheckbox.addEventListener('click', toggleDanmaco, false);
    var danmacoEnabled = item.danmacoOn;
    if (danmacoEnabled) {
      danmacoOnCheckbox.setAttribute('checked', '');
    }
  });

});




function toggleDanmaco() {
  getOption_('danmacoOn', false, function(item) {
    setOption_('danmacoOn', !item.danmacoOn);
  });
}

function getOption_(opt, defaultOpt, callback) {
  var details = {};
  details[opt] = defaultOpt;
  return chrome.storage.sync.get(details, callback);
}

function setOption_(opt, value) {
  var details = {};
  details[opt] = value;
  return chrome.storage.sync.set(details);
}