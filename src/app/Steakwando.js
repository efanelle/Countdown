import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  PickerItem,
  TouchableHighlight
} from 'react-native';
import TimePicker from './TimePicker.js';

export default class Steakwando extends Component {
  constructor() {
    super()
    this.state = {
      timeUp: '',
      minutes: '5',
      seconds: '00',
      label: 'Start',
      minDisp:'5',
      secDisp:'00',
    }
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.updateMin = this.updateMin.bind(this);
    this.updateSec = this.updateSec.bind(this);
    this.start = false;
    this.run;
  }
  startTimer() {
    this.start = !this.start;
    while (this.start) {
      this.setState({'label': 'Stop'})
      this.run = setInterval(() => {
        if(this.state.seconds === '00' && this.state.minutes === '0') {
          this.start = false;
          clearInterval(this.run);
          this.setState({'label': 'Start', 'timeUp': "TIME'S UP!"})
        } else {
          if(this.state.seconds === '00' && this.state.minutes >= 1) {
            this.setState({'minutes': Number(this.state.minutes)-1,'seconds': '60'})
          }
          var seconds = (Number(this.state.seconds)-1).toString();
          if(Number(seconds) < 10) {
            seconds = '0' + seconds;
          }
          this.setState({'seconds': (seconds)})
        }
      }, 1000)
      return this.run;
    } 
    clearInterval(this.run);
    this.setState({'label': 'Start'});
  }

  updateMin(minutes) {
    this.setState({'minutes': minutes, 'minDisp': minutes})
  }

  updateSec(seconds) {
    this.setState({'seconds': seconds, 'secDisp': seconds})
  }

  resetTimer() {
    clearInterval(this.run);
    this.start = false;
    this.setState({'minutes': this.state.minDisp, 'seconds': this.state.secDisp, 'label': 'Start', 'timeUp':''})
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.display}>
          <Text style={styles.text}>{this.state.timeUp}</Text>
          <Text style={styles.text}>{`${this.state.minutes}:${this.state.seconds}`}</Text>
        </View>

        <TimePicker updateMin={this.updateMin} updateSec={this.updateSec}/>
        
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.btn} onPress={this.startTimer}>
            <Text>{this.state.label}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={this.resetTimer}>
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#1FBFBC',
    backgroundColor: 'peru'
  },
  input: {
    flex: .5, 
  },
  display: {
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom: 10,
  },
  btn: {
    borderWidth:1,
    borderRadius: 5,
    padding: 10,
  }
});

