"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type BookingModalProps = {
  variant?: "button" | "link";
  label?: string;
  style?: "yellow" | "black";
};

export function BookingModal({
  variant = "button",
  label = "Schedule a demo",
  style = "yellow",
}: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const buttonClass =
    style === "black"
      ? "bg-black text-yellow-300 hover:bg-gray-800"
      : "bg-yellow-300 text-black hover:bg-yellow-400";

  const iconColor = style === "black" ? "#FFD200" : "black";

  return (
    <>
      {variant === "button" ? (
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full px-5 py-2 cursor-pointer flex gap-3 items-center z-10 text-sm md:text-base font-semibold ${buttonClass}`}
        >
          <span>{label}</span>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.99999 20C1.44999 20 0.979157 19.8042 0.58749 19.4125C0.195824 19.0208 -9.76585e-06 18.55 -9.76585e-06 18V4C-9.76585e-06 3.45 0.195824 2.97917 0.58749 2.5875C0.979157 2.19583 1.44999 2 1.99999 2H2.99999V-4.76837e-07H4.99999V2H13V-4.76837e-07H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H1.99999ZM1.99999 18H16V8H1.99999V18ZM1.99999 6H16V4H1.99999V6ZM1.99999 6V4V6Z"
              fill={iconColor}
            />
          </svg>
        </Button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`rounded-full px-5 py-2 cursor-pointer flex gap-3 items-center z-10 text-sm md:text-base font-semibold ${buttonClass}`}
        >
          <span>{label}</span>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.99999 20C1.44999 20 0.979157 19.8042 0.58749 19.4125C0.195824 19.0208 -9.76585e-06 18.55 -9.76585e-06 18V4C-9.76585e-06 3.45 0.195824 2.97917 0.58749 2.5875C0.979157 2.19583 1.44999 2 1.99999 2H2.99999V-4.76837e-07H4.99999V2H13V-4.76837e-07H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H1.99999ZM1.99999 18H16V8H1.99999V18ZM1.99999 6H16V4H1.99999V6ZM1.99999 6V4V6Z"
              fill={iconColor}
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white rounded-2xl md:rounded-3xl w-full max-w-lg p-6 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {!isSubmitted ? (
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Schedule a demo
                  </h2>
                  <p className="text-muted text-sm">
                    Tell us about your project and we&apos;ll get back to you
                    shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-black"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl border border-border-light focus:border-yellow-300 focus:outline-none text-black"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-black"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl border border-border-light focus:border-yellow-300 focus:outline-none text-black"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-semibold text-black"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl border border-border-light focus:border-yellow-300 focus:outline-none text-black"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-black"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl border border-border-light focus:border-yellow-300 focus:outline-none text-black resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-2 bg-yellow-300 text-black font-semibold py-3 rounded-xl hover:bg-yellow-400 transition-colors"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="#22C55E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Thanks!</h2>
                <p className="text-muted">
                  We&apos;ve received your request and will be in touch soon.
                </p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      message: "",
                    });
                  }}
                  className="text-sm underline text-muted hover:text-black mt-2"
                >
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
