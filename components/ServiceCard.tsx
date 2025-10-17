
import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
    service: Service;
    onClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
    return (
        <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer w-full max-w-sm flex flex-col items-center text-center"
            onClick={() => onClick(service)}
        >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
        </div>
    );
};

export default ServiceCard;
