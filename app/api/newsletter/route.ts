import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = { email?: string; name?: string };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  // Stub: log for now; later persist to Supabase or external provider
  console.info("[newsletter] subscribe", { email, name: body.name?.slice(0, 20) });

  return NextResponse.json({ ok: true }, { status: 200 });
}
