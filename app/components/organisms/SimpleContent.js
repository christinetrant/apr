import React from "react";

const SimpleContent = ({content}) => {
    if (!content && content.length <= 0) return;

    return (
        <div className="relative isolate overflow-hidden bg-gray-700 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:gap-y-10">
                {content.map((paragraph, index) => (
                    <p key={index} className="mt-6 first:mt-0 text-xl/8">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SimpleContent;
