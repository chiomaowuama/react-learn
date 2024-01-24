import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type:'a',
    props:{
        href:"http://google.com",
        target:'_blank'
    },
    children:'click here to visit google'
}
function MyApp(){
    return(
        <div>
            <h1>custom react app</h1>
        </div>
    )
}
const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit google</a>
)
const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google'
)
   
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <App/>

)
