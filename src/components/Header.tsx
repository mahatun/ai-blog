import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-6 shadow-lg">
            <div className="max-w-4xl mx-auto">
                <Link to="/">
                    <h1 className="text-3xl font-bold cursor-pointer">AI Insights</h1>
                </Link>
                <p className="text-gray-300">Exploring papers and ideas in artificial intelligence</p>
            </div>
        </header>
    );
};

export default Header;