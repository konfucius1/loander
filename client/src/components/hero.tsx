import { Button } from '@/components/ui/button';
// Import App.css for styling purposes
import '../App.css';

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">Swipe Cash</h1>
      <p className="tagline">Connecting Lenders and Borrowers, Instantly!</p>
      <Button>Get Started Today</Button>
    </div>
  );
}

export { default as Hero } from './hero';
