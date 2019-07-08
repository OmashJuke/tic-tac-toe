import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Battlefield from './Battlefiled/Battlefield.js'













class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      users: null
    };
  }
  render() {
  return (
  <Battlefield>
  </Battlefield>
  )
  }
  }




/*App.propTypes = {
  target: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  setCount: React.PropTypes.func.isRequired
};*/


export default connect(
  store => ({battletable: store.battletable}),
  dispatch => ({ setCount: (battletable) => dispatch({type:'INC', battletable})})
)(App);