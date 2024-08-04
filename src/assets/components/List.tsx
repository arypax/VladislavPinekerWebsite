import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import './List.css';

function List() {
    const { translations } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/pdf/CV/Vladislav%20Pineker.pdf';
        link.download = 'Vladislav Pineker.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "7ad1f33c-03bd-426d-8564-b7b80c71b96d");

        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: json,
            });
            const result = await response.json();

            if (result.success) {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className='main-div'>
            <div className='list-item' id='welcome'>
                <div className='welcome-content'>
                    <div className='welcome-text'>
                        <h1>{translations.aboutMeHeading}</h1>
                        <p>{translations.aboutMeDescription}</p>
                        <div className='about-me-info'>
                            <p><span className='span-title'>{translations.phone}</span><span className='welcome-title-after'>+7 (776) 2150 888</span></p>
                            <p><span className='span-title'>{translations.email}</span><span className='welcome-title-after'>vladislav.pineker@icloud.com</span></p>
                            <p><span className='span-title'>{translations.address}</span><span className='welcome-title-after'>{translations.aboutMeAdress}</span></p>
                            <p><span className='span-title'>{translations.social}</span>
                                <span>
                                    <a href="https://t.me/vladislav_pineker"><img src="/img/icons/telegram.svg" alt="Telegram" className="social-icon" /></a>
                                    <a href="https://www.instagram.com/vladislav.pineker/"><img src="/img/icons/instagram.svg" alt="Instagram" className="social-icon" /></a>
                                    <a href="https://www.linkedin.com/in/vladislav-pineker/"><img src="/img/icons/linkedin.svg" alt="LinkedIn" className="social-icon" /></a>
                                    <a href="https://hh.kz/resume/92d4b32bff0b93dac70039ed1f396f316d4737"><img src="/img/icons/headhunter.svg" alt="HeadHunter" className="social-icon" /></a>
                                    <a href="https://github.com/arypax"><img src="/img/icons/github.svg" alt="GitHub" className="social-icon" /></a>
                                </span>
                            </p>
                        </div>
                        <div className='buttons'>
                            <a href='#contact' className='contact-button'>{translations.contact}</a>
                            <button className='cv-button' onClick={downloadCV}>{translations.downloadCvButton}</button>
                        </div>
                    </div>
                    <div className='welcome-image'>
                        <img src='/img/vlad.svg' alt='Vladislav Pineker' />
                    </div>
                </div>
            </div>

            <div className='list-item' id='skills'>
                <div className='skills-content'>
                    <div className='skills-text'>
                        <h1>{translations.skillsHeading}</h1>
                        <p>{translations.skillsDescription}</p>
                    </div>
                    <div className='skills-list'>
                        <div className='skills-item'>HTML</div>
                        <div className='skills-item'>React</div>
                        <div className='skills-item'>Python</div>
                        <div className='skills-item'>CSS</div>
                        <div className='skills-item'>PostgreSQL</div>
                        <div className='skills-item'>C#</div>
                    </div>
                </div>
            </div>

            <div className='list-item' id='experience'>
                <div>
                    <h1>{translations.experienceHeading}</h1>
                    <div className='experience-item'>
                        <div className='experience-title'>{translations.serviceManagerTitle}</div>
                        <div className='experience-subtitle'>{translations.serviceManagerSubtitle}</div>
                        <div className='experience-subtitle'>{translations.serviceManagerDuration}</div>
                        <div className='experience-description'>
                            {translations.serviceManagerDescription}
                        </div>
                    </div>

                    <div className='experience-item'>
                        <div className='experience-title'>{translations.serviceEngineerTitle}</div>
                        <div className='experience-subtitle'>{translations.serviceEngineerSubtitle}</div>
                        <div className='experience-subtitle'>{translations.serviceEngineerDuration}</div>
                        <div className='experience-description'>
                            {translations.serviceEngineerDescription}
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-item' id='education'>
                <div>
                    <h1>{translations.educationHeading}</h1>
                    <div className='experience-item'>
                        <div className='experience-title'>{translations.universityTitle}</div>
                        <div className='experience-subtitle'>{translations.universityLocation}</div>
                        <div className='experience-subtitle'>{translations.universityDuration}</div>
                        <div className='experience-description'>
                            {translations.universityDescription}
                        </div>
                    </div>

                    <div className='experience-item'>
                        <div className='experience-title'>{translations.collegeTitle}</div>
                        <div className='experience-subtitle'>{translations.collegeLocation}</div>
                        <div className='experience-subtitle'>{translations.collegeDuration}</div>
                        <div className='experience-description'>
                            {translations.collegeDescription}
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-item' id='portfolio'>
                <div className='portfolio-item'>
                    <h1>{translations.portfolioHeading}</h1>
                    <div className='portfolio-title'>{translations.projectTitle}</div>
                    <div className='portfolio-subtitle'>{translations.projectSubtitle}</div>
                    <div className='portfolio-description'>
                        <a href='https://github.com/arypax/Parabellum.git' className='portfolio-link' target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
                    </div>
                </div>
                <div className='portfolio-right'>
                    <div className='portfolio-grid'>
                        <div className='portfolio-image'>
                            <img src='/img/portfolio/parabellum menu.svg' alt='Portfolio Image 1' />
                        </div>
                        <div className='portfolio-image'>
                            <img src='/img/portfolio/parabellum game1.svg' alt='Portfolio Image 2' />
                        </div>
                        <div className='portfolio-image'>
                            <img src='/img/portfolio/parabellum game2.svg' alt='Portfolio Image 3' />
                        </div>
                        <div className='portfolio-image'>
                            <img src='/img/portfolio/parabellum game3.svg' alt='Portfolio Image 4' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-item' id='contact'>
                <div className='contact-content'>
                    <div className='contact-left'>
                        <h1>{translations.contactHeading}</h1>
                        <p>{translations.contactDescription}</p>
                    </div>
                    <div className='contact-right'>
                        <form onSubmit={sendMessage}>
                            <div className='input-group'>
                                <div className='input-fields'>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        placeholder={translations.namePlaceholder}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder={translations.emailPlaceholder}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <textarea
                                    id='message'
                                    name='message'
                                    placeholder={translations.messagePlaceholder}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button className='contact-submit'>{translations.sendMessageButton}</button>
                        </form>
                    </div>
                </div>
            </div>
                    <div className='list-item' id='copyright'>
                        <p>{translations.copyright}</p>
                    </div>
        </div>
    );
}

export default List;
