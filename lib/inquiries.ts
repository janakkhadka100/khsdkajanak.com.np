export type InquiryType =
  | "media"
  | "collaboration"
  | "speaking"
  | "consultation"
  | "investor"
  | "general";

export type InquiryPayload = {
  inquiry_type: InquiryType;
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  budget_range?: string;
  message: string;
};

export type SaveInquiryResult =
  | { ok: true; id: string }
  | { ok: false; error: string };

export async function saveInquiry(
  data: InquiryPayload
): Promise<SaveInquiryResult> {
  try {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) {
      return { ok: false, error: json.error ?? "Something went wrong." };
    }
    return { ok: true, id: json.id ?? "received" };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Network error.";
    return { ok: false, error: message };
  }
}
