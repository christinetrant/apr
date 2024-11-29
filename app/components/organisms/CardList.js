import React from "react";

const CardList = ({title, items}) => {
    console.log({items});
    return (
        <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:gap-y-10">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-500"
                        >
                            <div className="flex items-center text-gray-800">
                                {item.icon && (
                                    <span className="mr-3 text-blue-500">
                                        {item.icon}
                                    </span>
                                )}
                                <span className="text-lg">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardList;
