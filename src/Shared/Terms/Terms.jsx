import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita cumque aliquam corporis. Debitis voluptatem voluptates alias ad, ducimus iusto minima, quibusdam, accusamus saepe ipsam voluptate? Nobis adipisci doloremque praesentium!</p>
            <p>Go back to <Link to='register' >Register</Link></p>
        </div>
    );
};

export default Terms;