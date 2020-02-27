import React from "react";

const Employee = (props) => {
    const customDate = (dob) => {
        let date = dob;
        var replaced = date.split('T');
        var newDate = replaced[0];
        return(newDate);
    }
    let id = 1
    return (
      <tbody>
        {props.result.map(result => (
        <tr key={id++}>
          <th scope="row"><img alt={result.name.first}src={result.picture.thumbnail}/></th>    
          <td>{result.name.first} {result.name.last}</td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{customDate(result.dob.date)}</td>
        </tr>
        ))}
        
    </tbody>
    )
}

export default Employee;