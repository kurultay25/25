
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Олжас Оксумбаев. Все права защищены.</p>
                <p className="text-sm mt-1">Психолог, Коуч, Наставник</p>
            </div>
        </footer>
    );
};

export default Footer;
