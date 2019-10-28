import React, { useState } from "react";
import {
  Grid,
  Header,
  Icon,
  Form,
  Segment,
  Button,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../actions/auth/authActions";

const Login = ({ async, auth, loginUser, history }) => {
    if(auth){
        history.push("/")
    }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const onChange = (e, name) => {
    name(e.target.value);
  };
  const disabled = () => {
    if (
      email === "" ||
      password === "" ||
      (async.loading === true && async.name === "Login_Loading") ||
      !ValidateEmail(email)
    ) {
      return true;
    }
    return false;
  };
  const ValidateEmail = mail => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  const onSubmit = async e => {
    e.preventDefault();
    setError("");
      loginUser(email, password, setError, setInvalidEmail, setInvalidPassword);
      setPassword("");
      setEmail("");
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="violet" textAlign="center">
          <Icon name="code branch" color="violet" />
          Login for Chat
        </Header>
        <Form size="large" onSubmit={e => onSubmit(e)}>
          <Segment stacked>
            <Form.Input
              className={invalidEmail ? "error" : null}
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="email"
              value={email}
              onChange={e => onChange(e, setEmail)}
              type="email"
            />
            {ValidateEmail(email) === false && email !== "" && (
              <Message color="red">Please Enter a Valid Email</Message>
            )}
            <Form.Input
              className={invalidPassword ? "error" : null}
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              value={password}
              onChange={e => onChange(e, setPassword)}
              type="password"
            />
            <Button
              color="violet"
              className={
                async.loading === true && async.name === "Login_Loading"
                  ? "loading"
                  : null
              }
              fluid
              size="large"
              disabled={disabled()}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Don't Have an Account? <Link to="/register">Register in Here</Link>
        </Message>
        {error !== "" && <Message color="red">{error}</Message>}
      </Grid.Column>
    </Grid>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    async: state.async
  };
};
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
