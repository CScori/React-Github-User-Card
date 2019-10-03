import React from 'react'
class Followers extends React.Component {

    render(props) {
        return(
            <div> 
            <h3>{props.login}</h3>
          <img src={props.avatar_url} alt='follower'/>
          </div>
        )
    }
};
export default Followers;