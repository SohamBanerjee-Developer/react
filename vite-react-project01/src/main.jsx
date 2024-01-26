import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Experiment(){
  return(
    <div>
      <h1>experimenting with react !</h1>
    </div>
  )
}
const purpose= ' to watch vedios'
const anotherElement=(
  <a href="google.com" target="_blank">click to visit google</a>
)
const reactElement= React.createElement(// reacts way of creating object
  'a',
  {href : 'youtube.com', target:'_blank'},
  'click to visit youtube',
  purpose
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    
   <App/>
 
)
