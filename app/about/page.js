import Cards from "../components/organisms/Cards";
import Content from "../components/organisms/Content";
import ContentImage from "../components/organisms/ContentImage";

export default function About() {
    return (
        <>
            <Content
                title="Why we stand out"
                contentArray={[
                    {
                        type: "paragraph",
                        content:
                            "Grace and Jason have collaborated for over five years, combining their unique skills and creative vision to lead with confidence and adaptability. Grace’s strategic storytelling compliments Jason’s innovative approach to sound, visuals, and technology, resulting in impactful, seamless projects. Their partnership fosters a culture of trust and collaboration, empowering their team to deliver exceptional results.",
                    },
                ]}
            />
            <Cards
                items={[
                    {
                        name: "Grace Cotter",
                        role: "Founder",
                        content: [
                            "Grace is a dynamic creative producer with a passion for storytelling and extensive experience in documentary filmmaking and media production. She excels in research, scripting, and production, with a collaborative approach that ensures impactful content. Grace has worked on projects like Castro’s Spies, exploring Cuban espionage, and Junk Kouture, celebrating fashion and sustainability. Her expertise in cinematography, lighting, and sound design enhances the emotional depth of her work.",
                            "Having partnered with clients like Universal Music, Heineken, L’Oréal, and Diageo, Grace consistently delivers polished, tailored content, making her a valuable asset to any production team.",
                        ],
                        image: "/grace-cotter-1.jpg",
                    },
                    {
                        name: "Jason Boland",
                        role: "Founder",
                        content: [
                            "Jason Boland, the creative force behind Always Press Record, brings a unique perspective to production, shaped by his experience as a musician, producer, director, and technical visionary. As a member of Kodaline, he has toured globally, understanding live performance and storytelling through music. His success as a producer with chart-topping hits informs his ability to create emotionally resonant projects.",
                            "Jason blends musical sensibility with expertise in visual storytelling, sound design, and scoring, with his music videos and content gaining millions of views for their cinematic quality. His technical proficiency in live shows and multimedia production allows him to craft immersive experiences, consistently pushing the boundaries of creative storytelling.",
                        ],
                        image: "/jason-boland-1.jpg",
                    },
                ]}
            />
            <ContentImage
                title="Jason Boland"
                imgAlign="right"
                content={[
                    "Jason Boland, the creative force behind Always Press Record, brings a unique perspective to production, shaped by his experience as a musician, producer, director, and technical visionary. As a member of Kodaline, he has toured globally, understanding live performance and storytelling through music. His success as a producer with chart-topping hits informs his ability to create emotionally resonant projects.",
                    "Jason blends musical sensibility with expertise in visual storytelling, sound design, and scoring, with his music videos and content gaining millions of views for their cinematic quality. His technical proficiency in live shows and multimedia production allows him to craft immersive experiences, consistently pushing the boundaries of creative storytelling.",
                ]}
                image="/jason-boland-2.jpeg"
            />
            <ContentImage
                title="Grace Cotter"
                imgAlign="left"
                content={[
                    "Grace is a dynamic creative producer with a passion for storytelling and extensive experience in documentary filmmaking and media production. She excels in research, scripting, and production, with a collaborative approach that ensures impactful content. Grace has worked on projects like Castro’s Spies, exploring Cuban espionage, and Junk Kouture, celebrating fashion and sustainability. Her expertise in cinematography, lighting, and sound design enhances the emotional depth of her work.",
                    "Having partnered with clients like Universal Music, Heineken, L’Oréal, and Diageo, Grace consistently delivers polished, tailored content, making her a valuable asset to any production team.",
                ]}
                image="/grace-cotter-2.jpeg"
            />
        </>
    );
}
