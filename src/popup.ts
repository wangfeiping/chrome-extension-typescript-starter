import * as moment from 'moment';
import * as $ from 'jquery';

let count = 0;
let color : string;
let backgroundChanged = false;

$(function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    $('#url').text(tabs[0].url);
    $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
  });

  chrome.browserAction.setBadgeText({text: count.toString()});
  $('#countUp').click(()=>{
    chrome.browserAction.setBadgeText({text: (++count).toString()});
  });

  $('#changeBackground').click(()=>{
    if (backgroundChanged) {
      color = '#000000';
    }else{
      color = '#555555';
    }
    chrome.runtime.sendMessage({
      color: color
    },
    function(response) {
      document.body.style.backgroundColor = response;
      backgroundChanged = !backgroundChanged
      console.log("result message:", response);
    });
  });
});
