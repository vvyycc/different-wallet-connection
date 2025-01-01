import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white p-4">
        <h1 className="text-3xl font-bold">Chi-Kung Online</h1>
      </header>
      <main className="p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">About Qi-Gong</h2>
          <p>
            Qi-Gong, also known as Chi-Kung, is an ancient Chinese practice 
            that combines physical postures, breathing techniques, and 
            focused intention. The practice of Qi-Gong is deeply rooted in 
            the philosophy of TAO, focusing on the balance and harmony 
            between humans and nature.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">History</h2>
          <p>
            The history of Qi-Gong dates back thousands of years, with its 
            origins in ancient Chinese medicine, philosophy, and martial arts. 
            It has been used for health, spiritual cultivation, and martial 
            prowess.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Philosophy of TAO</h2>
          <p>
            The philosophy of TAO emphasizes living in harmony with the TAO 
            (the Way), which is the fundamental principle that is the source 
            of everything in the universe. Qi-Gong practice aims to align 
            the body and mind with this principle.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image src="/images/qi-gong-1.jpg" alt="Qi-Gong Image 1" width={500} height={300} className="rounded"/>
            <Image src="/images/qi-gong-2.jpg" alt="Qi-Gong Image 2" width={500} height={300} className="rounded"/>
            <Image src="/images/qi-gong-3.jpg" alt="Qi-Gong Image 3" width={500} height={300} className="rounded"/>
          </div>
        </section>
      </main>
      <footer className="bg-green-500 text-white p-4 text-center">
        <p>© 2025 Chi-Kung Online. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;