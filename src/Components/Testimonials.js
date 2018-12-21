import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var interest = this.props.data.interest.map(function(interest){
        return <div key={interest.name}><h3>{interest.name}</h3>
        </div>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Who Am I?</span></h1>
            </div>

            <div className="ten columns flex-container">
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
