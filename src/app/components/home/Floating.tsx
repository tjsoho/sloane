"use client";
import { Reveal } from "../Animations/Reveal";
import Button2 from "../Button2";
import { motion } from "framer-motion";

const Floating = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const randomScale = () => 0.8 + Math.random() * 0.3; // Random scale between 0.8 and 1.3

  return (
    <div className="bg-brand-green flex h-full w-full py-8 lg:py-32">
      <div className="mx-auto flex max-w-[1240px] 2xl:max-w-[1540px] flex-col items-center justify-center">
        {/* row 1 */}
        <div className="my-6 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-4"
          >
            <Button2
              title="Your go-to for all how-to's"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Product Ideation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
        </div>
        {/* row 2 */}
        <div className="my-6 flex">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Business Planning"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Client Communications"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Marketing Strategies"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
        </div>
        {/* row 3 */}
        <div className="mt-12 flex">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Blog Ideas"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="SEO"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
        </div>
        {/* main row */}
        <div className="my-6 flex w-full items-center justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-32"
          >
            <Button2
              title="Social Media Captions"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            <Reveal>
              <div>
            <h3 className="text-brand-cream text-[64px] leading-none lg:text-[98px]">
              Create
            </h3>
            <h3 className="text-brand-cream text-[32px] leading-none lg:text-[48px]">
              with <span className="text-brand-logo text-center">sloane.</span>
            </h3>
            </div>
            </Reveal>
          </div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-32"
          >
            <Button2
              title="Email Marketing"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
        </div>
        {/* row 4 */}
        <div className="my-6 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-24"
          >
            <Button2
              title="Training & Onboarding"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-24"
          >
            <Button2
              title="Website Copy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
        </div>
        {/* row 5 */}
        <div className="my-6 flex">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Sales Funnels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-12"
          >
            <Button2
              title="Efficient Workflows"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Social Media Strategy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
        </div>
        {/* row 6 */}
        <div className="my-6 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-24"
          >
            <Button2
              title="New Offerings"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-24"
          >
            <Button2
              title="Course Creation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={handleClick}
              path="https://buy.stripe.com/bIY8yr3Lx5qw5CU001"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Floating;
