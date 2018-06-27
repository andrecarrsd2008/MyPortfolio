import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Layout } from 'react-mdl';


class Contact extends Component {
 render() {
  return(
    <div className="contact-body">
     <Layout style={{background: 'url(../assets/Background.jpg) center / cover'}}>
      <Grid className="contact-grid">
        <Cell col={6}>
        <h2>Andre Carrizales</h2>
        <img
        src="../assets/Landing.jpg"
        alt="my-picture"
        style={{height: '250px'}}
        />

        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Please feel free to contact me using the links listed
        on the right side of the screen. 
        </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr/>
          
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                   (619) 581-9635
                </ListItemContent>
              </ListItem>
              
              <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                   andrecarrsd2008@gmail.com
                </ListItemContent>
               </ListItem>

               {/* <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                   (619) 581-9635
                </ListItemContent>
                </ListItem> */}

            </List>
          </div>
        </Cell>
       </Grid>
       </Layout>  
    </div>
    )
  }
}    

export default Contact;