import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const data = await resend.contacts.create({
      email: `${email}`,
      firstName: "Guillaume",
      lastName: "Beli",
      unsubscribed: false,
      audienceId: "8fa45722-faae-42d4-a633-5968af7bffe5",
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
