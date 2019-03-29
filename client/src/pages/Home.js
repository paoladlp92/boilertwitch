import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examples: [],
      title: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getExamples()
      .then(res => {
        this.setState({ examples: res.data, title: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const examples = this.state.examples;

    const listElements = examples.map((element) => {
      return (

            <p>
              {element.title}
            </p>


      );
    });

    if(listElements.length === 0)
      return <h3>No ENTRY HERE</h3>;

    return <ul>{listElements}</ul>;
  }


  render() {
    const examplesList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Magic Spell List</h1>
        {examplesList}
      </div>
    );
  }
}

export default Home;
