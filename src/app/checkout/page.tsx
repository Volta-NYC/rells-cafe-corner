import { redirect } from "next/navigation";
import { DOORDASH_DELIVERY_URL } from "@/lib/doordash";

export default function CheckoutPage() {
  redirect(DOORDASH_DELIVERY_URL);
}
