import React, { useState } from 'react';
import {Wrapper} from "../../../../index";

const BlocInformation = ({ titre, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const collapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper>
            <div className={"bloc_information"} onClick={collapse}>
                <div>
                    <h2>{titre}</h2>
                    <span>{isOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
                </div>
                {isOpen && <div className="contenu-collapse">{children}</div>}
            </div>
        </Wrapper>
    );
};

export default BlocInformation;
