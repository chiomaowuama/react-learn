function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href', reactElement.href);
    domElement.setAttribute('target', reactElement.target);
    domElement.innerHTML = reactElement.children
    Container.appendChild(domElement)
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
   for (const props in reactElement.props) {
    if(props === 'children') continue
    domElement.setAttribute(props, reactElement.props[props])
   }
    container.appendChild(domElement)
    
}
const reactElement = {
    type:'a',
    props:{
        href:"http://google.com",
        target:'_blank'
    },
    children:'click here to visit google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)