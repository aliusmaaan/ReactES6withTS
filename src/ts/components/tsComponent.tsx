import React from 'react';
import Name from './name';
import Input from '../../js/components/Input';
// import logo from './logo.svg';
 import './tsComponent.css';

interface appProps {
  name: string;
}
interface OwnState {
  lName: string;
  getname: Function;
}
export class App extends React.Component<appProps, {}> implements OwnState{

  state = {lName: ''}

  getname = function(){

  }
  lName = "varun"

  componentDidMount(){
    this.setState({lName: 'sirName'})
  }
  updateLastName = ({target:{value}}: {target:{value: string}}) =>{
    this.setState({lName: value})
  }
  render(){
    const { name } = this.props;
    const { lName } = this.state;
    const fullName = `${name || 'Name'} ${lName}`
    return (
      <div className="App col-md-5">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          I'm made on<h1>Typescript</h1>
          <p>
            Edit <code>src/tscomponent.tsx</code> and
          </p>
          Learn from 
          <p className="App-link">
            <Name name={fullName} />
          </p>
          <Input
          text='Update Sirname here'
          label="lName"
          type="text"
          id="lName"
          value={lName}
          handleChange={this.updateLastName}
        />
          {/* <input onChange={this.updateLastName} value={lName} placeholder='change sirName' /> */}
          <span> or suffer yourself</span>
        </header>
      </div>
    );
  }
}
export default App;