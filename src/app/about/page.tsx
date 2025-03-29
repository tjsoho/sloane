"use client";
import AboutCardLeft from "../components/AboutCardLeft";
import { Reveal } from "../components/Animations/Reveal";
import { SlideReveal } from "../components/Animations/SlideReveal";
import { SlideReveal2 } from "../components/Animations/SlideReveal2";
import { motion } from "framer-motion";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FavoriteIcon from '@mui/icons-material/Favorite';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-brand-cream">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/aboutUsHero.jpg"
            alt="Founders Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-Archivo text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              Meet the Founders
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-2xl font-Raleway text-xl text-white/90 md:text-2xl"
          >
            Where Mindful Business Meets AI-Powered Ease
          </motion.p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-brand-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px] overflow-hidden rounded-3xl"
          >
            <img
              src="/images/story.jpg"
              alt="Founders Introduction"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 h-12 w-1 bg-brand-green-dark" />
              <h2 className="font-Archivo text-3xl font-bold text-brand-green-dark md:text-4xl">
                Our Story
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="font-Raleway text-lg leading-relaxed text-brand-green-dark/80 md:text-xl">
                Toby & Rachel didn't just create an Ai assistant; they created a solution born from their own experiences juggling multiple businesses and a burning desire to make life easier, embrace freedom, and provide more time to focus on what they truly love.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="font-Raleway text-lg leading-relaxed text-brand-green-dark/80 md:text-xl">
                Their stories are as inspiring as they are relatable, showcasing how a simple desire to simplify business life led to the creation of Sloane.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="font-Raleway text-lg leading-relaxed text-brand-green-dark/80 md:text-xl">
                Let's delve into their individual journeys and discover how their personal experiences shaped Sloane's.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Toby's Section */}
      <div className="bg-brand-green px-4 py-24 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
       
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="font-Archivo text-4xl font-bold text-brand-cream md:text-5xl">
                Meet <span className="text-brand-logo">Toby</span>
              </h2>
              <h3 className="mt-2 font-Archivo text-lg text-brand-cream/90 md:text-xl">
                The Mastermind Behind Sloane
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-6"
            >
              <p className="font-Poppins text-sm text-brand-cream/90">
                Toby's journey to founding Sloane has its roots in his extensive background as a musician. Playing every instrument since the age of four, he later owned a successful music company specialising in events and weddings. He also created a music school, managing a staff of ten teachers and 300 students. This diverse array of experiences has given Toby a unique perspective and an innate understanding of both creativity and business management.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-6"
            >
              <p className="font-Poppins text-sm text-brand-cream/90">
                What specifically motivates Toby in his work with Sloane is his lifelong passion for learning and his desire to empower others. Toby loves discovering new capabilities and is excited to share these insights with business owners. When he crafted Sloane, his vision was to make complex business tasks simple and fun, granting owners the ability to achieve more than they ever thought possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-6"
            >
              <p className="font-Poppins text-sm text-brand-cream/90">
                Known for his playful personality and love for tech, Toby's working style is characterised by constant innovation and a deep commitment to education. He believes that business can be made not only easier but also enjoyable, ultimately giving owners more time for the things they love.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, margin: "-100px" }}
                className="mt-6"
              >
                <p className="font-Poppins text-sm text-brand-cream/90">
                  Clients and colleagues often marvel at Toby's insight and guidance, with one testimonial standing out: "OMG, I need you as my business coach. You've given me what I've always wanted in my business—another me."
                </p>
              </motion.div>
            </motion.div>
          </div>
              <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] overflow-hidden rounded-3xl"
          >
            <img
              src="/images/tj.jpg"
              alt="Toby"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="bg-brand-cream px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl">
            {/* Animated Border */}
            <span>
              <span
                className="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
              />
            </span>
            {/* Content Background */}
            <span className="absolute inset-px rounded-xl bg-[linear-gradient(110deg,#1a472a,45%,#2d5a3f,55%,#1a472a)] bg-[length:200%_100%]" />
            {/* Content */}
            <div className="relative z-10 p-6">
              <div className="relative flex flex-col items-center gap-3">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <LocalCafeIcon className="text-3xl text-white" />
                </div>
                <h3 className="text-center font-Archivo text-lg font-bold text-white">Coffee Choice</h3>
                <p className="text-center font-Raleway text-xs leading-relaxed text-white/80">
                  Toby's a double-shot cappuccino kind of guy (almond milk, please!), while Rachel swears by her coconut cold brew.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            {/* Animated Border */}
            <span>
              <span
                className="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
              />
            </span>
            {/* Content Background */}
            <span className="absolute inset-px rounded-xl bg-[linear-gradient(110deg,#1a472a,45%,#2d5a3f,55%,#1a472a)] bg-[length:200%_100%]" />
            {/* Content */}
            <div className="relative z-10 p-6">
              <div className="relative flex flex-col items-center gap-3">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <FavoriteIcon className="text-3xl text-white" />
                </div>
                <h3 className="text-center font-Archivo text-lg font-bold text-white">Business Partners + Lovers</h3>
                <p className="text-center font-Raleway text-xs leading-relaxed text-white/80">
                  Seven years married, and after two previous business ventures (let's just say we learned a lot), Sloane is where we finally found our individual zones of genius AND our flow state. It's the best of both worlds!
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            {/* Animated Border */}
            <span>
              <span
                className="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
              />
            </span>
            {/* Content Background */}
            <span className="absolute inset-px rounded-xl bg-[linear-gradient(110deg,#1a472a,45%,#2d5a3f,55%,#1a472a)] bg-[length:200%_100%]" />
            {/* Content */}
            <div className="relative z-10 p-6">
              <div className="relative flex flex-col items-center gap-3">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <WbSunnyIcon className="text-3xl text-white" />
                </div>
                <h3 className="text-center font-Archivo text-lg font-bold text-white">Sunshine State of Mind</h3>
                <p className="text-center font-Raleway text-xs leading-relaxed text-white/80">
                  Living a holiday-at-home style life on the sunny Gold Coast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rachel's Section */}
      <div className="bg-brand-green px-4 py-24 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="font-Archivo text-4xl font-bold text-brand-cream md:text-5xl">
                Meet <span className="text-brand-logo">Rachel</span>
              </h2>
              <h3 className="mt-2 font-Archivo text-lg text-brand-cream/90 md:text-xl">
                The Vibrant Force Behind Sloane's Brand
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-6"
            >
              <p className="font-Poppins text-sm text-brand-cream/90">
                With an extensive background in brand marketing, Rachel honed her skills working at Red Bull International for over 12 years. After travelling the world in business class style, she returned to her true passion—photography & film. Today, Rachel runs her own successful photography business, capturing up to 100 weddings a year with a team of six. She also specialises in editorial style photography for personal brands.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-6"
            >
              <p className="font-Poppins text-sm text-brand-cream/90">
                Rachel's journey with Sloane began when she was managing everything for her businesses on her own. Her experience at Red Bull made her realise the power of a cohesive team, and when Toby introduced her to Sloane, she was blown away by how it simplified and scaled her business. It gave her not only the efficiency she craved but also the free time she needed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-6"
            >
              <p className="font-Poppins text-sm text-brand-cream/90">
                For someone as visual as Rachel, Sloane's ability to handle words in seconds was a game-changer. Now, she is passionate about bringing this ease to other business owners with limited budgets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-6"
            >
              <p className="font-Poppins text-sm text-brand-cream/90">
                Always a bright and vibrant presence, Rachel is known for her sunny disposition and love for living well in a holiday at home surrounding. Creating, wellness and freedom are everything to her, and she embodies these values in her work at Sloane. Her infectious smile and positive attitude make her a true ray of sunshine in the business world.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] overflow-hidden rounded-3xl"
          >
            <img
              src="/images/rc.jpg"
              alt="Rachel"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
