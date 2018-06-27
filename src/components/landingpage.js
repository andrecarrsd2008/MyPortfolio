import React, { Component } from 'react';
import { Grid, Cell, Image, Layout } from 'react-mdl';



class Landing extends Component {
    render() {
        return(
         <div style={{width: '100%', margin: 'auto'}}>
         <Layout style={{background: 'url(../assets/Background.jpg) center / cover'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
            
            <img
                src="../Assets/Landing.jpg" 
                alt="my-picture"
                className="my-picture"
              />

             <div className="banner-text">
               <h1>Full Stack Web Developer</h1> 

               <hr/>

               <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

             <div className="social-links">

               {/* LinkedIn */}
               <a href="https://www.linkedin.com/in/andre-carrizales-80896bb5/" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-linkedin-square" aria-hdden="true" />
               </a>  
                
                {/* GitHub */}
               <a href="https://github.com/andrecarrsd2008" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-github-square" aria-hdden="true" />
               </a>  

               </div>    
              </div>
            </Cell>
          </Grid>
          </Layout>
         </div>
        )
    }
}    

export default Landing;