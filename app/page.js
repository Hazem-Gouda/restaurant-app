'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section">
          <Image
            src="/logo.png"
            alt="Gouda Restaurant Logo"
            width={200}
            height={250}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
          <h1>Welcome to Gouda Restaurant</h1>
          <p>Your go-to spot for delicious grilled meals and fast food favorites!</p>
        </section>
      </main>
    </>
  );
}
