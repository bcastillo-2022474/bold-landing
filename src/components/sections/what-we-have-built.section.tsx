import Image from 'next/image'
import IconBot from "../../../public/icons/bot.svg"
import IconCalculator from "../../../public/icons/calculator.svg"
import IconHammer from "../../../public/icons/hammer.svg"
import {cn} from "@/utils/cn";

type Card = {
    title: string,
    image: string,
    description: string,
    altImage: string,
    route: string,
}

function RightIcon() {
    return (
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 14L11.575 12.6L16.175 8H5.96046e-08V6H16.175L11.6 1.4L13 -4.76837e-07L20 7L13 14Z" fill="#FFD200"/>
        </svg>
    )
}

function Card(card: Card) {
    const onHover = "hover:bg-linear-to-br hover:from-yellow-300 hover:to-orange-400"
    const normal = "bg-[#6B7280]/30"

    return (
        <article
            className={cn("flex rounded-3xl p-0.75 aspect-19/15", normal, onHover)}>
            <div className="bg-white p-10 flex flex-col items-start gap-5 w-full rounded-[calc(1.5rem-3px)]">
                <Image alt={card.altImage} src={card.image} width={50}/>
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="text-sm text-[#6B7280]">{card.description}</p>
                <a className="text-yellow-300 underline flex items-center gap-3 hover:scale-110" href={card.route}>
                    <span>Case Study</span>
                    <span><RightIcon /></span>
                </a>
            </div>
        </article>
    )
}


export function WhatWeHaveBuiltSection() {
    const cards: Card[] = [
        {
            title: "Onboarding Bot",
            description: "A seamless HR experience that greets new hires, assigns mentors, and collects documents automatically.",
            image: IconBot,
            altImage: "Bot Icon",
            route: "#",
        },
        {
            title: "CAC Calculator with AI",
            description: "Marketing dashboard in Slack that pulls data from Ads and Stripe to calculate live unit economics.",
            image: IconCalculator,
            altImage: "Calculator Icon",
            route: "#",
        },
        {
            title: "Legal Case Workflow",
            description: "End-to-end case management from intake forms to document generation, all triggered within threads.",
            image: IconHammer,
            altImage: "Hammer Icon",
            route: "#",
        }

    ]

    return (
        <section className="flex flex-col gap-10 px-30 items-center">
            <h2 className="font-grotesk text-3xl font-bold">What we've built</h2>
            <div className="flex gap-20">
                {cards.map((card: Card) => (
                    <Card
                        key={card.title}
                        route={card.route}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        altImage={card.altImage}
                    />
                ))}
            </div>
        </section>
    )
}