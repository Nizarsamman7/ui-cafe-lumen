import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <>
      <header className="mast">
        <Link className="mark" href="/">Lumen</Link>
        <nav><Link href="/">Room</Link></nav>
      </header>
      <section className="pad">
        <h1>Catering and questions</h1>
        <p>The counter menu lives on the home page. Use this form for a tray of coffee or a private morning.</p>
        <InquiryForm
          submitLabel="Ask Lumen"
          fields={[
            { name: "name", label: "Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "need", label: "What do you need?", type: "textarea" },
          ]}
        />
      </section>
    </>
  );
}
