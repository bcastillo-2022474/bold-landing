export function CallToActionSection() {
  return (
    <section className="py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30 bg-[#F8F9FA] flex flex-col items-center">
      <div className="bg-black rounded-2xl md:rounded-3xl w-full md:w-4/5 flex flex-col md:aspect-1024/380 relative isolate justify-center items-center p-8 md:p-10 text-center gap-5">
        <div className="absolute w-1/4 aspect-square rounded-3xl bg-yellow-300/25 blur-[100px] right-0 top-0"></div>
        <h2 className="max-w-[21ch] text-3xl md:text-4xl lg:text-5xl font-bold text-white z-10">
          Ready to automate your Slack workspace?
        </h2>
        <button className="bg-yellow-300 rounded-full px-5 py-2 cursor-pointer flex gap-3 items-center z-10 text-sm md:text-base font-semibold">
          <span>Schedule a demo</span>
          <span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.99999 20C1.44999 20 0.979157 19.8042 0.58749 19.4125C0.195824 19.0208 -9.76585e-06 18.55 -9.76585e-06 18V4C-9.76585e-06 3.45 0.195824 2.97917 0.58749 2.5875C0.979157 2.19583 1.44999 2 1.99999 2H2.99999V-4.76837e-07H4.99999V2H13V-4.76837e-07H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H1.99999ZM1.99999 18H16V8H1.99999V18ZM1.99999 6H16V4H1.99999V6ZM1.99999 6V4V6Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
