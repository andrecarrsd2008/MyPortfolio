import React, { Component } from 'react';
import { Grid, Cell, Layout } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
       <Layout style={{background: 'url(../assets/Background.jpg) center / cover'}}> 
        <Grid>
          <Cell col={4}>
           <div style={{textAlign: 'center'}}>
             <img
             src="../assets/Resume.jpg" class="resume-pic"
             alt="resume"
             style={{height: '200px'}}
               />  
           </div> 
           <h2 style={{paddingTop: '1em'}}>Andre Carrizales</h2> 
           <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4> 
           <hr style={{borderTop: '3px solid #833fb2', width: '90%'}}/>
           <p></p>
           <hr style={{borderTop: '3px solid #833fb2', width: '90%'}}/>
           <h5>Address</h5>
           <p>3649 Highland Ave San Diego, CA 92105</p> 
           <h5>Phone</h5>
           <p>(619)581-9635</p>
           <h5>Email</h5>
           <p>andrecarrsd2008@gmail.com</p>
           <hr style={{borderTop: '3px solid #833fb2', width: '90%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            
            <h4>Education</h4>

            <Education
              startYear={1996}
              endYear={2006}
              schoolName="Merced College"
              schoolDescription="After attending a local community college, I decided it was best to put
              aside all distractions and follow my goal to graduate from Merced College and transfer to a
              four-year university."
              />
        
            <Education
              startYear={2006}
              endYear={2008}
              schoolName="CSU Stanislaus and San Diego State University"
              schoolDescription="After transferring from Stanislaus State to SDSU, I fell in love with
              the city and the location. After graduation, I decided it would be better for me to call San Diego
              my home."
              />

              <Education
              startYear={2018}
              endYear={2018}
              schoolName="University of California, San Diego - Coding BootCamp Certificate Program"
              schoolDescription="After transferring from Stanislaus State to SDSU, I fell in love with
              the city and the location. After graduation, I decided it would be better for me to call San Diego
              my home."
              />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h4>Experience</h4>

            <Experience 
              startYear={2009}
              endYear={2011}
              jobName="Stein Education Center - Functional Aid"
              jobDescription=""
              />
           
            <Experience 
              startYear={2011}
              endYear={2013}
              jobName="Juvenile Court Community Schools - Special Education, Teacher's Assistant"
              jobDescription=""
              />

            <Experience 
              startYear={2013}
              endYear={2017}
              jobName="Gompers Preparatory Academy - Security and Support Staff"
              jobDescription=""
              /> 
          </Cell>
        </Grid>
       </Layout>
      </div>
    )
  }
}    

export default Resume;