const reactElement={
    type: 'a',
    props: {
        href: "youtube.com",
        target: '_blank',
    },
    children: 'click me to visit youtube'
}
 function renderElement(reactElement, container) {
    let element = document.createElement(reactElement.type)
    element.innerHTML= reactElement.children
    // element.setAttribute('href', reactElement.props.href)
    // element.setAttribute('target', reactElement.props.target)
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        element.setAttribute(prop, reactElement.props[prop])
        
            
        
    }
    container.append(element)
    
}
const mainContainer= document.getElementById("root");
renderElement(reactElement, mainContainer);
