import React from 'react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import 'antd/dist/antd.min.css';

// import { Link } from 'react-router';
import axiosReq from 'Components/axios/axiosReq.jsx';
// import { createHashHistory } from 'history';



class LoginForm extends React.Component {
  handleSubmit = (e) => {
    console.log(this.props)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values');
        // console.log(axiosReq);
        axiosReq.axiospost('/logintest',{data:values},function(data){
          if(data['state'] == 1){
            console.log('state');
            alert('g');
            // this.props.history.push('/Navbar');
            location.href = "/Navbar";
            // return (<Redirect to='/Navbar' />);
            // createHashHistory().push('/Navbar');
          }
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: '250px' ,textAlign: 'center','margin-left':'40%','margin-top':'10%'}}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const NormalLoginForm = Form.create()(LoginForm);
export default NormalLoginForm;
