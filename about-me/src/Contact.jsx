import React from "react";

function Contact() {
    return (
        <section className="my-16">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300 mb-6">
                Interested in working together or have any questions? Feel free to reach out!
            </p>
            <a 
                href="mailto:tyler.poff1900@gmail.com" 
                className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-500 transition-colors duration-300"       
            >
                tyler.poff1900@gmail.com
            </a>


        </section>
    );
}

export default Contact;