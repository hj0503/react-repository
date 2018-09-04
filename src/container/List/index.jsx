import { PickerView } from 'antd-mobile';
import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'; 

let seasons = ss()

function ss() {
  const left = [];
  const right = [];
  for(let i = 1; i < new Date().getMonth() + 1; i++) {
    const obj = {}
    obj.label = i;
    obj.value = i;
    left.push(obj)
  }
  return [[...left]]
}
export default class PickerViewExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  onChange(value){
    console.log(value);
    const arr = []
    for(let i = parseInt(value[0]); i <= 8; i++) {
      const obj = {}
      obj.label = i;
      obj.value = i;
      arr.push(obj)
    }
    seasons[1] = arr
    this.setState({
      value
    });
  }
  onScrollChange(value){
    console.log(value);
  }
  render() {
    return (
      <PickerView
        onChange={this.onChange.bind(this)}
        onScrollChange={this.onScrollChange}
        value={this.state.value}
        data={seasons}
        cascade={false}
      />
    );
  }
}