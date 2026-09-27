import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"House"}</p>
      <h1>{"A small room that opens early."}</h1>
      <p className="lede">{"Lumen is run by two people and a short list of part-time baristas. The beans are roasted nearby so we can walk back a bad bag."}</p>
      <p>{"We are not a chain and we do not franchise the name."}</p>
      
      
      
      
    </article>
  );
}
