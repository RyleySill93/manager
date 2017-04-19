import React from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import axios from 'axios';
// import unirest from 'unirest';

const summarizeText = (rawText) => {
  let length = 2;
  console.log(rawText);
  //use figaro to hide api key
  // axios.post('http://api.smmry.com/?SM_API_KEY=2CA94C7AE9&SM_LENGTH=3&SM_URL=https://en.wikipedia.org/wiki/Computer')
  //      .then(res => console.log('axios res 1', res));

  axios({
    method: 'post',
    url: 'http://api.smmry.com/',
    params: {
     "SM_API_KEY": "2CA94C7AE9",
     "SM_LENGTH": 1,
     "SM_URL": "https://en.wikipedia.org/wiki/Computer"
   }}).then(res => console.log('axios res 2', res));

  // axios({
  //    method: 'post',
  //    url: 'http://api.smmry.com/',
  //    params: {
  //     "SM_API_KEY": "2CA94C7AE9",
  //     "SM_LENGTH": 1
  //   },
  //   headers: { Expect: '' }
  //   data: {
  //     sm_api_input: 'A computer is a device that can be instructed to carry out an arbitrary set of arithmetic or logical operations automatically. The ability of computers to follow a sequence of operations, called a program, make computers very applicable to a wide range of tasks. Such computers are used as control systems for a very wide variety of industrial and consumer devices. This includes simple special purpose devices like microwave ovens and remote controls, factory devices such as industrial robots and computer assisted design, but also in general purpose devices.'
  //   }}).then(res => console.log('axios res 3', res));
  //
  // axios({
  //    method: 'post',
  //    url: 'http://api.smmry.com/',
  //    params: {
  //     "SM_API_KEY": "2CA94C7AE9",
  //     "SM_LENGTH": 1
  //   }    data: {
  //     sm_api_input: 'A computer is a device that can be instructed to carry out an arbitrary set of arithmetic or logical operations automatically. The ability of computers to follow a sequence of operations, called a program, make computers very applicable to a wide range of tasks. Such computers are used as control systems for a very wide variety of industrial and consumer devices. This includes simple special purpose devices like microwave ovens and remote controls, factory devices such as industrial robots and computer assisted design, but also in general purpose devices.'
  //   }}).then(res => console.log('axios res 3', res));

  // unirest.post('http://api.smmry.com/').query({
  //         SM_API_KEY: "2CA94C7AE9",
  //         SM_LENGTH: 3
  //     }).headers({
  //         Expect: ''
  //     });

  // fetch('http://api.smmry.com/', {
  //      method: 'POST',
  //      headers: {
  //        'Accept': 'text/plain',
  //        'Content-Type': 'text/plain',
  //      },
  //      body: {
  //        "SM_API_KEY": '2CA94C7AE9',
  //        "SM_URL": 'https://en.wikipedia.org/wiki/Computer',
  //        "SM_LENGTH": '3'
  //      }
  //    }).then(res => console.log('fetch res', res));

 // fetch('http://api.smmry.com/?SM_API_KEY=2CA94C7AE9&SM_LENGTH=3&SM_URL=https://en.wikipedia.org/wiki/Computer', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => console.log("smmry", res.sm_api_content));

};

class EmployeeCreate extends React.Component {

  onButtonPress () {
    summarizeText('hi');
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
          />
        </CardSection>

        <CardSection style={{flexDiection: 'column'}}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            label
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
            >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create!
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
