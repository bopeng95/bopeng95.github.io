import { Experience, Footer, FunEndeavors, Hero } from '@/components';

export function App() {
  return (
    <main className="min-h-svh overflow-x-clip">
      <div className="bg-background relative z-10 px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16">
        <Hero />
        <Experience />
        <FunEndeavors />
      </div>
      <Footer />
    </main>
  );
}
