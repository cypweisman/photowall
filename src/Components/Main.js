import React, {Component} from 'react';
import List from './List'
import Title from './Title'

class Main extends Component {
  render() {
    return <div>
      <Title title={"todos"}/>
      <List tasks = {["mow lawn", "walk dog"]}/>
      <List tasks = {["hose driveway", "finish laundry"]}/>
    </div>
  }
}

export default Main
