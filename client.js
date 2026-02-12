/* global TrelloPowerUp */

var ICON_URL = 'https://cdn-icons-png.flaticon.com/512/3176/3176369.png';

TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: ICON_URL,
        light: ICON_URL
      },
      text: 'New Parts Order',
      callback: function(t) {
        return t.popup({
          title: 'Create Parts Order Card',
          url: './create-card.html',
          height: 550
        });
      }
    }];
  }
});
