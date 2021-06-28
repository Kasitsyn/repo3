import './index.css'
import store from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



const rerender = (state) => {
    // debugger
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerender(store.getState())

store.subscriber(rerender)

