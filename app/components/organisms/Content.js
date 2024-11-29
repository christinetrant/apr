import React from "react";
import ListItem from "../molecules/ListItem";

const Content = ({subtitle, title, contentArray}) => {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                {(subtitle || title) && (
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-indigo-600">
                                    {subtitle}
                                </p>
                                <h1 className="mt-2 tracking-tight text-gray-900 sm:text-5xl">
                                    {title}
                                </h1>
                            </div>
                        </div>
                    </div>
                )}

                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                            {contentArray.map((item, index) => {
                                const className =
                                    item.type === "header"
                                        ? "mt-16 first:mt-0 text-2xl font-bold tracking-tight text-gray-900"
                                        : "mt-6 first:mt-0 text-xl/8 text-gray-700";

                                return item.type === "paragraph" ? (
                                    <p key={index} className={className}>
                                        {item.content}
                                    </p>
                                ) : item.type === "header" ? (
                                    <h2 key={index} className={className}>
                                        {item.content}
                                    </h2>
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-5">
                {(subtitle || title) && (
                    // <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            {/* <p className="text-base/7 font-semibold text-indigo-600">
                                    {subtitle}
                                </p> */}
                            <h2 className="mt-2 tracking-tight text-gray-900 sm:text-5xl">
                                {title}
                            </h2>
                        </div>
                        {/* </div> */}
                    </div>
                )}
                <div className="text-base/7 text-gray-700">
                    {contentArray.map((item, index) => {
                        const className =
                            item.type === "header"
                                ? "mt-16 first:mt-0 text-2xl font-bold tracking-tight text-gray-900"
                                : "mt-6 first:mt-0 text-xl/8 text-gray-700";

                        return item.type === "paragraph" ? (
                            <p key={index} className={className}>
                                {item.content}
                            </p>
                        ) : item.type === "header" ? (
                            <h2 key={index} className={className}>
                                {item.content}
                            </h2>
                        ) : item.type === "list" ? (
                            // <List title="" items={item.content} />
                            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                                {/* lg:max-w-none lg:grid-cols-2 lg:gap-y-16 */}
                                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10">
                                    {item.content.map((item, index) => {
                                        console.log({item});
                                        return (
                                            <ListItem key={index} item={item} />
                                        );
                                    })}
                                </dl>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Content;
