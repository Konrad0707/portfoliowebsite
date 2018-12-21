import React, { Component } from 'react';
import Spotify from 'react-spotify-player';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= this.props.data.profile;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var book = this.props.data.book;
    }
    const size = {
      width: '40%',
      height: 80,
    };

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Konrad Wang Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="split">
              <div className="left">
                <h4> On Repeat </h4>
                <Spotify
                  uri="spotify:track:6T8cJz5lAqGer9GUHGyelE"
                  view={'list'}
                  theme={'black'}
                  size={'large'}
                />
              </div>
              <div className="right">
                <h4> Currently Reading </h4>
                <img className="book"  src={book} alt="Book" />
              </div>
            </div>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
