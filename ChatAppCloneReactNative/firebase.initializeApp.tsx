import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAetwp18iK_w-MrDA_lI2kjH3BlcR-FZ6M",
  authDomain: "chatappclone-97574.firebaseapp.com",
  projectId: "chatappclone-97574",
  storageBucket: "chatappclone-97574.appspot.com",
  messagingSenderId: "803198776393",
  appId: "1:803198776393:web:52590f8628f69baaadfb98"
};
  firebase.initializeApp(firebaseConfig);
  
  class App extends Component {

    state: { name: string; };

    constructor() {
      super();
      this.state = { name: "Anonimo" };
    }
    render () {
      return <h1>{this.state.name}</h1>

      const nameRef = firebase.database().ref().child("object").child("name");

      nameRef.on("value", (snapshot: { val: () => any; }) => {
        this.setState({
          name: snapshot.val(),
        });
      });

    }
    setState(arg0: { name: any; }) {
      throw new Error('Method not implemented.');
    }
    
  }
  
