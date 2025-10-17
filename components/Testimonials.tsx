
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Реальные истории людей, которые уже прошли свой путь трансформации вместе со мной.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
                            <i className="fa-solid fa-quote-left text-blue-500 text-3xl mb-4"></i>
                            <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                            <p className="font-bold text-right text-gray-800">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
