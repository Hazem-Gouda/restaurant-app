import menu1 from '../../assets/menu1.jpg';
import menu2 from '../../assets/menu2.jpg';

// Menu page: Shows menu images
const Menu = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4" style={{ color: 'var(--brand-accent)', fontWeight: 'bold' }}>Our Menu</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          <img src={menu1} alt="Menu Page 1" className="img-fluid rounded shadow" />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <img src={menu2} alt="Menu Page 2" className="img-fluid rounded shadow" />
        </div>
      </div>
    </section>
  );
};

export default Menu; 