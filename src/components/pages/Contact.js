import { useSelector, useDispatch } from "react-redux";
import { setForm, submitForm } from "../../store/contactSlice";

// Contact page: Info and contact form
const Contact = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.contact.form);
  const submitted = useSelector((state) => state.contact.submitted);

  const handleChange = (e) => {
    dispatch(setForm({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  return (
    <section className="container py-5">
      <h2
        className="text-center mb-4"
        style={{ color: "var(--brand-accent)", fontWeight: "bold" }}
      >
        Contact Us
      </h2>
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6 text-center">
          <p>
            <strong>Phone & Delivery number:</strong>{" "}
            <a
              href="tel:+201021887030"
              style={{ color: "var(--brand-accent)" }}
            >
              +201021887030
            </a>
          </p>
          <p>
            <strong>Location:</strong> Sherbin, Dakahlia, Egypt
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a
              href="https://www.facebook.com/gouda.restaurant"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1877f3", fontSize: "2rem" }}
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://wa.me/201021887030"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25d366", fontSize: "2rem" }}
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          {submitted && (
            <div className="alert alert-success" role="alert">
              Thank you for contacting us! We will get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="2"
                style={{ minHeight: "96px", resize: "vertical" }}
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                background: "var(--brand-accent)",
                color: "var(--brand-dark)",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
