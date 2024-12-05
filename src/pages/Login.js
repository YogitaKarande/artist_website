import { useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RegisterButton } from "../components/button/Button";

function Login() {
  const [changePassword, setChangePassword] = useState(false)
  const [forgetotp, setForgetOtp] = useState()
  const [token, setToken] = useState()

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Col lg={5} id="authentication_form" className="border">
        {
          !token && (
            <Form id="login_page" className="p-4">
              <h3 className="text-center">SIGN IN</h3>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Enter Mobile Number / Email ID" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter Password" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Check aria-label="option 1" label='Remember me ?' className="mb-3" />
                <NavLink className='nav-link'>Forget Password ?</NavLink>
              </div>
              <RegisterButton>Login</RegisterButton>
              {/* **************************************** */}
            </Form>
          )
        }

        {
          forgetotp && (
            <Form className="forget_password p-4">
              <h3 className="text-center">FORGET PASSWORD</h3>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Enter Mobile Number / Email ID" />
              </Form.Group>
              <RegisterButton className='mb-3'>GET OTP</RegisterButton>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter New Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Check aria-label="option 2" label='Remember me ?' className="mb-3" />
              <RegisterButton>SET PASSWORD</RegisterButton>
            </Form>)
        }
        
        {/* *********************************** */}

        {
          changePassword === true && (
            <Form className="change_password p-4">
              <h3 className="text-center">CHANGE PASSWORD</h3>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Enter Old Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter New Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Check aria-label="option 3" label='Remember me ?' className="mb-3" />
              <RegisterButton>CHANGE PASSWORD</RegisterButton>
            </Form>
          )
        }
      </Col>
    </Container>
  )
}

export default Login