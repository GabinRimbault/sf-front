import React, { useState } from 'react';

const Accordion = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
            {React.Children.map(children, (child) => {
                if (child.type === Accordion.Title) {
                    return React.cloneElement(child, { isOpen });
                } else {
                    return child;
                }
            })}
        </div>
    );
}

Accordion.Title = ({ children, isOpen }) => {
    return (
        <div className={`accordion-title ${isOpen ? 'open' : ''}`}>
            <div className="title-content">{children}</div>
            <div className="icon-container">
                {isOpen ? (
                    <i className="fa-solid fa-chevron-up"></i>
                ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                )}
            </div>
        </div>
    );
}

Accordion.Body = ({ children }) => {
    return (
        <div className="accordion-body">
            {children}
        </div>
    );
}

export default Accordion;
