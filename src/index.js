require('./style.css');

var element = document.getElementById('root');
element.innerHTML = 'Hello Webpack';

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Hot Module Dispose...'));
}
