import React from 'react';

//component imports (dependencies)
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

//state lives in our App
class App extends React.Component {

constructor() {
  //cannot call keyword "this" until react component is initialized
  super();

  //these lines allow us to utilize keyword "this" throughout the corresponding methods within this class
    //we're binding the method to our component
  this.addFish = this.addFish.bind(this);
  this.loadSamples = this.loadSamples.bind(this);

  //getinitialstate ( <<--- react create class version but we do it in es6 version)
  this.state = {
    fishes: {},
    order: {}
  };

}

addFish(fish) {
  //update our state
  //technically you can do this: this.state.fishes.fish1 = fish;     but ew
  //... is a spread (an es6 thing), it's the newer version of apply(), it passes each argument in the array as individuals
    //it expands the array to create individual values for the function
    //takes a copy of your existing state and puts it into const fishes
  //this.state.fishes is our existing fishes state
  const fishes = {...this.state.fishes};

  //add in our new fish
  const timestamp = Date.now(); //this is going to be our key
  fishes[`fish-${timestamp}`] = fish;

  console.log("fish", fishes);

  //set state
  //need to explicitly tell react which state you would like to update
  //telling react { the fishes state has changed: here's the new updated state }
  //react will then re-render the html for you
  //react's equivalent to $timeout or $apply
  //this.state = whatever; <<---- bad practice, you should never mutate this.state,
    //any changes you've made will likely be reverted when this.setState() is called
  //long version ---> this.setState({ fishes: fishes });
  this.setState({ fishes }); //because the property is the same as the new state value, you can just say "fishes"
}

//loads sample data into our state
loadSamples() {
  this.setState({
    fishes: sampleFishes
  });
}

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {/* react's version of ng-repeat will happen here */}
            {/* this is how we're going to loop through our fish objects with javascript (jsx doesn't have any built in logic)
                going to grab the keys of each object in fishes
                and for each fish found, we're going to render the key into our Fish component (the li element)
            */}
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
