import React from "react";

export default class Character extends React.Component {

    state = { count: 0 }
    
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 })
    }
    
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 })
    }
      
}