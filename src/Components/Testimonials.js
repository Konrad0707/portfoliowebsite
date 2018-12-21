import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var interest = this.props.data.interest.map(function(interest){
        return <div key={interest.name}><h1>{interest.name}</h1>
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
                      {interest}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
