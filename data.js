// Every rebuild in the collection. `live` is the GitHub Pages URL (null = no
// live demo, e.g. a backend); `code` is the repository.
const BASE = "https://andreaisabelmontana.github.io/";
const REPO = "https://github.com/andreaisabelmontana/";

const SECTIONS = [
  {
    title: "Simulations",
    blurb: "Real physics, integrated every frame.",
    items: [
      { slug: "orrery-lab", name: "Orrery Lab", emoji: "🪐", desc: "N-body solar system with what-if scenarios, build-your-own bodies, and a leapfrog integrator.", tags: ["Canvas", "gravity"] },
      { slug: "event-horizon", name: "Event Horizon", emoji: "⚫", desc: "3D black-hole accretion disk — tens of thousands of particles on real gravitational orbits.", tags: ["Three.js", "WebGL"] },
      { slug: "ripple", name: "Ripple", emoji: "💧", desc: "2D smoothed-particle-hydrodynamics fluid you can stir, splash, and settle.", tags: ["Canvas", "SPH"] },
      { slug: "antfarm", name: "Antfarm", emoji: "🐜", desc: "Ant-colony foraging — emergent shortest-path pheromone trails with no central planner.", tags: ["Canvas", "emergence"] },
      { slug: "murmuration", name: "Murmuration", emoji: "🐦", desc: "Boids flocking from three local rules: separation, alignment, cohesion.", tags: ["Canvas", "flocking"] },
      { slug: "strange-attractors", name: "Strange Attractors", emoji: "🌀", desc: "3D explorer for chaotic systems — Lorenz, Rössler, Aizawa and more, RK4-integrated.", tags: ["Canvas", "chaos"] },
      { slug: "fractal-voyager", name: "Fractal Voyager", emoji: "🔮", desc: "GPU Mandelbrot & Julia explorer with smooth colouring and infinite zoom.", tags: ["WebGL", "shaders"] },
    ],
  },
  {
    title: "Games",
    blurb: "Pick-up-and-play, all in the browser.",
    items: [
      { slug: "knightmare", name: "Knightmare", emoji: "♞", desc: "Survive an escalating board by dodging chess-piece hazards. Local leaderboard.", tags: ["Canvas", "arcade"] },
      { slug: "gyrocube", name: "Gyrocube", emoji: "🎲", desc: "Tilt a transparent 3D cube to roll a ball through the maze hidden inside it.", tags: ["Three.js", "puzzle"] },
      { slug: "rebound", name: "Rebound", emoji: "🏓", desc: "A modern Pong with paddle-spin physics and three CPU difficulties.", tags: ["Canvas", "classic"] },
      { slug: "coil", name: "Coil", emoji: "🐍", desc: "Snake, refined — smooth gliding movement, walls/wrap modes, rising speed.", tags: ["Canvas", "classic"] },
      { slug: "sonar", name: "Sonar", emoji: "🔊", desc: "Navigate a pitch-black maze using sonar pulses that reveal the walls before fading.", tags: ["Canvas", "stealth"] },
    ],
  },
  {
    title: "Apps & Data",
    blurb: "Tools, a backend, and a machine-learning study.",
    items: [
      { slug: "nestmatch", name: "Nestmatch", emoji: "🏠", desc: "Describe a Madrid flat in plain language; it ranks listings and explains every match.", tags: ["JS", "NLP-style"] },
      { slug: "bank-marketing-ml", name: "Bank Marketing ML", emoji: "🏦", desc: "Predicting term-deposit subscriptions — EDA, three models, and a results showcase.", tags: ["Python", "scikit-learn"] },
      { slug: "knightmare-server", name: "Knightmare Server", emoji: "🛰️", desc: "WebSocket leaderboard, ELO, and seed-synced matchmaking for Knightmare.", tags: ["Node", "ws"], live: null },
    ],
  },
];
