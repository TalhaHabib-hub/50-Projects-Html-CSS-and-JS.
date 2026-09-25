import { useSelector } from "react-redux";
import HomeItem from "../components/homeItems";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <>
      <section className="talon-hero" aria-labelledby="talon-hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">A little more you</p>
          <h1 id="talon-hero-title">
            Tal<span>On</span>
          </h1>
          <p className="hero-copy">Find the pieces that move with your mood.</p>
          <a className="hero-link" href="#collection">
            Explore the collection <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="hero-waves" aria-hidden="true">
          <span className="hero-wave hero-wave-one" />
          <span className="hero-wave hero-wave-two" />
          <span className="hero-wave hero-wave-three" />
        </div>
      </section>

      <div className="item-container" id="collection">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default Home;
