import React from "react";

const Card = () => {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="block bg-black w-full rounded-lg text-left text-surface shadow-secondary-1">
                    <div className="p-6">
                        <p className="text-base">
                            This is some text within a card body.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;
