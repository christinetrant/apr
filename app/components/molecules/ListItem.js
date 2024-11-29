import {CubeIcon} from "@heroicons/react/24/outline";
import React from "react";

const ListItem = ({item: {name, icon: Icon, description}}) => {
    return (
        <div key={name} className="relative pl-16">
            <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    {Icon ? (
                        <Icon
                            aria-hidden="true"
                            className="size-6 text-white"
                        />
                    ) : (
                        <CubeIcon
                            aria-hidden="true"
                            className="size-6 text-white"
                        />
                    )}
                </div>
                {name}
            </dt>
            <dd className="mt-2 text-base/7 text-gray-600">{description}</dd>
        </div>
    );
};

export default ListItem;
