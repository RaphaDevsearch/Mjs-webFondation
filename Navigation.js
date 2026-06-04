import {CreateElement} from './Utils.js'

export const Navigation = (array_of_nav) => {
  
  return CreateElement('nav',{
    className: 'navigation',
    children : [
      CreateElement('ul',{
        children: array_of_nav.map(link => CreateElement('li',{
          textContent: link
        }))
      })
    ]
  })
}