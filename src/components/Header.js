import React from 'react';


//stateless functional component (best to use when your component isn't doing anything exciting)
const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      {/* this: refers to the component,
          props: refers to an object that contains all the attributes of that component's tag in App.js */}
      <h3 className="tagline">
        {/* keyword "this" isn't necessary here because we're getting props passed in directly */}
        <span>{props.tagline}</span>
      </h3>
    </header>
  )
}

/* const Header could also be written these ways, but that's the best practice
function Header() {

}

var Header = function() {

}
*/



export default Header;
