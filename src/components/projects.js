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
             <Cell col={12}>
             {/*Project 1*/}
             <Card shadow={5} sytle={{minWidth: '450px', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.cygnismedia.com/images/post-images/reasons-why-react-js-is-popular/react-js-logo.jpg) center / cover'}}>React Project #1</CardTitle>
             <CardText>
                 Lorem  Ipsum is simply a dummy text so dont take it serously. 
             </CardText>
             <CardActions border> 
               <Button colored>GitHub</Button> 
               
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
                Lorem  Ipsum is simply a dummy text so dont take it serously. 
            </CardText>
            <CardActions border> 
              <Button colored>GitHub</Button> 
              
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
                 Lorem  Ipsum is simply a dummy text so dont take it serously. 
             </CardText>
             <CardActions border> 
               <Button colored>GitHub</Button> 
              
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
              </CardMenu>
             </Card>
             </Cell>
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