import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';

function Submit(text){
  return console.log(text);
}

export default class IdolPage extends React.Component {
  componentDidMount() {
    this.props.fetchAirConditioner();
  }
  
  constructor(props){
    super(props);
    this.state = { text: "hello" };
  }
  
  // renderComments(comments) {
  //   return comments.map((comment) => {
  //     return (
  //       <div className="row">
  //         <div className="col-md-12">
  //           <strong>
  //             <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
  //             { comment.author.username }
  //           </strong>
  //           <span className="pull-right">{ comment.createdAt }</span>
  //           <p>{ comment.text }</p>
  //           <button className="btn btn-xs btn-danger">DELETE</button>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  render() {
    const { airConditioner, loading, error } = this.props.activeAirConditioner;
    
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!idol) {
      return <NotFoundPage/>
    }
    return (
      <div className="thumbnail" >
        <img className="img-responsive" src={ airConditioner.image }/>
        <div className="caption-full">
          <h4>Firstname:{airConditioner.firstname}  Lastname:{airConditioner.lastname}</h4>
          <h4>Nickname:{airConditioner.nickname}  AKA:{airConditioner.aka}</h4>
          <h4>Birthday:{airConditioner.birthday}</h4>
          <h4>Height:{airConditioner.height}</h4>
          <h4>Bloodgroup:{airConditioner.bloodgroup} </h4>
          <h4>Address:{airConditioner.address} </h4>
          <h4>FavColor:{airConditioner.favcolor} </h4>
          <h4>FavFood:{airConditioner.favfood} </h4>
          <h4>Hobby:{airConditioner.hobby} </h4>
          <h4>Language:{airConditioner.lang} </h4>
          <h4>Education in University:{airConditioner.university} </h4>
          <h4>Education in Highschool:{airConditioner.highschool} </h4>
          <h4>Description:{airConditioner.description} </h4>
          <p>
            <em>Submitted By: Somelink</em>
          </p>
          <div>
            <button className="btn btn-danger" onClick={this.props.deleteAirConditioner}>DELETE</button>
          </div>
        </div>
      </div>
    );
  }
}