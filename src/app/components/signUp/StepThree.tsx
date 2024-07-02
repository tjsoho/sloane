import React from "react";
import { InlineWidget } from "react-calendly";

const StepThree: React.FC = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Book Your Session</h2>
      <InlineWidget url="https://calendly.com/ai-guy-bookings/ai-business-model-set-up" />
    </div>
  );
};

export default StepThree;
