require('./style.css');

var render = function() {
  var element = document.getElementById('root');
  element.innerHTML = 'Hello Webpack';
}


if (__DEV__ && module.hot) {
    render();
    module.hot.accept();
    module.hot.dispose(function() {
    console.log('Hot Module Dispose...')
  });
} else {
  render();
}
