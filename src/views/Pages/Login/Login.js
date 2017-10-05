import React, { Component } from "react";
import { connect } from 'react-redux';

import { Container, 
  Row, 
  Col, 
  CardGroup, 
  Card, 
  CardBlock, 
  Button, 
  Input, 
  InputGroup, 
  InputGroupAddon } from "reactstrap";
import { validateNull } from 'form-fields-validator';

import { loginUser } from '../../../actions/UserActions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin() {
    if (validateNull(this.state)) {
      const { email, password } = this.state;
      this.props.loginUser(email, password)
    }
  }

  render() {
    console.log(this.props);
    console.log(validateNull(this.state))
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-0">
                <Card className="p-4">
                  <CardBlock className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Input type="text" 
                        placeholder="Email Address" 
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Input type="password" 
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button 
                          color="primary" 
                          className="px-4"
                          onClick={this.handleLogin} >Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBlock>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBlock className="card-body text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBlock>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  return {
    user: state.activeUser,
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
