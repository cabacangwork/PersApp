import { Component } from'react'; 
import React from 'react';
import './../public/styles/styles.scss'


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {
          id: '1',
          title: 'First',
          totalAmount: 19038.00,
        },
        {
          id: '2',
          title: 'Second',
          totalAmount: 12321.00
        },
        {
          id: '3',
          title: 'Third',
          totalAmount: 1224.00
        }
      ]
    }
  }

  dataList = e => {
    return (
      this.state.data.map((item) =>
        <div className="item-list" key={item.id}>
          <p>{item.title}</p>
          <p>₱{item.totalAmount}.00</p>
        </div>    
      )
    );
  }

  render() {
    
    return (
      <div className="content-wrapper">
        <div className="header-title">
          <h3>List Name</h3>
          <h3>Balance</h3>
        </div>
        {this.dataList()}

        <form>
          <input type="number"></input>
        </form>
      </div>
    )
  }

}
  
export default App;