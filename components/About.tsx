
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Меня зовут Олжас, и я посвятил свою жизнь изучению человеческой психологии и потенциала. Мой путь начался с личного поиска ответов на вечные вопросы: "Кто я?", "В чем мой смысл?" и "Как построить счастливую жизнь?". Сегодня, пройдя через годы обучения, практики и работы с сотнями клиентов, я готов стать вашим проводником.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Моя история</h3>
                            <p className="text-gray-700">Как я пришел к этой деятельности и почему это стало делом моей жизни.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Моя философия</h3>
                            <p className="text-gray-700">Я верю, что каждый человек обладает всеми ресурсами для счастья. Моя задача — помочь вам их раскрыть.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Почему мне доверяют</h3>
                            <p className="text-gray-700">Более 10 лет опыта, профильное образование и, главное, реальные результаты моих клиентов.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
