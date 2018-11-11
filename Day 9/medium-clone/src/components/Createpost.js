import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from './Post.js';

class Createpost extends React.Component {
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
      
      <React.Fragment>
      {/* <Route path="/" component={Post} exact/> */}
      <div className="createpost" >
      <form onSubmit={this.handleSubmit}>
        <input className="heading" onChange={this.handleHeading}></input>
        <input className="description" onChange={this.handleDescription}></input>
        <textarea className="post" onChange={this.handlePost}></textarea> 
        <input type="button" value="create new post" onClick={this.handleInfoSubmit}></input> 
      </form>  
      </div>
      {
        articles.length > 0 ? articles.map((obj,i) => <div key={i} id={i}>
        <Post data={this.state.articles} />
           <h1>{obj.heading}</h1>  */}
           <h2>{obj.description}</h2> 
           <p>{obj.post}</p> 
           </div>) 
           : <div></div> 
      }
      </React.Fragment>
      
    );
  }
}

export default Createpost;
