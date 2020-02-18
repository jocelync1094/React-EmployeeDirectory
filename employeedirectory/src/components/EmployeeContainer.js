import React from "react";
// import Search from "./Search";
import EmployeeList from "./EmployeeList"
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
  

  render() {
    return (
      <EmployeeList results = {this.state.results} />
    );
  }
}

export default EmployeeContainer