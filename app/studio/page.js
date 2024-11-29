import Content from "../components/organisms/Content";

export default function Studio() {
    return (
        <Content
            title="Dolby Atmos Post-Production Studio"
            contentArray={[
                {
                    type: "paragraph",
                    content:
                        "Elevate your longform content with immersive Dolby Atmos mixing in our premium post-production facility. Our 7.1.6 speaker configuration delivers precise spatial audio monitoring for streaming, broadcast, and theatrical releases.",
                },
                {type: "header", content: "Studio Highlights:"},
                {
                    type: "list",
                    content: [
                        {
                            name: "Full Dolby Atmos mixing and monitoring capabilities",
                        },
                        {
                            name: "Professional 7.1.6 speaker system for accurate immersive audio",
                        },
                        {
                            name: "Spacious control room optimized for critical listening",
                        },
                        {
                            name: "Acoustically-treated vocal booth for ADR and voice-over",
                        },
                        {
                            name: "Professional synthesizer collection and upright piano for scoring",
                        },
                        {
                            name: "Integrated editing suite for seamless post-production workflow",
                        },
                    ],
                },
                {type: "header", content: "Specializing in Longform Content:"},
                {
                    type: "list",
                    content: [
                        {name: "Series & Television"},
                        {name: "Feature Films"},
                        {name: "Documentary"},
                        {name: "Limited Series"},
                        {name: "Premium Streaming Content"},
                    ],
                },
                {
                    type: "header",
                    content:
                        "Our comprehensive facility handles complete post-production audio workflow including:",
                },
                {
                    type: "list",
                    content: [
                        {name: "Dolby Atmos Mixing"},
                        {name: "5.1/7.1 Surround Mixing"},
                        {name: "ADR Recording"},
                        {name: "Sound Design"},
                        {name: "Dialogue Editing"},
                        {name: "Music Editing & Mixing"},
                        {name: "Final Mixing & Deliverables"},
                    ],
                },
            ]}
        />
    );
}
