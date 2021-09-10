import React ,{useState} from 'react'
import { InputGroup,Container,Form ,Col,Button,Row,Image } from 'react-bootstrap'

import axios from "axios";
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";

import URLs from '../services/apiUrls';

function RegistrationSection() {
  const [regMsg, setRegMsg] = useState({msg:'',style:'text-danger'});
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      username:''
    }
  );
  
    const conf = {
      headers: {
        "Content-Type": "application/json",
        "Appian-API-Key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZDEzNjcxOC1hYmEyLTQ3MjYtYTcwZS02MmZjZjcxODMwOWIifQ.tZXAkHVepXnS3IlpJmCPwIstl-VkYbaZpanxW5Jq_M8"
      }
    };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      axios.post(`${URLs.baseURL}${URLs.registerURL}`, newUser, conf)
          .then(res => {
            if (res.status === 200) {                            
              setRegMsg({...regMsg, msg:`${newUser.username} is created Successfully, Intial password is sent to Your Email.`,style:"text-success"});   
              console.log("success", res);
              // if(regMsg.style === "text-success"){
                setNewUser({...newUser,
                  firstName: '',
                  lastName: '',
                  email: '',
                  username:''
                });
              // }
            //   history.push("/");
            }else if(res.status === 208){
              setErrors({email : `this Email: ${newUser.email} is already exists`});
            }  
            else if(res.status === 500){
                console.log(res); 
                setRegMsg({...regMsg, msg:"Server-side Error",style:"text-danger"}); 
            }            
          })
          .catch(err => {            
            console.log(err);   
            setRegMsg({...regMsg, msg:"Server-side Error",style:"text-danger"});         
          });
    }
  }

  const  handleChange = (e) => {
    // console.log(e.target.value);
   
    setRegMsg({ ...regMsg, msg:"",style:"text-danger"}); 
    
    setNewUser({...newUser, [e.target.name]: e.target.value})
  };

  React.useEffect(() => {
    // console.log(newUser);
    // setRegMsg({...regMsg, msg:"",style:"text-danger"}); 
    validateUser(newUser);
  }, [newUser]);


  const validateUser = (data) => {
    setErrors({});
    // console.log(data.image.name);
    if ( data.username.length < 2) {
        setErrors({username : "Username cannot be less than 2 chars"});
    }else if (!data.email) {
      setErrors({email : "this field cannot be empty"});
    }else if (data.firstName.length < 2) {
      setErrors({firstName : "First Name cannot be less than 2 chars"});
    }else if ( data.lastName.length < 2) {
      setErrors({lastName : "Last Name cannot be less than 2 chars"});
    }
  }


    return (
    <Container fluid>
        
        <Row>
          <Col></Col>

          <Col>
          <Col className="border p-4 mt-5">
          
                <a href='https://naghamdemo.appiancloud.com/suite/' className="btn btn-danger btn-block">
                  Login
                </a>
                <br /> <hr /> 
                <Form method="post" onSubmit={handleSubmit}  >

                <Form.Group controlId="formGridUsername">
                <InputGroup.Prepend>
                  <InputGroup.Text>Username</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Your username" 
                            name="username"
                            value={newUser.username}
                            onChange={handleChange} 
                            required
                            />
                <Form.Text className="text-danger">
                    {errors.username}
                </Form.Text>
                </Form.Group>
                
                <Form.Group controlId="formGridEmail">
                <InputGroup.Prepend>
                  <InputGroup.Text>Email</InputGroup.Text>
                </InputGroup.Prepend>
                
                <Form.Control type="email" placeholder="Your Email" 
                            name="email"
                            value={newUser.email}
                            onChange={handleChange} 
                            required
                            />
                <Form.Text className="text-danger">
                    {errors.email}
                </Form.Text>
                </Form.Group>

                {/* <Form.Row> */}
                    <Form.Group  controlId="formGridfname">
                        <InputGroup.Prepend>
                          <InputGroup.Text>First Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Your First Name" 
                                name="firstName"
                                value={newUser.firstName}
                                onChange={handleChange}
                                minLength="2" 
                                required
                                />
                        <Form.Text className="text-danger">
                        {errors.firstName}
                        </Form.Text>
                    </Form.Group>
                
                    <Form.Group  controlId="formGridlname">
                        <InputGroup.Prepend>
                          <InputGroup.Text>Last Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Your Last Name" 
                                name="lastName"
                                value={newUser.lastName}
                                onChange={handleChange}
                                minLength="2"  
                                required
                                />
                        <Form.Text className="text-danger">
                        {errors.lastName}
                        </Form.Text>
                    </Form.Group>
                {/* </Form.Row> */}
            
                       
                <hr />
                <Button variant="success" type="submit" className="btn btn-block">
                Register
                </Button>
                <span className={regMsg.style}>
                    {regMsg.msg}
                </span>
                <br />
                
            </Form>
            
            </Col>
          </Col>
          <Col></Col>
        </Row>
      </Container>
        
    )
}

export default RegistrationSection
