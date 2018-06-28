import React, { Component } from 'react';
import { Grid, Cell, Layout } from 'react-mdl';

class About extends Component {
    render() {
      return(
        <div>
         <Layout style={{background: 'url(../assets/Background.jpg) center / cover'}}>   
          <Grid>
            <Cell col={12}>
             <div style={{textAlign: 'center', paddingTop: '2em'}}>
               <img
               src="../assets/AboutMe.jpg" class="resume-pic"
               alt="computer"
               style={{height: '300px'}}
                 />  
             </div> 
             <h2 style={{paddingTop: '1em', paddingLeft: '1em'}}>About Me</h2>
             <hr style={{borderTop: '3px solid #833fb2', width: '90%', marginLeft: '3em'}}/> 
             {/* <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>  */}

             <h5 style={{paddingLeft: '3em'}}></h5>
             <div style={{textAlign: 'left', paddingLeft: '4em', paddingRight: '4em', paddingTop: '0s', color: 'white'}}>
             <p><h5>My name is Andre Carrizales and I am a Full Stack Web Developer. After graduating from San Diego State University
             back in 2008, I went right to work in the inner-city schools. My career list included teacher's assistant, substitute, 
             and full-time teacher. For reasons out of my control, becoming a teacher became an idea that was abondoned by other. 
             My new adventure started the moment I saw a coding advertisement while on a social media website. It was a brief description 
             about how to become a Full Stack Web Developer.</h5></p> 
             
             <p><h5>After contacting the Unversity of California, San Diego, a recruiter explained to me the process of becoming a Full 
             Stack Web Developer. She explained what consisted and how to become a web developer and how the of the career opportunities 
             are almost endless and she told about the classes and truth be told, immediately caught my attention. My new career goals 
             as a web developer started that day after we hung up the phone.</h5></p></div>
             
             
           </Cell> 
         </Grid> 
         </Layout>
        </div>
     )
   }
}    
export default About;