import { Col, Container, Form } from "react-bootstrap";
import { RegisterButton } from "../components/button/Button";

function Register() {
    return (
        <Container id="register" className="my-5">
            <Col lg={5} className="m-auto">
                <Form className="register_page border p-4">
                    <h3 className="text-center">SIGN UP</h3>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter Name"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="tel" placeholder="Enter Mobile Number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter User Type" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter Address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={3} placeholder="Message" />
                    </Form.Group>
                    <Form.Check aria-label="option 1" label='Remember me ?' className="mb-3" />
                    <RegisterButton>Submit</RegisterButton>
                </Form>
            </Col>
        </Container>
    )
}

export default Register