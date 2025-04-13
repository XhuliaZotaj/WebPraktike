import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home : React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/contact');
    };

    return (
        <div className="home-container">
            <h1>Miresevini ne faqen tone.</h1>
            <p>Kjo eshte home page.</p>
            <button onClick={ handleNavigate}>Contact Us</button>
        </div>
    );
};

export default Home;
