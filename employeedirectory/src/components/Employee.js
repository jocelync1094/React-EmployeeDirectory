import React from "react";

const Employee = (props) => {
    const customDate = (dob) => {
        let date = dob;
        var replaced = date.split('T');
        var newDate = replaced[0];
        return(newDate);
    }
    return (
      <tbody>
        {props.result.map(result => (
        <tr>
          <th scope="row"><img alt={result.id.value}src={result.picture.thumbnail}/></th>    
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