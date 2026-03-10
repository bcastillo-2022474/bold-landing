import { BookingModal } from "@/components/booking-modal";

export function CallToActionSection() {
  return (
    <section className="py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30 bg-section-bg flex flex-col items-center">
      <div className="bg-black rounded-2xl md:rounded-3xl w-full md:w-4/5 flex flex-col md:aspect-1024/380 relative isolate justify-center items-center p-8 md:p-10 text-center gap-5">
        <div className="absolute w-1/4 aspect-square rounded-3xl bg-yellow-300/25 blur-[100px] right-0 top-0"></div>
        <h2 className="max-w-[21ch] text-3xl md:text-4xl lg:text-5xl font-bold text-white z-10">
          Ready to automate your Slack workspace?
        </h2>
        <BookingModal variant="button" />
      </div>
    </section>
  );
}
