export const createelement = (
  tagName,
  {
    className = '',
    id = '',
    textContent = '',
    children = [],
    othersAttributes = {},
  }={}
)=>{
  const element = document.createElement(tagName);
  if(className) element.className = className;
  if(id) element.id = id;
  if(textContent) element.textContent = textContent;

  if(children.length > 0){
    children.forEach(child =>{
      element.appendChild(child);
    })
  }
  return element;
}

export const Header = () => {
  return createelement("header", {
    className: "header",
    children: [
      createelement("h1", {
        textContent: "My Application"
      })
    ]
  });
};

export const Body = () => {
  return createelement("main", {
    className: "body",
    children: [
      createelement("h2", {
        textContent: "Welcome"
      }),

      createelement("p", {
        textContent: "This is the body section."
      })
    ]
  });
};