"use client";

import AddressForm from "./AddressForm";
import PaymentMethods from "./PaymentMethods";
import PlaceOrderButton from "./PlaceOrderButton";

export default function CheckoutForm() {
  return (
    <div className="space-y-8">
      <AddressForm />

      <PaymentMethods />

      <PlaceOrderButton />
    </div>
  );
}