import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        { id: 101, name: 'Tea', price: 100 },
        { id: 102, name: 'Coffee', price: 200 },
        { id: 103, name: 'Milk', price: 300 }
      ],
      Cartitems: [
        { id: 101, count: 0 },
        { id: 102, count: 0 },
        { id: 103, count: 0 }
      ],
      TotalitemCount: 0
    };
  }
  // itemCount = () => {
  //   // console.log(this.state.Cartitems);
  //   // var totalCount = 0;
  //   // for (var i = 0; i <= this.state.Cartitems.length - 1; i++) {
  //   //   totalCount = totalCount + this.state.Cartitems[i].count;
  //   // }
  //   // this.state.TotalitemCount.setState({ TotalitemCount: totalCount });
  // };

  render() {
    return (
      <div>
        <h3>hello</h3>
      </div>
    );
  }
}

ReactDOM.render(<Product />, document.getElementById('root'));
