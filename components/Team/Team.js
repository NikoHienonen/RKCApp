import React, { Component, Fragment } from 'react'
import { 
  View, 
  StyleSheet, 
} from 'react-native';

import Timeout from './Buttons/Timeout';
import AddPoint from './Buttons/AddPoint';
import DeletePoint from './Buttons/DeletePoint';
import Serve from './Buttons/Serve';

export default class Team extends Component {
  constructor(props) {
    super(props);
  }
  renderServe = () => {
    if(this.props.name === 'team1') {
      return this.props.hasServe
      ? <Serve name={this.props.name} hasServe={this.props.hasServe}
      toggleServe={this.props.toggleServe}/>
      : <View style={styles.servePlaceholder}></View>;
    } else {
      return !this.props.hasServe
      ? <Serve name={this.props.name} hasServe={this.props.hasServe}
      toggleServe={this.props.toggleServe}/>
      : <View style={styles.servePlaceholder}></View>;
    } 
  }
  renderTimeOuts = timeOuts => {
    console.log(typeof timeOuts);
    if(Number(timeOuts) === 2 ) {
      return (
        <Fragment>
          <Timeout/> 
          <Timeout/>
        </Fragment>
        );
    } else if (Number(timeOuts) === 1) {
      return <Timeout />;
    } else {
      return null;
    }
  }
  renderMirror = (points, timeOuts) => {
    return this.props.name === 'team1'
    ? (
      <View style={styles.row}>
        <AddPoint points={points} name={this.props.name} 
        AddPoint={this.props.AddPoint}/>
        <View style={[styles.column, styles.buttonColumn]}>
          {this.renderServe()}
          {this.renderTimeOuts(timeOuts)}
          <DeletePoint name={this.props.name} 
        DeletePoint={this.props.DeletePoint}/>
        </View>
      </View>
    )
    :(
      <View style={[styles.row, styles.mLeft]}>
        <View style={[styles.column, styles.buttonColumn]}>
          {this.renderServe()}
          {this.renderTimeOuts(timeOuts)}
          <DeletePoint name={this.props.name} 
        DeletePoint={this.props.DeletePoint}/>
        </View>
        <AddPoint points={points} name={this.props.name} 
        AddPoint={this.props.AddPoint}/>
      </View>
    )
  } 
  render() {
    const { points, timeOuts } = this.props;
    return (
      <View style={styles.container}>
        {this.renderMirror(points, timeOuts)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: '3%'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  mLeft: {
    marginLeft: '5%'
  },
  buttonColumn: {
    justifyContent: 'space-between',
    marginHorizontal: "5%",
  },
  servePlaceholder: {
    height: "23%",
    width: "23%"
  }
});