
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать свой путь?</h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                    Сделайте первый шаг к изменениям прямо сейчас. Запишитесь на консультацию, и мы вместе найдем ответы на ваши вопросы.
                </p>
                <a href="#" className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-md hover:bg-gray-100 transition duration-300 text-xl shadow-lg">
                    Записаться на консультацию
                </a>
                <div className="mt-12">
                    <p className="text-blue-200 mb-4">Или свяжитесь со мной в социальных сетях:</p>
                    <div className="flex justify-center items-center space-x-6">
                        <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 text-3xl"><i className="fab fa-whatsapp"></i></a>
                        <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 text-3xl"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 text-3xl"><i className="fab fa-telegram-plane"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
