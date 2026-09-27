import type { Metadata } from "next";
export const metadata: Metadata = { title: "Food" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Plate"}</p>
      <h1>{"Breakfast until noon, then a shorter lunch."}</h1>
      <p className="lede">{"We bake the pastry. The soup is made in the morning and not refreshed from a bag."}</p>
      <p>{"Gluten-free bread is available most days. Tell the counter. The kitchen is not a sealed allergen room."}</p>
      
      
      
      
    </article>
  );
}
