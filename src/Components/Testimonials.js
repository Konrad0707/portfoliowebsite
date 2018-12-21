import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var interest = this.props.data.interest.map(function(interest){
        var image = interest.image;
        return <div key={interest.name}>
        <img src={image} alt={interest.name}/>

        </div>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
          <h1><mark>Who Am I?</mark></h1>

            <div className="other">
                  <ul className="slides">
                      <center>{interest}</center>
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
