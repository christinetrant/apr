import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";
import ListItem from "../molecules/ListItem";

// const features = [
//     {
//         name: "Push to deploy",
//         description:
//             "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
//         icon: CloudArrowUpIcon,
//     },
//     {
//         name: "SSL certificates",
//         description:
//             "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
//         icon: LockClosedIcon,
//     },
//     {
//         name: "Simple queues",
//         description:
//             "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
//         icon: ArrowPathIcon,
//     },
//     {
//         name: "Advanced security",
//         description:
//             "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
//         icon: FingerPrintIcon,
//     },
// ];

const FtSection = ({subtitle, title, summary, items}) => {
    if (!items.length > 0) return;
    return (
        <section className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    {subtitle && (
                        <h2 className="text-base/7 font-semibold text-indigo-600">
                            {subtitle}
                        </h2>
                    )}
                    {title && (
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                            {title}
                        </p>
                    )}
                    {summary && (
                        <p className="mt-6 text-lg/8 text-gray-600">
                            {summary}
                        </p>
                    )}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {items.map((item, index) => (
                            <ListItem key={index} item={item} />
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default FtSection;
