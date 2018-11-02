import React, { Component } from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
// import Post from './components/Post';

class App extends Component {
      state = { 
        articles : [],
          heading: "",
          description: "",
          post: "",
          claps: null,
          bookmark: null
    }

  handleInfoSubmit = e => {
    e.preventDefault();
    let { heading , description , post , articles} = this.state;
    let posts = {
      heading : heading,
      description : description,
      post: post 
    }
  this.setState({
    articles : [...articles, posts]
  })
  }
  
  handleHeading = e => {
    this.setState({
      heading : e.target.value
    })
  }
  

  handleDescription = e => {
    this.setState({
      description : e.target.value
    })
  }


  handlePost = e => {
    this.setState({
      post : e.target.value
    })
  }


  handleSubmit = e => {
     e.preventDefault()
 
  }

  render() { 
    let { articles  } = this.state;                     
    return (
      <BrowserRouter>
      <React.Fragment>
      {/* <Route path="/" component={Post} exact/> */}
      <div className="App" >
      <form onSubmit={this.handleSubmit}>
        <input className="heading" onChange={this.handleHeading}></input>
        <input className="description" onChange={this.handleDescription}></input>
        <textarea className="post" onChange={this.handlePost}></textarea> 
        <input type="button" value="create new post" onClick={this.handleInfoSubmit}></input> 
      </form>  
      </div>
      {
        articles.length > 0 ? 
        articles.map(obj => <div>
           <h1>{obj.heading}</h1> 
           <h2>{obj.description}</h2> 
           <p>{obj.post}</p> 
           </div>) 
           : <div></div>
      }
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
