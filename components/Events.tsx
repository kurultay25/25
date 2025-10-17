
import React from 'react';
import { EVENTS_DATA } from '../constants';

const Events: React.FC = () => {
    return (
        <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Календарь мастер-классов и семинаров</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Присоединяйтесь к моим живым мероприятиям, чтобы получить новые знания и мощный заряд энергии для перемен.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    {EVENTS_DATA.map((event) => (
                        <div key={event.id} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center md:text-left">
                                <p className="text-blue-600 font-bold text-lg">{event.date}</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-6 flex-1">
                                <h3 className="text-2xl font-bold">{event.title}</h3>
                                <p className="text-gray-700 mt-1">{event.description}</p>
                            </div>
                             <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 whitespace-nowrap">
                                Узнать больше
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
