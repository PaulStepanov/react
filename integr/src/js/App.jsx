import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import { hashHistory, browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store';
import Root from './Root';
import './../scss/main.scss'

const store = createStore();
var history = __DEV__?syncHistoryWithStore(hashHistory, store):syncHistoryWithStore(browserHistory, store);
window.currentHistory = history;
window.validators = [];

let div = document.createElement("div");
div.id = "root";
document.body.appendChild(div);


const render = (Component) => {
    ReactDOM.render(
        <AppContainer >
            <Provider store={store} >
                 <Component history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

if (__DEV__) {
    window.Utils = Utils;
}




render(Root);



if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewApp = require('./Root').default
    render(NewApp)
  });
  module.hot.accept('./Actions', () => {
      const newActions = require('./Actions');
      Actions = newActions;
  })

}
