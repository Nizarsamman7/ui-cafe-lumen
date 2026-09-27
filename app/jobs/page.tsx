import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Jobs" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Bar"}</p>
      <h1>{"We hire baristas who can talk and clean."}</h1>
      <p className="lede">{"Weekend shifts and one opening shift. Write with where you have worked, not a slogan."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"email","label":"Email","type":"email"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
