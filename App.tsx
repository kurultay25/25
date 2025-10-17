
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import WorkFormats from './components/WorkFormats';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { SERVICES_DATA } from './constants';
import type { Service } from './types';

const App: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const handleServiceClick = (service: Service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <div className="font-sans antialiased text-gray-800">
            <Header />
            <main>
                <About />
                <Services onServiceClick={handleServiceClick} />
                <WorkFormats />
                <Testimonials />
                <Events />
                <Contact />
            </main>
            <Footer />
            {selectedService && (
                <VideoModal service={selectedService} onClose={closeModal} />
            )}
        </div>
    );
};

export default App;
