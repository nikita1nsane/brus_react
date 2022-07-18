import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Built from './Pages/Built'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutCompany from './Pages/AboutCompany';
import Comments from './Pages/Comments';
import Delivery from './Pages/Delivery';
import Schema from './Pages/Schema';
import Technologies from './Pages/Technologies';
import Contacts from './Pages/Contacts';
import Buildings from './Pages/Buildings';
import Otdelka from './Pages/Otdelka';
import Fundament from './Pages/Fundament';
import Projects from './Pages/Projects'
import Faq from './Pages/Faq';
import Project from './Pages/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="built" element={<Built text="Главная / Построенные дома" title="Построенные дома" btn="Все дома"/>}>

            </Route>
            <Route path="about" element={<AboutCompany />} />
            <Route path="comments" element={<Comments />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="schema" element={<Schema />} />
            <Route path="technologies" element={<Technologies />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="buildings" element={<Buildings />} />
            <Route path="otdelka" element={<Otdelka />} />
            <Route path="fundament" element={<Fundament />} />
            <Route path="projects" element={<Projects />}>

            </Route>
            <Route path="faq" element={<Faq />} />
            <Route path='projects/:id' element={<Project/>} />
            <Route path='built/:id' element={<Project/>} />
        </Routes>
        <Footer/>
    </Router>
);

