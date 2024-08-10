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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('dimmed-background');
        } else {
            document.body.classList.remove('dimmed-background');
        }
        document.body.classList.toggle('menu-open', isMenuOpen);
    }, [isMenuOpen]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setIsChecked(newTheme === 'dark');
    };

    const handleToggleLanguage = (lang: string) => {
        if (lang !== currentLanguage) {
            toggleLanguage(lang);
        }
    };

    const handleSliderChange = () => {
        toggleTheme();
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
    
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
    
            document.querySelectorAll('.section-title').forEach(el => el.classList.remove('highlight'));
    
            const title = section.querySelector('h1');
            console.log('Title:', title);
            if (title) {
                title.classList.add('highlight');
                setTimeout(() => title.classList.remove('highlight'), 2000);
            } else {
                console.log('No title found in section:', sectionId);
            }
    
            closeMenu();
        } else {
            console.log('No section found for ID:', sectionId);
        }
    };
    

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item navbar-item-vladislav'>{translations.name}</li>
                <div className="navbar-phone">
                    <input
                        type="checkbox"
                        id="burger-checkbox"
                        className="burger-checkbox"
                        checked={isMenuOpen}
                        onChange={toggleMenu}
                    />
                    <label htmlFor="burger-checkbox" className="burger"></label>
                    <ul className={`navbar-list-phone ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#welcome" className="navbar-item-phone" onClick={(e) => handleMenuItemClick(e, '#welcome')}>{translations.welcome}</a></li>
                        <li><a href="#skills" className="navbar-item-phone" onClick={(e) => handleMenuItemClick(e, '#skills')}>{translations.skills}</a></li>
                        <li><a href="#experience" className="navbar-item-phone" onClick={(e) => handleMenuItemClick(e, '#experience')}>{translations.experience}</a></li>
                        <li><a href="#education" className="navbar-item-phone" onClick={(e) => handleMenuItemClick(e, '#education')}>{translations.education}</a></li>
                        <li><a href="#portfolio" className="navbar-item-phone" onClick={(e) => handleMenuItemClick(e, '#portfolio')}>{translations.portfolio}</a></li>
                        <li><a href="#contact" className="navbar-item-phone" onClick={(e) => handleMenuItemClick(e, '#contact')}>{translations.contact}</a></li>
                    </ul>
                </div>
                <div className='navbar-right'>
                    <li className='navbar-item' id='navbar-text-item'><a href="#welcome">{translations.welcome}</a></li>
                    <li className='navbar-item' id='navbar-text-item'><a href="#skills">{translations.skills}</a></li>
                    <li className='navbar-item' id='navbar-text-item'><a href="#experience">{translations.experience}</a></li>
                    <li className='navbar-item' id='navbar-text-item'><a href="#education">{translations.education}</a></li>
                    <li className='navbar-item' id='navbar-text-item'><a href="#portfolio">{translations.portfolio}</a></li>
                    <li className='navbar-item' id='navbar-text-item'><a href="#contact">{translations.contact}</a></li>
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
                        <img className='slider-language' src="/img/icons/eng.svg" alt="English" onClick={() => handleToggleLanguage('en')} />
                        <img className='slider-language' src="/img/icons/kz.svg" alt="Kazakh" onClick={() => handleToggleLanguage('kz')} />
                        <img className='slider-language' src="/img/icons/ru.svg" alt="Russian" onClick={() => handleToggleLanguage('ru')} />
                    </li>
                </div>
            </ul>
            <div className={`overlay ${isMenuOpen ? 'show' : ''}`}></div>
        </nav>
    );
}

export default NavBar;