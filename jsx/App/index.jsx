import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react';
import axios from 'axios';

export default class index extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      name: '',
      discription: ''
    }
  }

  componentDidMount() {
    self = this;
    axios.get('/posts')
      .then(function (response){
        // const posts = response.data.map(
        //   obj => obj.data
        // );
        // console.log(posts)
        self.setState({ posts: response.data})
      })
  }

  componetShouldMount(){}

  handleOnchange(event){
    self.setState({name: event.target.value})
  }

  handleSubmit(){
    axios({
      method: 'POST',
      url: '/posts',
      data: {
        name: self.state.name
      }
    }).then(function(response){
      console.log(response)
    });
  }

  render(){
    return (
      <div className="container">
        <h3>List posts </h3>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id} >
              name: {post.name}
              <br/>
              - discr: {post.discription}
            </li>
          )}
        </ul>

        <h3> Create </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleOnchange}/>
          </label>
          <label>
            Discription:
            <input type="text" name="discription" value={this.state.discription} onChange={this.handleOnchange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
