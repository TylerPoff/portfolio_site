import React from 'react';

function Header() {
    return (
        <header className="bg-gray-900 text-gray-100 min-h-screen flex items-center px-4">
            <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-4 md:mb-0 md:mr-8"
                />
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">Tyler Poff</h1>
                    <p className="text-gray-400 text-lg md:text-xl mt-2">
                        Software Engineer · Based in Bay Area
                    </p>
                </div>
            </div>
        </header>

    );
}

export default Header;