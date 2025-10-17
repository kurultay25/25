
import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';
import ServiceCard from './ServiceCard';

interface ServicesProps {
    onServiceClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Сферы, в которых я полезен</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Каждая сфера жизни важна. Я помогу вам навести порядок там, где это необходимо больше всего.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* One item is centered on small screens */}
                    <div className="sm:col-start-1 sm:col-span-2 lg:col-start-auto lg:col-span-1 flex justify-center items-center">
                        <ServiceCard service={SERVICES_DATA[0]} onClick={onServiceClick} />
                    </div>
                    {SERVICES_DATA.slice(1).map((service) => (
                        <ServiceCard key={service.id} service={service} onClick={onServiceClick} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
