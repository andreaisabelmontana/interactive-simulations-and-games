// Render the collection from data.js, and run a quiet boids backdrop on the
// hero canvas so the page itself is a little kinetic.

(function build() {
  let total = 0;
  const html = SECTIONS.map((sec) => {
    const cards = sec.items.map((it) => {
      total++;
      const live = it.live === null ? null : BASE + it.slug + "/";
      const code = REPO + it.slug;
      const liveBtn = live ? `<a class="open" href="${live}">Open ↗</a>` : `<span class="open soon">Backend</span>`;
      const tags = (it.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
      return `<article class="card">
        <div class="emoji">${it.emoji}</div>
        <h3>${it.name}</h3>
        <p>${it.desc}</p>
        <div class="tags">${tags}</div>
        <div class="actions">${liveBtn}<a class="code" href="${code}">Code</a></div>
      </article>`;
    }).join("");
    return `<section>
      <div class="sechead"><h2>${sec.title}</h2><span>${sec.blurb}</span></div>
      <div class="grid">${cards}</div>
    </section>`;
  }).join("");
  document.getElementById("sections").innerHTML = html;
  document.getElementById("count").textContent = `${total} interactive projects · all open-source`;
})();

// ---- hero backdrop: minimal boids ----
(function backdrop() {
  const c = document.getElementById("bg");
  const ctx = c.getContext("2d");
  let W, H, boids = [];
  function resize() {
    W = c.width = window.innerWidth;
    H = c.height = Math.min(window.innerHeight, 560);
    const n = Math.min(110, Math.floor(W / 16));
    boids = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      a: Math.random() * Math.PI * 2,
    }));
  }
  window.addEventListener("resize", resize);
  resize();

  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const b of boids) {
      // gentle wander
      b.a += (Math.random() - 0.5) * 0.3;
      b.x += Math.cos(b.a) * 0.7;
      b.y += Math.sin(b.a) * 0.7;
      if (b.x < 0) b.x += W; else if (b.x > W) b.x -= W;
      if (b.y < 0) b.y += H; else if (b.y > H) b.y -= H;
      ctx.save();
      ctx.translate(b.x, b.y); ctx.rotate(b.a);
      ctx.fillStyle = "rgba(120,150,255,0.18)";
      ctx.beginPath(); ctx.moveTo(5, 0); ctx.lineTo(-4, 2.6); ctx.lineTo(-4, -2.6);
      ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(frame);
  }
  frame();
})();
