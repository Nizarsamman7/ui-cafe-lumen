import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Counter"}</p>
      <h1>{"Short answers."}</h1>
      <p className="lede">{"Wifi is on the receipt. The password changes when it leaks to the street."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Do you take reservations?"}</summary><p>{"No, except private hire after close."}</p></details>
<details className="panel"><summary>{"Oat milk?"}</summary><p>{"Yes. It is the same price."}</p></details>
<details className="panel"><summary>{"Children?"}</summary><p>{"Yes. The bench is the easier seat."}</p></details>
<details className="panel"><summary>{"Cards?"}</summary><p>{"Yes. We prefer them to a handful of coins at 8:00."}</p></details>
</div>
      
    </article>
  );
}
