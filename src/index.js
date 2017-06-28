import React from 'react';
import { render } from 'react-dom'; //imports just the render method from the react-dom package
import { BrowserRouter, Match, Miss } from 'react-router';  //while this isn't actually part of react, react-router is the industry standard for routing

import './css/style.css';

//component imports
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


//component renders

//stateless functional component
const Root = () => {
  return (
    //because BrowserRouter is the parent of everything in our application, it's possible to surface react-router at any component down through it
    //context allows you to set things at the root level so all child components have access to it
      //however it's not best practice to do this with everything because it fights the idea of keeping shit modular
      //also it's just ew
      //it's best to use state in individual components
    <BrowserRouter>
      { /*Matches can be anywhere in my app, they cannot be a direct child of BrowserRouter, need to be wrapped in something like a div
          exactly pattern: if my url route matches this exactly, in this case i'm at the root of my app
          if exactly pattern: display the component StorePicker */ }
      <div>
        {/* numbers, booleans, and variables need to be wrapped in curly brackets in props */}
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

//component to render has to match the class, case included
      //(component to render, what dom element it should render out to)
//with our routing above, this will indirectly render the appropriate components according to our route
render(<Root/>, document.querySelector('#main'));

//if i'm on a store page, show me the app component


//if i'm on the store page, show me the StorePicker component


//if i'm in a 404 url, show me a not found component
