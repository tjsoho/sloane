'use client';

import Hero from './Hero';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
const Home: React.FC = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 5000); // Show popup after 5 seconds

  //   return () => clearTimeout(timer); // Cleanup the timer on component unmount
  // }, []);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <main className="w-full">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </main>
  );
};

export default Home;
