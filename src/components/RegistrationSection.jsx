import React ,{useState} from 'react'
import { Container,Form ,Col,Button,Row,Image } from 'react-bootstrap'
import axios from "axios";
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";

import URLs from '../services/apiUrls';

function RegistrationSection() {
  const history = useHistory();
//   const [avatarPreview, setAvatarPreview] = useState('');
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
    //   password: '',
    //   confirmPass: '',
    //   image:'',
      username:''
    }
  );
  
    const conf = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Appian-API-Key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZDEzNjcxOC1hYmEyLTQ3MjYtYTcwZS02MmZjZjcxODMwOWIifQ.tZXAkHVepXnS3IlpJmCPwIstl-VkYbaZpanxW5Jq_M8"
      }
    };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
    //   const formData = new FormData();
    //   formData.append('image', newUser.image);
    //   formData.append('firstName', newUser.firstName);
    //   formData.append('lastName', newUser.lastName);
    //   formData.append('email', newUser.email);
    //   formData.append('password', newUser.password);
    //   console.log(newUser);
    //   console.log(formData.get('image'));
      axios.post(`${URLs.baseURL}${URLs.registerURL}`, newUser, conf)
          .then(res => {
            if (res.status === 200) {
            //   const value  = res.headers["x-auth"] ;
            //   localStorage.setItem("token", JSON.stringify({value}) );
              console.log("success", res);
            //   history.push("/");
            }else if(res.status === 208){
              setErrors({email : `this Email: ${newUser.email} is already exists`});
            }  
            else if(res.status === 500){
                console.log(res);    
            }            
          })
          .catch(err => {            
            console.log(err);           
          });
    }
  }

  const  handleChange = (e) => {
    console.log(e.target.value);
    setNewUser({...newUser, [e.target.name]: e.target.value})
  };

  React.useEffect(() => {
    console.log(newUser);
    validateUser(newUser);
  }, [newUser]);

//   const handlePhoto = (e) => {
//       setNewUser({...newUser, image: e.target.files[0]});
//       setAvatarPreview(
//         URL.createObjectURL(e.target.files[0])
//       )
//   };

  const validateUser = (data) => {
    setErrors({});
    // console.log(data.image.name);
    if ( data.username.length < 2) {
        setErrors({username : "Username cannot be less than 2 chars"});
    }else if (data.firstName.length < 2) {
      setErrors({firstName : "First Name cannot be less than 2 chars"});
    }else if ( data.lastName.length < 2) {
      setErrors({lastName : "Last Name cannot be less than 2 chars"});
    }else if (!data.email) {
      setErrors({email : "this field cannot be empty"});
    }
    // else if (data.password.length <= 8) {
    //   setErrors({ password : "your password must be 8 chars length at least"});
    // } else if (data.password !== data.confirmPass) {
    //   setErrors({ confirmPass : "the password fields do not match, try again"});
    // }
    // else if (! /\.(jpe?g|png|gif|bmp)$/i.test(data.image.name) ){
    //   setErrors({ image : "the image extentsion must be like *. jpg|jpeg|png|gif|bmp "});
    // }
    console.log(errors);
    // return errors;
  }


    return (
    <Container fluid>
        
        <Row>
          <Col></Col>

          <Col>
          <Col className="border p-4 mt-5">
                <Form method="post" onSubmit={handleSubmit}  >

                <Form.Group controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
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

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridfname">
                        <Form.Label>First Name</Form.Label>
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
                
                    <Form.Group as={Col} controlId="formGridlname">
                        <Form.Label>Last Name</Form.Label>
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
                </Form.Row>
            
                
                <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
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
            
                {/* <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Your Password" 
                            name="password"
                            value={newUser.password}
                            onChange={handleChange}
                            minLength="8" 
                            required
                            />
                <Form.Text className="text-danger">
                    {errors.password}
                </Form.Text>
                </Form.Group> */}

                {/* <Form.Group controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Your Password"
                            name="confirmPass"
                            value={newUser.confirmPass}
                            onChange={handleChange}
                            minLength="8" 
                            required
                            />
                <Form.Text className="text-danger">
                    {errors.confirmPass}
                </Form.Text>
                </Form.Group> */}

                {/* <Form.Group controlId="formGridAvatar">
                <Form.Label>Photo</Form.Label>
                <Form.Control 
                                type="file" 
                                placeholder="Your Photo"
                                accept="image/*"
                                name="image"
                                onChange={handlePhoto} 
                                required
                                className="form-control mb-1"
                                />
                                {avatarPreview && <Image src={avatarPreview}  width={171} height={180} thumbnail />}
                <Form.Text className="text-danger">
                    {errors.image}
                </Form.Text>
                </Form.Group> */}
            
                <hr />
                <Button variant="success" type="submit" className="btn btn-block">
                Register
                </Button>
            </Form>
            </Col>
          </Col>
          <Col></Col>
        </Row>
      </Container>
        
    )
}

export default RegistrationSection
