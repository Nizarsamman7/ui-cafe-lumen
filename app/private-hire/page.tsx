import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Private hire" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Room"}</p>
      <h1>{"The room after close, for up to twenty people."}</h1>
      <p className="lede">{"Evenings Wednesday to Saturday. You get the counter, a barista, and a set menu. Not a DJ."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Ask for an evening"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"date","label":"Date"},{"name":"note","label":"What the evening is","type":"textarea"}]} />
    </article>
  );
}
