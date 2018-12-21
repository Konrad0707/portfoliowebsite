import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span> | </span><em className="date">{education.graduated}</em></p>
        <p>{education.description} <br></br> {education.specialization}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span> | </span> <em className="date">{work.years}</em></p>
            <h6>{work.team}</h6>
            <ul>
              <li>{work.d1}</li>
              <li>{work.d2}</li>
              <li>{work.d3}</li>
            </ul>
        </div>
      })
      var research = this.props.data.research.map(function(research){
        return <div key={research.name}><h3>{research.name}</h3>
            <p className="info">{research.title}<span> | </span> <em className="date">{research.years}</em></p>
            <h6>{research.team}</h6>
            <ul>
              <li>{research.d1}</li>
              <li>{research.d2}</li>
            </ul>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>
      <div className="row work">

         <div className="three columns header-col">
            <h1><span>research</span></h1>
         </div>

         <div className="nine columns main-col">
          {research}
        </div>
      </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">


				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
