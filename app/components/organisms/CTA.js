import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimpleCTA = ({title, content, buttonLink, buttonText}) => {
    return (
        // bg-gray-50
        <section className="bg-gray-700">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    {/* text-gray-900 */}
                    <h2 className="text-2xl font-bold text-gray-100 md:text-3xl">
                        {title}
                    </h2>
                    {/* text-gray-500 */}
                    <p className="hidden text-gray-200 sm:mt-4 sm:block">
                        {content}
                    </p>
                </div>

                <div className="mt-4 md:mt-8 mx-auto max-w-xl flex justify-center">
                    <Link
                        href={buttonLink}
                        className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400 "
                    >
                        {buttonText}
                    </Link>
                </div>

                {/* <div className="mx-auto mt-8 max-w-xl">
                <form action="#" className="sm:flex sm:gap-4">
                    <div className="sm:flex-1">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                    >
                        <span className="text-sm font-medium">
                            {" "}
                            Sign Up{" "}
                        </span>

                        <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </form>
            </div> */}
            </div>
        </section>
    );
};

const ImageCTA = ({title, content, buttonLink, buttonText, image}) => {
    return (
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Et, egestas tempus tellus etiam sed. Quam a scelerisque
                        amet ullamcorper eu enim et fermentum, augue. Aliquet
                        amet volutpat quisque ut interdum tincidunt duis.
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>

            <Image
                alt=""
                width={500}
                height={500}
                src="/contact"
                className="h-56 w-full object-cover sm:h-full"
            />
        </section>
    );
};

const CTA = ({layout, title, content, buttonLink, buttonText, image}) => {
    return layout === "image" && image ? (
        <ImageCTA
            title={title}
            content={content}
            buttonLink={buttonLink}
            buttonText={buttonText}
            image={image}
        />
    ) : (
        <SimpleCTA
            title={title}
            content={content}
            buttonLink={buttonLink}
            buttonText={buttonText}
            image={image}
        />
    );
};

export default CTA;
