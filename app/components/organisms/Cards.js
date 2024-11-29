import Image from "next/image";

const teamMembers = [
    {
        name: "Alex Codington",
        role: "Lead Developer",
        description:
            "Passionate developer with a knack for turning caffeine into code. Creating digital wonders and solving problems with elegant solutions.",
        image: "/images/alex.jpg",
    },
    {
        name: "Sophie Hackman",
        role: "UX Designer",
        description:
            "Explorer of new technologies and coding realms. Transforming ideas into intuitive user experiences.",
        image: "/images/sophie.jpg",
    },
    {
        name: "Max Secureblade",
        role: "Cybersecurity Specialist",
        description:
            "Cybersecurity ninja with a mission to protect the digital realm. Expert in securing networks and defeating cyber threats.",
        image: "/images/max.jpg",
    },
];

const Cards = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-700">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
