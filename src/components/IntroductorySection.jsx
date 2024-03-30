import React from "react";
import "./IntroductorySection.css"; // Import CSS for styling
import { motion } from "framer-motion";
const IntroductorySection = (props) => {
  return (
    <div id="details">
      <section className="introduction-section">
        <div className="content">
        <motion.div
        initial={{ x: -200 , opacity : [0.2]}} // Initial position (start off-screen to the left)
        animate={{ x: 0, opacity: [1.0] }} // Final position (move to the center)
        transition={{ duration: 2, type: 'tween' }} // Transition duration and type
        style={{ fontSize: '2rem', fontWeight: 'bold' }}
      >
          <h2 className="name">
            Hello! I AM ...
            <br />
            <strong className="rotate" style={{}}>{props.name}</strong>{" "}
          </h2>
      </motion.div>
          <p className="intro-paragraph">
            I am Ahmad Ali Shahid, a dedicated student of Software Engineering
            at the prestigious National University of Sciences and Technology
            (NUST) in Islamabad. As a fervent web developer, I am driven by an
            insatiable thirst for innovation and a relentless pursuit of
            excellence. With a keen intellect and a penchant for pushing
            boundaries{" "}
          </p>
          <h3 className="work-details">Work Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula ligula vitae feugiat tempus. Sed consequat elit eget metus
            finibus aliquam.
          </p>
          <p>
            Ut vulputate libero quis sapien aliquet, nec cursus odio congue.
            Phasellus nec ipsum sit amet urna fermentum consequat. Vivamus
            scelerisque euismod ante, nec fringilla risus sagittis eget.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IntroductorySection;
