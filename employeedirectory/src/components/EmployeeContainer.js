import React from "react";
import EmployeeList from "./EmployeeList";
import Header from './Header'
import API from "../utils/API"

class EmployeeContainer extends React.Component  {
  state= {
    searchPerson: "",
    allResults: [],
    searchedResults: []
  }

  peopleGenerator = () => {
      API.search(20)
        .then(res => {
            this.setState({allResults: res.data.results});
            console.log(this.state.allResults)
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
    let peopleMatched=this.state.allResults
    peopleMatched = peopleMatched.filter(result => (result.name.first.toLowerCase()===this.state.searchPerson.toLowerCase() || result.name.last.toLowerCase()===this.state.searchPerson.toLowerCase()))
    this.setState({searchedResults: peopleMatched})
    console.log(peopleMatched)
    console.log(this.state.searchPerson)
  };
  
  render() {
    return (
  
    <div>
    <Header search={this.state.searchPerson} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
    {
      this.state.searchPerson.length
      ? <EmployeeList results={this.state.searchedResults} />
      : <EmployeeList results={this.state.allResults} />
    }
    </div>
    );
  }
}

export default EmployeeContainer