import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import router from './router';

$(document).on('ready', function(){
  $.ajaxSetup({
    headers: {
      "X-CSRF-TOKEN": $("meta[name='csrf-token']").attr("content")
    }
  });

  ReactDOM.render(router, document.getElementById('react-wrapper'));
});
