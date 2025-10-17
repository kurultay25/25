
import React, { useState, useEffect } from 'react';
import type { Service } from '../types';

interface VideoModalProps {
    service: Service;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ service, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
           window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.phone && formData.city) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', formData);
                setIsSubmitted(true);
                setIsSubmitting(false);
            }, 1000);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 sm:p-8 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl z-10">
                        &times;
                    </button>
                    
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-blue-600 mb-2">{service.title}</h2>
                        <p className="text-gray-600">Узнайте, как я могу помочь вам в этой сфере.</p>
                    </div>

                    {!isSubmitted ? (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Болевые темы:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {service.painPoints.map((point, index) => <li key={index}>{point}</li>)}
                                </ul>
                                <h3 className="font-semibold text-lg mt-6 mb-2">Ваши вопросы:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {service.clientQuestions.map((q, index) => <li key={index}>{q}</li>)}
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-center mb-4">Получите доступ к видео-разбору!</h3>
                                <p className="text-center text-sm text-gray-600 mb-4">Оставьте свои данные, чтобы посмотреть 2-минутное видео, где я подробно раскрываю эту тему.</p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="text" name="name" placeholder="Ваше имя" required className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.name} onChange={handleChange} />
                                    <input type="tel" name="phone" placeholder="Ваш телефон" required className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.phone} onChange={handleChange} />
                                    <input type="text" name="city" placeholder="Город" required className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.city} onChange={handleChange} />
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-300">
                                        {isSubmitting ? 'Отправка...' : 'Смотреть видео'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div>
                             <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg mb-6 overflow-hidden">
                                <iframe 
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="text-center bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold mb-2">Хотите получить живую экспресс-консультацию?</h3>
                                <p className="text-gray-700 mb-4">Нажмите кнопку ниже, чтобы оплатить и выбрать удобное время для нашей онлайн-встречи.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-md hover:bg-green-600 transition duration-300 text-lg">
                                    Записаться на экспресс-консультацию
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
