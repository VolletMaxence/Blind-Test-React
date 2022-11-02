import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const BlindTest = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className="searchName">
                <select>
                    <option value="">-- Sélectionner une année --</option>
                </select>
            </div>
        </div>
    );
};

export default BlindTest;