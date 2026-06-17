import { BookingModal } from "@/components/booking-modal";

export function BlogCtaCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mt-4 p-6 rounded-[32px] bg-black text-white flex flex-col gap-3 items-center text-center">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-400 text-sm max-w-[50ch]">{description}</p>
      <BookingModal variant="link" label="Book a Call" style="yellow" />
    </div>
  );
}
