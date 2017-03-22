import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';



export default function configureStore(preloadedState) {
    const epicMiddleware = createEpicMiddleware(rootEpic);
    if (module.hot) {
        module.hot.accept('./epics', () => {
            const nextEpic = require('./epics').default;
            epicMiddleware.replaceReducer
        })
    }
    const store =  __DEV__?createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, epicMiddleware))):
                   createStore(rootReducer, preloadedState, applyMiddleware(thunk, epicMiddleware));
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer)
        });
    }
    return store;
}






