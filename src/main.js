import { cle, RenderApp } from "https://cdn.jsdelivr.net/npm/cle.js@0.15.0/lib/caged-le.js"
import { Div } from "https://cdn.jsdelivr.net/npm/cle.js@0.15.0/extra/smart-alias.js"

RenderApp(document.body, cle.root(
{
  rootProp: 123,
},

  {h1: "Hello World! From Cle"},
  
  Div({}, "The count: is", $ => $.rootProp),

  html`
    <div class="bg-red sm:hidden">
      Hello
    </div>
  `
))
