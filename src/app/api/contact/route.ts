import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, services, message } = body;

    if (!name || !email || !company || !services || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const response = await fetch(
      `https://api.tally.so/api/forms/${process.env.TALLY_FORM_ID ?? "44GD1d"}/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.TALLY_API_KEY
            ? { Authorization: `Bearer ${process.env.TALLY_API_KEY}` }
            : {}),
        },
        body: JSON.stringify({
          fields: {
            name,
            email,
            company,
            services,
            message,
          },
        }),
      },
    );

    if (!response.ok) {
      console.error("Tally submission failed:", await response.text());
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
