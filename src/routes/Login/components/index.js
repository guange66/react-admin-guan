import React, { Component } from 'react';
import { connect, router } from 'dva';
import { LockOutlined, UserOutlined, PictureOutlined } from '@ant-design/icons';
import { Layout, Button, Input, Checkbox, Spin, Form } from 'antd';
import logoImg from 'assets/images/logo1.png';
import './index.less';
const { Link } = router;
const { Content } = Layout;
const FormItem = Form.Item;    
@connect(({ login, loading }) => ({
  login,
  loading: loading.models.login
}))
export default class Login extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      imgCode:process.env.REACT_APP_BASE_URL+'userLogin/securityCode?d' + new Date().getTime(),
    }
  }
  handleSubmit = values => {
    const { dispatch } = this.props;
    const _this=this
    dispatch({
      type: 'login/login',
      payload: {
        "equal":values
      },
      callback:(res)=>{ 
        if(!res.data){
          _this.getCode()
        }
      }
    })
  };
  //刷新imgCode
  getCode = () =>{
    this.setState({
      imgCode:process.env.REACT_APP_BASE_URL+'userLogin/securityCode?d' + new Date().getTime()
    }) 
  }
 

  render() {
    const { loading } = this.props;

    return (
      <Layout className="full-layout login-page">
        <Content>
          <Spin tip="登录中..." spinning={!!loading}>
            <Form onFinish={this.handleSubmit} className="login-form" initialValues={{ userName: 'guan', password: '123456'}}>
              <div className="user-img">
                <img src={logoImg} alt="logo" /> 
                <span>易控智驾</span>
              </div>
              <FormItem name="userName" rules={[{ required: true, message: '请输入您的用户名，示例admin' }]}>
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="用户名"
                />
              </FormItem>
              <FormItem name="password" rules={[{ required: true, message: '请输入您的密码，示例admin' }]}>
                <Input
                  size="large"
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="密码"
                />
              </FormItem>
              <Form.Item  style={{ marginBottom: 0 }}>
                  <FormItem name="imgCode" rules={[{ required: true, message: '请输入验证码' }]} style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}>
                    <Input
                      size="large"
                      prefix={<PictureOutlined />} 
                      type="text"
                      placeholder="验证码"
                    />
                  </FormItem>
                  <FormItem 
                      style={{ display: 'inline-block', width: '120px', float:'right'}}
                    > 
                    <img className="imgCode" src={this.state.imgCode} onClick={this.getCode} alt=""  />
                  </FormItem>
              </Form.Item>
              
              <FormItem name="remember" valuePropName="checked" noStyle>
                <Checkbox className="remenberme" >记住我</Checkbox>
              </FormItem>
              <Link className="login-form-forgot" to="#">
                忘记密码
                </Link>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
                </Button>
              <div className="new-user">
                新用户？<Link to="/sign/register">现在注册</Link>
              </div>
            </Form>
          </Spin>
        </Content>
      </Layout>
    );
  }
}
