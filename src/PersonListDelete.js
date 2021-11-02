import React from 'react';
import axios from 'axios';

export default class PersonListDelete extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }


  // handleSubmit = event => {
  //   event.preventDefault();

  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  // With async / await way
  handleSubmit = async event => {
    event.preventDefault();
  
    //
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`);
  
    console.log(response);
    console.log(response.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}