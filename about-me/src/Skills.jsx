import React from "react";

function Skills() {
    const skills = ["Python", "Flask", "React", "Tailwind CSS", "Git", "APIs", "PostgreSQL"];

    return (
        <section className="my-16">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {skills.map(skill => (
                    <li
                        key={skill}
                        className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;