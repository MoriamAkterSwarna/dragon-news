import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='mb-2'> <FaGoogle />Login With Google</Button>
            <Button variant="outline-secondary"className='mb-2'><FaGithub/>Login with Github</Button>

            <div>
                <h3>Find us on</h3>
                <ListGroup>
                        <ListGroup.Item><FaFacebook></FaFacebook>facebook</ListGroup.Item>
                        <ListGroup.Item><FaTwitter></FaTwitter>twitter</ListGroup.Item>
                        <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>
                        
                </ListGroup>
            </div>
            <QZone></QZone>

            <div className='position-relative'>
                <img src={bg} alt="" className='img-fluid'/>
                <div className='text-center mt-5 p-5 text-light position-absolute top-0 start-0'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger" className='mb-2'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;