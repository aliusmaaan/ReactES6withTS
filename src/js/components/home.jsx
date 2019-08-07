import React, { Component } from "react";
import Input from "./Input.jsx";
import TScomp from "../../ts/components/tsComponent.tsx";
import '../form.scss';
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "usman"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ seo_title: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <React.Fragment>
        
        <form id="article-form" className='col-md-5'>
        I'm written in<h1>ES6</h1>
        <Input
          text=''
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        
        Write in ES6 view in TYPESCRIPT...
        <div>

        
        </div>
      </form>
      <TScomp name={seo_title}  />
      </React.Fragment>
      
    );
  }
}
export default FormContainer;
