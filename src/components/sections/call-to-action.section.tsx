import {Button} from "@/components/ui/button";
import Image from "next/image";
import plant from "../../../public/plant.svg";

export function CallToActionSection() {
    return (
        <section className="flex flex-col items-center py-20 w-full gap-5 px-30 bg-[#F8F9FA]">
            <h1 className="text-3xl font-bold leading-tight flex flex-col">
                <span>Build Faster</span>
                <span>Scale Faster</span>
            </h1>
            <p className="text-center text-[#6B7280] items-center max-w-[60ch]">
                Custom Slack apps that automate your workflows — delivered through
                a simple monthly subscription. No contracts. No per-project chaos.
            </p>
            <div className="flex justify-around max-w-[60ch] gap-5">
                <Button className="flex gap-2 items-center text-yellow-300 cursor-pointer">
                    <span>Start Building</span>
                    <span>?</span>
                </Button>
                <Button className="text-black bg-white border-3 cursor-pointer">
                    <span>See it in action</span>
                </Button>
            </div>
            <Image src={plant} alt="Plant Image" width={800} className="shadow-2xl rounded-2xl mt-10" />
        </section>
    )
}