import Image from "next/image";

const Cards = ({items}) => {
    if (!items && items.length <= 0) return;
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Meet Our Team
                </h2>
                {/* lg:grid-cols-3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {item.role}
                                </p>
                                <p className="text-gray-700">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
