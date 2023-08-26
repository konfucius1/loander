import Hero from '@/components/home/hero'; // Import your Hero component
import Intro from '@/components/home/intro';
import '../App.css';

export function Home() {
  return (
    <div>
      <Hero /> {/*Hero component */}
      <div className="line"></div> {/* Black line */}
      <Intro /> {/* Intro component */}
    </div>
  );
}
