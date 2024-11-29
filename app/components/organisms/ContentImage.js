import Image from "next/image";
import React from "react";

const ContentImage = ({title, content, image, imgAlign = "left"}) => {
    return (
        <section className="overflow-hidden bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div
                className={`${
                    imgAlign === "left" ? "order-1 lg:order-2" : "order-1"
                } p-8 md:p-12 lg:px-16 lg:py-24`}
            >
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        {title}
                    </h2>

                    {content.map((paragraph, index) => (
                        <p
                            key={index}
                            className="hidden text-gray-500 md:mt-4 md:block"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            <Image
                alt=""
                width={500}
                height={500}
                src={image}
                className={`${
                    imgAlign === "left" ? "order-2 lg:order-1" : "order-2"
                } w-full h-auto object-cover max-h-96 min-h-full`}
            />
        </section>
    );
};

export default ContentImage;
