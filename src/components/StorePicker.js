import React from 'react';
import { getFunName } from '../helpers';

//when a component gets rendered to the page it'll ask StorePicker what html should i display
//best practice is to have one file per component
class StorePicker extends React.Component {

  // //will allow us to bind keyword "this" from non-render methods to its containing component
  // constructor() {
  //   //runs React.Component first then allows us to extend our StorePicker class
  //   super();
  //   //looks for the goToStore method, sets itself to its own self, then binds it to this (StorePicker component)
  //   this.goToStore = this.goToStore.bind(this);
  // }


  //by default non-render methods are not bound to the class they're in
  goToStore(event) {
    event.preventDefault();
    console.log("url changed");

    //first grab the text from the box
    const storeId = this.storeInput.value;

    console.log(`storeId is ${storeId}`);

    //second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  //a function
  //by default render methods are bound to the class they're in
  render() {
    //short version of creating an element (jsx)
    return (
      //can only ever return one parent element
      //js style comments go OUTSIDE the react html
      //can attach an onclick or onsubmit handler directly to the form
      //keyword "this" references it's parent component/class
      //onSubmit={this.goToStore.bind(this)} is a catchall
      //onSubmit={(e) => this.goToStore(e)} looks cleaner but creates an individual function for each component
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* this is a jsx comment, it always goes within the react html */ }
        <h2>Please Enter a Store</h2>

        { /* this is an es6 arrow function insite the ref prop/attr vvvvv, when this input is rendered onto the page,
            it's going to put a reference of this input on the class itself */ }
        <input type="text"
               required placeholder="Store Name"
               defaultValue={getFunName()}
               ref={(input) => { this.storeInput = input }} />
        <button type="submit" >Visit Store</button>
      </form>
    )

    //the long way of creating an element
    //return React.createElement('p', {className: 'Testing'}, 'long way');
  }
}

//surfacing our router
StorePicker.contextTypes = {
  //tells react that the StorePicker component expects something called a router
  router: React.PropTypes.object
}

export default StorePicker;
