
import React from 'react';

const WorkFormats: React.FC = () => {
    return (
        <section id="formats" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Как я работаю</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Я предлагаю различные форматы работы, чтобы вы могли выбрать наиболее подходящий для вашего запроса и ритма жизни.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-3">Индивидуальные сессии</h3>
                        <p className="text-gray-700 mb-4">Глубокая проработка вашего запроса один на один. Конфиденциально и эффективно. Доступно онлайн и оффлайн.</p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-lg shadow-md transform md:scale-105">
                        <h3 className="text-2xl font-bold mb-3 text-blue-800">Интенсивы</h3>
                        <p className="text-gray-700 mb-4">Короткие и мощные программы, нацеленные на быстрый результат по конкретной теме (отношения, деньги, самооценка).</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-3">Личное сопровождение</h3>
                        <p className="text-gray-700 mb-4">Полное погружение и работа "рука об руку" в течение 1-3 месяцев для кардинальной трансформации вашей жизни.</p>
                    </div>
                </div>
                <button className="mt-12 bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 text-lg">
                    Посмотреть все форматы
                </button>
            </div>
        </section>
    );
};

export default WorkFormats;
