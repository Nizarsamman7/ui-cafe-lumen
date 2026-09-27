import type { Metadata } from "next";
export const metadata: Metadata = { title: "Visit" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Room"}</p>
      <h1>{"Twenty seats, a counter, and a bench outside when it is dry."}</h1>
      <p className="lede">{"Elandsstraat 41. Tram stop is two minutes. There is no reservation for a single coffee."}</p>
      <p>{"Laptops are welcome until noon. After that we keep tables for people eating. One plug per table, shared."}</p>
      
      
      
      
    </article>
  );
}
