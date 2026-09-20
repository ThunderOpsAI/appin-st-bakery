"use client";

import React, { useState } from "react";

export default function BulkOrderForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    orderType: "Work Crew Smoko Box",
    collectionDate: "",
    collectionTime: "06:30 AM",
    meatPies: 0,
    partyPiesDozens: 0,
    sausageRolls: 0,
    miniSausageRollsDozens: 0,
    pasties: 0,
    sandwichRolls: 0,
    sweetSliceBox: 0,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [dateError, setDateError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "collectionDate") setDateError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!formData.collectionDate) {
      setDateError("Please select a collection date.");
      return;
    }

    const selectedDate = new Date(formData.collectionDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      setDateError("Please select a date at least 1 day in advance.");
      return;
    }

    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0) {
      // 0 is Sunday
      setDateError("The bakery is CLOSED on Sundays. Please select Monday to Saturday.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong.");
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We couldn't send that order. Please call us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-8 rounded-2xl text-center max-w-2xl mx-auto shadow-sm">
        <span className="text-4xl mb-3 block">🥧</span>
        <h3 className="text-2xl font-black mb-2 text-emerald-950">Pre-Order Received!</h3>
        <p className="text-emerald-800 text-sm leading-relaxed mb-6">
          Thanks <strong>{formData.contactName}</strong>! We have received your bulk order request for{" "}
          <strong>{formData.orderType}</strong> on{" "}
          <strong>{formData.collectionDate} at {formData.collectionTime}</strong>.
          We will phone you at <strong>{formData.phone}</strong> to confirm exact items and total price. Payment is upon collection.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-bold">
          <a
            href="tel:0357212496"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl transition shadow"
          >
            📞 Call (03) 5721 2496
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 border border-emerald-600 text-emerald-800 hover:bg-emerald-100 rounded-xl transition"
          >
            Submit Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6 bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-amber-200/80"
    >
      <div className="border-b border-amber-100 pb-4">
        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
          Tradie Smoko &amp; Club Orders
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-amber-950">
          Smoko Box &amp; Bulk Pre-Order
        </h3>
        <p className="text-stone-600 text-xs sm:text-sm mt-1">
          Beat the morning queue. Order the day prior and collect piping hot from <strong>6:30 AM</strong>. For clubs, schools, or catering platters, please order 24–48 hours in advance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Business / Club / Group Name
          </label>
          <input
            required
            type="text"
            name="businessName"
            placeholder="e.g. Wangaratta Rovers FC / Smith Plumbing"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Contact Person Name *
          </label>
          <input
            required
            type="text"
            name="contactName"
            placeholder="e.g. Dave Miller"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Contact Phone Number *
          </label>
          <input
            required
            type="tel"
            name="phone"
            placeholder="e.g. 0412 345 678"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Email Address *
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="e.g. dave@example.com.au"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Occasion / Order Type *
          </label>
          <select
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white"
          >
            <option value="Work Crew Smoko Box">Work Crew Smoko Box</option>
            <option value="Footy / Netball Club">Footy / Netball Club Canteen</option>
            <option value="Cricket Club / Sports Match">Cricket Club / Weekend Match</option>
            <option value="School Carnival / Fundraiser">School Carnival / Fundraiser</option>
            <option value="Corporate / Office Lunch">Corporate / Office Lunch</option>
            <option value="Private Family Function">Private Family Function</option>
            <option value="Other Bulk Pre-Order">Other Bulk Pre-Order</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Collection Date *
          </label>
          <input
            required
            type="date"
            name="collectionDate"
            value={formData.collectionDate}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
          />
          {dateError && <p className="text-red-600 text-xs font-semibold mt-1">{dateError}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Pickup Time (From 6:30am)
          </label>
          <select
            name="collectionTime"
            value={formData.collectionTime}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white"
          >
            <option value="06:30 AM">06:30 AM (Doors Open)</option>
            <option value="07:00 AM">07:00 AM</option>
            <option value="07:30 AM">07:30 AM</option>
            <option value="08:00 AM">08:00 AM</option>
            <option value="09:00 AM">09:00 AM (Morning Smoko)</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="12:00 PM">12:00 PM (Lunch)</option>
            <option value="Afternoon">Afternoon (Before 5:30pm Mon-Fri)</option>
          </select>
        </div>
      </div>

      {/* Item Quantities */}
      <div className="border-t border-amber-100 pt-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base font-bold text-stone-900">Estimated Quantities Needed</h4>
          <span className="text-xs text-stone-500">Enter approximate numbers</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70">
            <label className="block text-xs font-semibold text-stone-800 mb-1">Hot Meat Pies (qty)</label>
            <input
              type="number"
              min="0"
              name="meatPies"
              value={formData.meatPies}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg p-2 text-sm text-center font-bold"
            />
          </div>

          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70">
            <label className="block text-xs font-semibold text-stone-800 mb-1">Party Pies (doz)</label>
            <input
              type="number"
              min="0"
              name="partyPiesDozens"
              value={formData.partyPiesDozens}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg p-2 text-sm text-center font-bold"
            />
          </div>

          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70">
            <label className="block text-xs font-semibold text-stone-800 mb-1">Sausage Rolls (qty)</label>
            <input
              type="number"
              min="0"
              name="sausageRolls"
              value={formData.sausageRolls}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg p-2 text-sm text-center font-bold"
            />
          </div>

          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70">
            <label className="block text-xs font-semibold text-stone-800 mb-1">Mini Rolls (doz)</label>
            <input
              type="number"
              min="0"
              name="miniSausageRollsDozens"
              value={formData.miniSausageRollsDozens}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg p-2 text-sm text-center font-bold"
            />
          </div>

          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70">
            <label className="block text-xs font-semibold text-stone-800 mb-1">Pasties (qty)</label>
            <input
              type="number"
              min="0"
              name="pasties"
              value={formData.pasties}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg p-2 text-sm text-center font-bold"
            />
          </div>

          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70">
            <label className="block text-xs font-semibold text-stone-800 mb-1">Sandwich Rolls (qty)</label>
            <input
              type="number"
              min="0"
              name="sandwichRolls"
              value={formData.sandwichRolls}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg p-2 text-sm text-center font-bold"
            />
          </div>

          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70 sm:col-span-2">
            <label className="block text-xs font-semibold text-stone-800 mb-1">Sweet Slice Boxes (qty)</label>
            <input
              type="number"
              min="0"
              name="sweetSliceBox"
              value={formData.sweetSliceBox}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg p-2 text-sm text-center font-bold"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-amber-100 pt-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
          Special Notes &amp; Dietary Requests
        </label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="e.g. Extra sauce squeeze bottles, pack separately in boxes of 6, specific pie flavours (Stockman, Lamb & Rosemary)..."
          className="w-full border border-stone-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-500">
          Prefer to phone? Call <a href="tel:0357212496" className="font-bold underline text-amber-800">(03) 5721 2496</a>
        </p>
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-black text-sm rounded-xl shadow-md transition-all active:scale-95"
        >
          {isSubmitting ? "Sending request…" : "Submit Smoko / Bulk Order"}
        </button>
        {submitError && <p role="alert" className="text-xs font-semibold text-red-700 sm:max-w-xs">{submitError}</p>}
      </div>
    </form>
  );
}
