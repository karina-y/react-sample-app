import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {/* the way you pass things down is via props*/ }
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples} loadSamples={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
