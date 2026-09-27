import type { Metadata } from "next";
export const metadata: Metadata = { title: "Coffee" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Cup"}</p>
      <h1>{"How we make it."}</h1>
      <p className="lede">{"Espresso is a house blend. Filter changes with the roaster's weekly lot and is written on the board."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Espresso"}</h2><p>{"Short, no sugar on the saucer unless you ask."}</p></article>
<article className="panel"><h2>{"Milk"}</h2><p>{"Cortado, flat white, and a cappuccino we do not hide under foam."}</p></article>
<article className="panel"><h2>{"Filter"}</h2><p>{"One brew at a time. When the pot is gone, we brew the next."}</p></article>
</div>
      
      
      
    </article>
  );
}
