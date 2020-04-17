import React, { Component } from 'react';

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            role: '',
            descreption: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    // addUser = e => {
    //     e.preventDefault();
    //     const db = firebase.firestore();
    //     db.settings({
    //       timestampsInSnapshots: true
    //     });
    //     const userRef = db.collection('users').add({
    //       fullname: this.state.name,
    //       email: this.state.email
          
    //     });  
    //     this.setState({
    //       fullname: '',
    //       email: ''
    //     });
    //   };

    handleSubmit(e) {
        e.preventDefault();
        alert(e);
        console.log(e);

    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Add role</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter role" name="name" value={this.state.role} onChange={this.handleChange} />
              </div>
              
              <div className="FormField"> 
                <label className="FormField__Label" htmlFor="email">Descrepton</label>
                <input type="text" id="email" className="FormField__Input" placeholder="Enter Descreption" name="email" value={this.state.descreption} onChange={this.handleChange} />
              </div>
              

              <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button>
              </div>
            </form>
          </div>
        );
    }
}

export default HomePage;