import { NextResponse } from "next/server";

const requiredFields = ["businessName", "contactName", "email", "phone", "orderType", "collectionDate", "collectionTime"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const missing = requiredFields.filter((field) => !String(body[field] ?? "").trim());
    if (missing.length) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.ORDER_TO_EMAIL;
    if (!apiKey || !to) {
      console.error("Order email is not configured. Add RESEND_API_KEY and ORDER_TO_EMAIL.");
      return NextResponse.json({ error: "Online orders are being configured. Please call (03) 5721 2496 for now." }, { status: 503 });
    }

    const itemLines = [
      ["Hot meat pies", body.meatPies], ["Party pies (dozens)", body.partyPiesDozens], ["Sausage rolls", body.sausageRolls],
      ["Mini sausage rolls (dozens)", body.miniSausageRollsDozens], ["Pasties", body.pasties], ["Sandwich rolls", body.sandwichRolls], ["Sweet slice boxes", body.sweetSliceBox],
    ].filter(([, value]) => Number(value) > 0).map(([label, value]) => `<li><strong>${label}:</strong> ${value}</li>`).join("");
    const html = `<h2>New Appin Street Bakery pre-order</h2><p><strong>${body.businessName}</strong> · ${body.orderType}</p><p><strong>Contact:</strong> ${body.contactName} · ${body.phone} · ${body.email}</p><p><strong>Collection:</strong> ${body.collectionDate} at ${body.collectionTime}</p><h3>Estimated quantities</h3><ul>${itemLines || "<li>No quantities entered</li>"}</ul><p><strong>Notes:</strong> ${body.notes || "None"}</p>`;

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "Appin Street Bakery <onboarding@resend.dev>", to: [to], reply_to: body.email, subject: `New pre-order: ${body.businessName}`, html }),
    });
    if (!resend.ok) {
      console.error("Resend rejected order email", await resend.text());
      return NextResponse.json({ error: "We couldn't send that order. Please call us instead." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Order submission failed", error);
    return NextResponse.json({ error: "We couldn't send that order. Please call us instead." }, { status: 500 });
  }
}
