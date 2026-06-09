// Revelyst Cornhole Classic — JS

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Form submission handler (demo — replace with real backend)
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const teamName = document.getElementById('team-name').value;
  const player1  = document.getElementById('player1').value;
  const player2  = document.getElementById('player2').value;

  // Show success message
  form.innerHTML = `
    <div style="text-align:center; padding: 40px 20px;">
      <div style="font-size: 56px; margin-bottom: 16px;">🎉</div>
      <h3 style="font-family: 'Barlow Condensed', sans-serif; font-size: 32px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px; color: #FF6B00;">
        You're Registered!
      </h3>
      <p style="color: rgba(255,255,255,0.65); font-size: 16px; line-height: 1.6; max-width: 400px; margin: 0 auto 24px;">
        <strong style="color: #fff;">${teamName}</strong> — 
        ${player1} &amp; ${player2} — 
        you're officially in the Revelyst Cornhole Classic. 
        Watch the bracket for your first matchup!
      </p>
      <p style="color: rgba(255,107,0,0.7); font-size: 13px;">
        ⚠️ Demo mode: wire up a real backend (Google Forms, Netlify Forms, etc.) to save submissions.
      </p>
    </div>
  `;
}

// Add active nav style via CSS
const style = document.createElement('style');
style.textContent = `.site-nav a.active { color: #FF6B00; }`;
document.head.appendChild(style);
