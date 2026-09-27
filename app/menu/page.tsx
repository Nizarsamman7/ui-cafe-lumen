import type { Metadata } from "next";
export const metadata: Metadata = { title: "Menu" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Counter"}</p>
      <h1>{"Everything we pour and plate."}</h1>
      <p className="lede">{"Oat milk is the default alternative. Decaf is on the batch brewer after 11:00."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Espresso"}</b><span>{"€2.60"}</span></div>
<div className="row"><b>{"Cortado"}</b><span>{"€3.10"}</span></div>
<div className="row"><b>{"Flat white"}</b><span>{"€3.80"}</span></div>
<div className="row"><b>{"Batch filter"}</b><span>{"€3.20"}</span></div>
<div className="row"><b>{"Tea"}</b><span>{"€3.00"}</span></div>
<div className="row"><b>{"Croissant"}</b><span>{"€2.90"}</span></div>
<div className="row"><b>{"Morning bun"}</b><span>{"€3.40"}</span></div>
<div className="row"><b>{"Granola"}</b><span>{"€7.50"}</span></div>
<div className="row"><b>{"Toast and jam"}</b><span>{"€4.20"}</span></div>
<div className="row"><b>{"Soup, from 11:30"}</b><span>{"€6.50"}</span></div>
</div>
      
      
    </article>
  );
}
