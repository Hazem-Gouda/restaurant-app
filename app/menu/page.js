'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Menu() {
  return (
    <>
      <Navbar />
      <main>
        <section className="menu-section">
          <h1>Our Menu</h1>
          <div className="menu-grid">
            <div className="menu-item">
              <Image
                src="/menu1.jpg"
                alt="Menu page 1"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="menu-item">
              <Image
                src="/menu2.jpg"
                alt="Menu page 2"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
