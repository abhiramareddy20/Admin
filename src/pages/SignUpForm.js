import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/firebase';
import '@firebase/firestore'



class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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

        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            alert("Registration Successful");
            fire.firestore().collection('users').add({
              title: this.state.name,
              email: this.state.email
            })
            }).then((u)=>{console.log(u)})
            .catch((error) => {
                alert(error);
                console.log(error);
            })
                console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit}  className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">Existed User</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;