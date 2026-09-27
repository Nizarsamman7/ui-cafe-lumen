import type { Metadata } from "next";
export const metadata: Metadata = { title: "Gallery" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Light"}</p>
      <h1>{"The room, in words until you add photos."}</h1>
      <p className="lede">{"Morning is the window bench. Midday is the counter. Afternoon is quieter and the filter is whatever is left."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Window"}</h2><p>{"Four seats, best before 10:00."}</p></article>
<article className="panel"><h2>{"Counter"}</h2><p>{"Where the milk pitchers live."}</p></article>
<article className="panel"><h2>{"Back table"}</h2><p>{"The one people try to reserve. They cannot."}</p></article>
</div>
      
      
      
    </article>
  );
}
