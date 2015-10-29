`gulp watch`

AJAX
----
Superagent:  
https://www.npmjs.com/package/superagent
```
componentDidMount: function() {
  var request = require('superagent');
  request
    .get('/')
    .end(function(err, res) {
    
    }
  });
},
```