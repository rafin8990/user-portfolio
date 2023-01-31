import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;