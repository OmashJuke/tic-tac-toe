import React,{ Component } from 'react';
import {connect} from 'react-redux';


const style = {
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  cell:{
    width: '30px',
    height: '30px'
  }

};



class ElementBattlefield extends React.Component {
    render() {
        return (
         <button className="ElementBattlefield" style={style.cell} onClick={ () => this.props.onClick()} >
           {this.props.value}
         </button>)
    }
}

export default ElementBattlefield;


