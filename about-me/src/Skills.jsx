export default function Skills() {
    const skills = ["Python", "Django", "React", "Tailwind CSS", "Git", "APIs", "PostgreSQL"];

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <li key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}