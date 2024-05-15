import { cle, RenderApp, html } from "https://cdn.jsdelivr.net/npm/cle.js@0.15.0/lib/caged-le.js"
import { Div, Button } from "https://cdn.jsdelivr.net/npm/cle.js@0.15.0/extra/smart-alias.js"


const MyButtonComponent = ({ label, onclick }) => Button({

  '@input': { label },
  
  handle: { onclick },

  class: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'

}, $ => $.label)


RenderApp(document.body, cle.root(
{
  rootProp: 123,
},

  {h1: "Hello World! From Cle"},
  
  Div({}, "The count: is: ", $ => $.rootProp),

  html`
    <div class="text-blue-500">
      Hello, in tailwind style
    </div>
  `,

  MyButtonComponent({ 
    label: "Click Me", 
    onclick: $ => {
      console.log('clicked');
      $.rootProp = 0
    }
  }),

))
