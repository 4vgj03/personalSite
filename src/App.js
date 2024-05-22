import React from 'react';
import { useRoutes } from 'hookrouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import NotFoundPage from './components/NotFoundPage';

const routes = {
    '/': () => <Home />,
    '/resume': () => <Resume />,
    '/projects': () => <Projects />,
    '/contact': () => <Contact />,
};

function App() {
    const routeResult = useRoutes(routes);

    return (
        <>
            <Header />
            {/* {routeResult || <NotFoundPage />} */}
            <Footer />
        </>
    );
}

export default App;
