import React from 'react';
import axios from 'axios';
import Followers from './Followers'

class App extends React.Component {
  state = {
    user: [],
    follower: []
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/CScori')
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log('res', res.data)
      })
      .catch(err => console.log(err));

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user)
    axios
    .get('https://api.github.com/users/CScori/followers')
      .then(res => {
        this.setState({
          follower: res.data
        });
        console.log('res', res.data)
      })
      .catch(err => console.log(err));

  }


  render() {
    return (
      <div className="App">
        <h2>Explore the User you want to be</h2>
        <div className="user">
        {this.state.user.map(user => (
         <div> 
           <h3>{user.login}</h3>
         <img src={user.avatar_url} alt='user'/></div>
        ))}
        </div>
        <div className="follow">{this.state.follower.map(follow => (
          <div>
            <Followers follow={follow}/>
          </div>
        ))}
        </div>
      </div>
    );
  }
}



export default App;
