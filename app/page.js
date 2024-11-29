import Hero from "./components/organisms/Hero";
import CTA from "./components/organisms/CTA";
import Content from "./components/organisms/Content";
import CardList from "./components/organisms/CardList";
import SimpleContent from "./components/organisms/SimpleContent";
import {
    BriefcaseIcon,
    FilmIcon,
    MusicalNoteIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/outline";

const icons = {
    video: VideoCameraIcon,
    music: MusicalNoteIcon,
    briefcase: BriefcaseIcon,
    film: FilmIcon,
};

const listItems = [
    {
        name: "A unique blend of musical and visual expertise",
    },
    {
        name: "An international perspective, with a touch of Irish magic",
    },
    {
        name: "A proven track record with high-profile global projects",
    },
    {
        name: "A passion for transforming your vision into something extraordinary ",
    },
];

const serviceList = [
    {
        name: "Full-service video production and post-production",
        icon: icons.video,
    },
    {
        name: "Music video creation",
        icon: icons.music,
    },
    {
        name: "Corporate and commercial content",
        icon: icons.briefcase,
    },
    {
        name: "Documentary and narrative filmmaking",
        icon: icons.film,
    },
];

export default function Home() {
    return (
        <div>
            <Hero />
            <SimpleContent
                content={[
                    "Our team has a proven track record of working with some of the biggest names in advertising and entertainment, both locally and internationally. Our crew is world-class—highly skilled, professional, adaptable, and passionate about their craft.",
                    "Based in Ireland, with a global reach, we guide you through every stage of the process, from the initial concept all the way to the final edit. With a director who brings a musical flair to storytelling and a producer who excels in post-production, we combine rhythm, creativity, and technical expertise to deliver visuals that make a lasting impression.",
                ]}
            />

            <CardList
                title="Our Services include"
                items={listItems}
                // icons={icons}
            />
            <Content
                title="What sets us apart?"
                contentArray={[
                    {type: "list", content: serviceList},
                    // {type: "header", content: ""},
                    {
                        type: "paragraph",
                        content:
                            "At Always Press Record, we don’t just capture moments; we craft visual stories that resonate, no matter where you are in the world. We also offer state-of-the-art studios and every piece of equipment you’ll need to bring your project to life.",
                    },
                ]}
            />
            <CTA
                layout="simple"
                color="dark"
                title="Get in Touch with Us"
                content="Ready to bring your vision to life? Contact us today to discuss your project and see how we can help you create something extraordinary."
                buttonText="Contact Us"
                buttonLink="/contact"
            />
        </div>
    );
}

{
    /* <FtSection
                title="Our Services include"
                items={[
                    {
                        name: "Full-service video production and post-production",
                        icon: icons.video,
                    },
                    {name: "Music video creation", icon: icons.music},
                    {
                        name: "Corporate and commercial content",
                        icon: icons.briefcase,
                    },
                    {
                        name: "Documentary and narrative filmmaking",
                        icon: icons.film,
                    },
                ]}
                icons={icons}
            /> */
}
// <Cards />
{
    /*
            <Card />
            <Form /> */
}
