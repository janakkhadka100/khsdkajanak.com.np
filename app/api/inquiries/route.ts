import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Supabase schema (when ready): inquiries (id uuid primary key, inquiry_type text, name text, email text, organization text, phone text, budget_range text, message text, created_at timestamptz default now())

const VALID_TYPES = [
  "media",
  "collaboration",
  "speaking",
  "consultation",
  "investor",
  "general",
] as const;

type Body = {
  inquiry_type?: string;
  name?: string;
  email?: string;
  organization?: string;
  phone?: string;
  budget_range?: string;
  message?: string;
};

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

  const { inquiry_type, name, email, message } = body;

  if (!inquiry_type || !VALID_TYPES.includes(inquiry_type as (typeof VALID_TYPES)[0])) {
    return NextResponse.json(
      { error: "Valid inquiry_type is required." },
      { status: 400 }
    );
  }
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { error: "Name is required." },
      { status: 400 }
    );
  }
  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 }
    );
  }

  // Supabase: when NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY exist,
  // insert into inquiries table. For now stub: log and return 201.
  const id = crypto.randomUUID ? crypto.randomUUID() : `inq-${Date.now()}`;
  console.info("[inquiries] received", {
    id,
    inquiry_type: body.inquiry_type,
    email: body.email?.slice(0, 3) + "***",
  });

  return NextResponse.json({ id }, { status: 201 });
}
