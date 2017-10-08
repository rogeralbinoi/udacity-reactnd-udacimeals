import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import calendar from './reducers'
import { createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker'

const store = createStore(calendar)

console.log(store.getState())



ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
