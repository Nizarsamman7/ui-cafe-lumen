import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hours" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Open"}</p>
      <h1>{"The door."}</h1>
      <p className="lede">{"The kitchen stops 30 minutes before close. Coffee is poured until the last seat leaves."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Monday–Friday"}</b><span>{"07:30–16:00"}</span></div>
<div className="row"><b>{"Saturday"}</b><span>{"08:30–16:00"}</span></div>
<div className="row"><b>{"Sunday"}</b><span>{"09:00–15:00"}</span></div>
</div>
      
      
    </article>
  );
}
