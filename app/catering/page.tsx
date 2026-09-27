import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Catering" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Trays"}</p>
      <h1>{"Coffee and pastry for a meeting."}</h1>
      <p className="lede">{"Order before 15:00 for the next morning. We deliver inside the ring by bike."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Flask and cups"}</h2><p>{"Eight cups. €28."}</p></article>
<article className="panel"><h2>{"Pastry box"}</h2><p>{"Ten pieces. €32."}</p></article>
<article className="panel"><h2>{"Both"}</h2><p>{"€55, including a return of the flask."}</p></article>
</div>
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"email","label":"Email","type":"email"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
