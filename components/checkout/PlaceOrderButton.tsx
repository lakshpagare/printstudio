"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function PlaceOrderButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    setLoading(true);

    // Future:
    // 1. Validate address
    // 2. Create order API
    // 3. Process payment
    // 4. Save order in DB

    await new Promise((resolve) => setTimeout(resolve, 1500));

    router.push("/order-success");
  };

  return (
    <button
      type="button"
      disabled={loading}
      onClick={handlePlaceOrder}
      className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          Placing Order...
        </span>
      ) : (
        "Place Order"
      )}
    </button>
  );
}