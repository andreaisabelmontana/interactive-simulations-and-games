// Every rebuild in the collection. `live` is the GitHub Pages URL (null = no
// live demo, e.g. a backend); `code` is the repository.
const BASE = "https://andreaisabelmontana.github.io/";
const REPO = "https://github.com/andreaisabelmontana/";

const SECTIONS = [
  {
    title: "Simulations",
    blurb: "Real physics, integrated every frame.",
    items: [
      { slug: "solar-system-simulation", name: "Solar System Simulation", emoji: "🪐", desc: "N-body solar system with what-if scenarios, build-your-own bodies, and a leapfrog integrator.", tags: ["Canvas", "gravity"] },
      { slug: "black-hole-simulation", name: "Black Hole Simulation", emoji: "⚫", desc: "3D accretion disk — tens of thousands of particles on real gravitational orbits.", tags: ["Three.js", "WebGL"] },
      { slug: "fluid-simulation", name: "Fluid Simulation", emoji: "💧", desc: "2D smoothed-particle-hydrodynamics fluid you can stir, splash, and settle.", tags: ["Canvas", "SPH"] },
      { slug: "ant-colony-simulation", name: "Ant Colony Simulation", emoji: "🐜", desc: "Emergent shortest-path pheromone trails with no central planner.", tags: ["Canvas", "emergence"] },
      { slug: "boids-flocking", name: "Boids Flocking", emoji: "🐦", desc: "Flocking from three local rules: separation, alignment, cohesion.", tags: ["Canvas", "flocking"] },
      { slug: "strange-attractors", name: "Strange Attractors", emoji: "🌀", desc: "3D explorer for chaotic systems — Lorenz, Rössler, Aizawa and more, RK4-integrated.", tags: ["Canvas", "chaos"] },
      { slug: "fractal-explorer", name: "Fractal Explorer", emoji: "🔮", desc: "GPU Mandelbrot & Julia explorer with smooth colouring and infinite zoom.", tags: ["WebGL", "shaders"] },
    ],
  },
  {
    title: "Games",
    blurb: "Pick-up-and-play, all in the browser.",
    items: [
      { slug: "chess-dodge-game", name: "Chess Dodge", emoji: "♞", desc: "Survive an escalating board by dodging chess-piece hazards. Local leaderboard.", tags: ["Canvas", "arcade"] },
      { slug: "tilt-maze-game", name: "Tilt Maze", emoji: "🎲", desc: "Tilt a transparent 3D cube to roll a ball through the maze hidden inside it.", tags: ["Three.js", "puzzle"] },
      { slug: "pong", name: "Pong", emoji: "🏓", desc: "A modern Pong with paddle-spin physics and three CPU difficulties.", tags: ["Canvas", "classic"] },
      { slug: "snake", name: "Snake", emoji: "🐍", desc: "Snake with smooth gliding movement, walls/wrap modes, and rising speed.", tags: ["Canvas", "classic"] },
      { slug: "echolocation-maze", name: "Echolocation Maze", emoji: "🔊", desc: "Navigate a pitch-black maze using sonar pulses that reveal the walls before fading.", tags: ["Canvas", "stealth"] },
    ],
  },
  {
    title: "Apps & Data",
    blurb: "Tools, a backend, and a machine-learning study.",
    items: [
      { slug: "rental-finder", name: "Rental Finder", emoji: "🏠", desc: "Describe a Madrid flat in plain language; it ranks listings and explains every match.", tags: ["JS", "NLP-style"] },
      { slug: "bank-marketing-ml", name: "Bank Marketing ML", emoji: "🏦", desc: "Predicting term-deposit subscriptions — EDA, three models, and a results showcase.", tags: ["Python", "scikit-learn"] },
      { slug: "chess-dodge-server", name: "Chess Dodge Server", emoji: "🛰️", desc: "WebSocket leaderboard, ELO, and seed-synced matchmaking for Chess Dodge.", tags: ["Node", "ws"], live: null },
    ],
  },
];
