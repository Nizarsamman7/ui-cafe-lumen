import Link from "next/link";

const coffee = [["Espresso", "2.60"], ["Cortado", "3.10"], ["Flat white", "3.80"], ["Batch filter", "3.20"]];
const kitchen = [["Butter croissant", "2.90"], ["Morning bun", "3.40"], ["Granola bowl", "7.50"], ["Toast and jam", "4.20"]];

export default function HomePage() {
  return (
    <>
      <header className="mast">
        <span className="mark">Lumen</span>
        <nav><Link href="/menu">Full menu</Link></nav>
      </header>
      <section className="stage">
        <p>Counter service · weekdays from 7:30</p>
        <h1>Coffee with the lights still low.</h1>
      </section>
      <section className="intro">
        <p>A twenty-seat room. Beans roasted two streets away. Laptops welcome until noon, then the tables turn over for lunch.</p>
        <p>Elandsstraat 41<br />Amsterdam<br />Mon–Fri 07:30–16:00<br />Sat 08:30–16:00</p>
      </section>
      <section className="menu">
        <div>
          <h2>Cup</h2>
          {coffee.map(([name, price]) => <div className="item" key={name}><span>{name}</span><span>{price}</span></div>)}
        </div>
        <div>
          <h2>Plate</h2>
          {kitchen.map(([name, price]) => <div className="item" key={name}><span>{name}</span><span>{price}</span></div>)}
        </div>
      </section>
    </>
  );
}
