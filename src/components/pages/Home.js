import logo from "../../assets/logo.png";

// Home page: Hero section with logo and welcome message
const Home = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center home-hero-section">
      <img
        src={logo}
        alt="Gouda Restaurant Logo"
        width="280"
        height="250"
        className="mb-4 mx-auto"
        style={{ borderRadius: "50%", border: "6px solid var(--brand-accent)" }}
      />
      <h1
        className="mb-3"
        style={{ color: "var(--brand-accent)", fontWeight: "bold" }}
      >
        Welcome to Gouda Restaurant
      </h1>
      <p style={{ maxWidth: 500, fontSize: "1.2rem", margin: "0 auto" }}>
        Your go-to spot for delicious grilled meals and fast food favorites!
      </p>
    </section>
  );
};

export default Home;
