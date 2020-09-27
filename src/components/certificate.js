import '../App.css';
import React, { Component } from 'react';
import {Col,Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import image from "../reso/foxplay.png"
import { jsPDF } from "jspdf";


class certificate extends Component {
  

    jspdfGenerator=()=>{
        var doc=new jsPDF('p','pt');
        doc.text(100,100,'Name of the Event');
        doc.text(100,200,'Name of the participant');
        doc.save("certificate.pdf");

    }
    render() {
        return (
            
            <div className="App">
            <div style={{overflow:"false"}}>
            <div class="typewriter">
            <h1>Generate Your Certificate.</h1>
          </div>
          <Form id="exampleEmail" >
          <Row form>
          
            <FormGroup style={{marginLeft:"10vw"}}>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Registered Email" />
            </FormGroup>
            
      <FormGroup style={{marginLeft:"10vw"}}>
      <Label >Event</Label>
      <Input type="select" name="select" id="exampleDrop">
      <option>Name of the event ...</option>  
      <option>GSW:GitHub</option>
        <option>Hacktober Fest Meetup</option>
      
      </Input>
    </FormGroup>
   
    </Row>
      </Form>
          <Button onClick={this.jspdfGenerator} color="success">Generate</Button>{' '}
          
          </div>
          <img src={image}  style={{width:"300px", marginTop:"n3", boxShadow:"true"}}/>
            </div>
        );
    }
}

export default certificate;