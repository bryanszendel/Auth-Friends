import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component{
  
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log('friends data', res.data)
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err.response)
      })
  }
  
  render() {
    return (
      <div>
        {this.state.friends.map((friend, index) => {
          return <p key={index}>{friend.name}</p>
        })}
      </div>
    )
  }
}

export default FriendList;