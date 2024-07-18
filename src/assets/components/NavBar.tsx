import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import './NavBar.css';

function NavBar() {
    const { currentLanguage, toggleLanguage, translations } = useLanguage();

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    const [isChecked, setIsChecked] = useState(theme === 'dark');

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setIsChecked(newTheme === 'dark');
    };

    const handleToggleLanguage = (lang: string) => {
        if (lang !== currentLanguage) {
            toggleLanguage();
        }
    };

    const handleSliderChange = () => {
        toggleTheme();
    };

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item navbar-item-vladislav'>{translations.name}</li>
                <div className='navbar-right'>
                    <li className='navbar-item'><a href="#welcome">{translations.welcome}</a></li>
                    <li className='navbar-item'><a href="#skills">{translations.skills}</a></li>
                    <li className='navbar-item'><a href="#experience">{translations.experience}</a></li>
                    <li className='navbar-item'><a href="#education">{translations.education}</a></li>
                    <li className='navbar-item'><a href="#portfolio">{translations.portfolio}</a></li>
                    <li className='navbar-item'><a href="#contact">{translations.contact}</a></li>
                    <li className='navbar-item'>
                        <div className='checkbox-wrapper-41'>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleSliderChange}
                            />
                        </div>
                    </li>
                    <li className='navbar-item'>
                        <img className='slider-language' src="/public/img/icons/eng.svg" alt="English" onClick={() => handleToggleLanguage('en')} />
                        <img className='slider-language' src="/public/img/icons/ru.svg" alt="Russian" onClick={() => handleToggleLanguage('ru')} />
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;
