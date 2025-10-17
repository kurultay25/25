
import React from 'react';

const Header: React.FC = () => {
    return (
        <header id="home" className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    <img
                        src="https://picsum.photos/id/237/300/300"
                        alt="Олжас Оксумбаев"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                    />
                    <div className="md:text-left max-w-lg">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Олжас Оксумбаев
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-600 font-semibold mt-2">
                            Психолог, Коуч, Наставник по жизни
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Помогаю людям находить себя и строить гармоничные отношения.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
