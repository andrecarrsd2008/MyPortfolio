import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton, Layout } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state= { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(

            <div className="projects-grid">
             
             {/*Project 1*/}
             <Card shadow={5} sytle={{minWidth: '450px', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.cygnismedia.com/images/post-images/reasons-why-react-js-is-popular/react-js-logo.jpg) center / cover'}}>React Project #1</CardTitle>
             <CardText>
                We used HTML/CSS to create a Login Page. We also used Firebase to create the database to store the login
                and email. Everything works on this page.. 
             </CardText>
             <CardActions border> 
               <Button colored><a href="https://andrecarrsd2008.github.io/Project-1/" target="_blank">GitHub</a></Button> 
               
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
              </CardMenu>
             </Card>

              {/*Project 2*/}
              <Card shadow={5} sytle={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 
              'url(https://www.cygnismedia.com/images/post-images/reasons-why-react-js-is-popular/react-js-logo.jpg) center / cover'}}>React Project #2</CardTitle>
            <CardText>
             For the second project, my group used HTML/CSS for the frontend and login information. We also used Mongoose for the database
             and a little bit of Handlebars and javascript. 
            </CardText>
            <CardActions border> 
              <Button colored><a href="https://fitmefitnessapp.herokuapp.com/">GitHub</a></Button> 
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
             </CardMenu>
            </Card>

             {/*Project 3*/}
             <Card shadow={5} sytle={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 
               'url(https://www.cygnismedia.com/images/post-images/reasons-why-react-js-is-popular/react-js-logo.jpg) center / cover'}}>React Project #3</CardTitle>
             <CardText>
                 In Process. 
             </CardText>
             <CardActions border> 
               <Button colored>In Process</Button> 
              
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
              </CardMenu>
             </Card>
            </div> 
            )
        } else if(this.state.activeTab === 1) {
            return (
              <div><h1>This is Express</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
              <div><h1>This is MongoDB</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
              <div><h1>This is API</h1></div>
            )
        }
    }
    

    

    render() {
        return(
         <div className="category-tabs">
           <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
             <Tab>React</Tab>
             <Tab>Express</Tab>
             <Tab>MongoDB</Tab>
             <Tab>API</Tab>
           </Tabs>
           <Layout style={{background: 'url(../assets/Background.jpg) center / cover'}}>
           
           <Grid>
               <Cell col={12}>
                 <div className="content">{this.toggleCategories()}</div>
               </Cell>
           </Grid>  
          </Layout> 
        </div>

        )
    }
}    

export default Projects;