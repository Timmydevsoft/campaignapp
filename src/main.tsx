import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import formStore from './store/dataStore.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store= {formStore}>
      <App />
    </Provider>
   
  </React.StrictMode>,
)
