import React from "react";
import EmployeeList from "./EmployeeList";
import Header from './Header'
import API from "../utils/API"

class EmployeeContainer extends React.Component  {
  state= {
    searchPerson: "",
    results: []
  }

  peopleGenerator = () => {
      API.search(20)
        .then(res => {
            this.setState({results: res.data.results});
            console.log(this.state.results)
        }).catch(err => console.log(err))
  }

  componentDidMount() {
      this.peopleGenerator();
  }

  handleInputChange = event => {
      const value = event.target.value;
      this.setState({searchPerson:value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
    console.log(this.state.searchPerson)
  };
  
  render() {
    return (
  
    <div>
    <Header search={this.state.searchPerson} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
    
    <EmployeeList results = {this.state.results} />
    </div>
    );
  }
}

export default EmployeeContainer