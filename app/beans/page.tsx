import type { Metadata } from "next";
export const metadata: Metadata = { title: "Beans" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Bag"}</p>
      <h1>{"Take the coffee home."}</h1>
      <p className="lede">{"Bags are 250g from the roaster two streets away. We grind for filter, espresso, or leave them whole."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"House espresso"}</b><span>{"€9.50"}</span></div>
<div className="row"><b>{"Weekly filter"}</b><span>{"€11.00"}</span></div>
<div className="row"><b>{"Decaf"}</b><span>{"€10.00"}</span></div>
</div>
      
      
    </article>
  );
}
