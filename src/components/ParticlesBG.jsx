import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBG = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // background effect
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#ffffff" },
        },
        background: {
          color: "#00052f",
        },
      }}
    />
  );
};

export default ParticlesBG;