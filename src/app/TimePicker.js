import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  PickerItem,
} from 'react-native';

export default class TimePicker extends Component {
  constructor() {
    super()
    this.state = {
      minDisp: '5',
      secDisp: '00',
    }
  }
  
  render() {
    var minutes = [...Array(61).keys()];
    var seconds = [...Array(60).keys()];

    return (
      <View>
        <View style={styles.time}>
          <Picker
            style={styles.input}
            selectedValue={this.state.minDisp}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({minDisp: itemValue})
              this.props.updateMin(itemValue)
              }}>
            {minutes.map(minute => {
              minute = minute.toString();
              return <Picker.Item key={minute} label={minute} value={minute} />
            })}
            
          </Picker>
          <Picker
            style={styles.input}
            selectedValue={this.state.secDisp}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({secDisp: itemValue})
              this.props.updateSec(itemValue)
              }}>            
              {seconds.map(second => {
              second = second.toString();
              if(Number(second) < 10) {
                second = '0' + second;
              }
              return <Picker.Item key={second} label={second} value={second} />
            })}
          </Picker>
        </View>
        <View style={styles.label}>
          <Text>Minutes</Text>
          <Text>Seconds</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  time: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: .5, 
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
