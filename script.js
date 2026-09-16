const routes = ['home','about','internships','projects','contact'];

function setActive(id) {
  if (!routes.includes(id)) id = 'home';

  routes.forEach(r =>
    document.getElementById(r).classList.toggle('active', r === id)
  );

  document.querySelectorAll('nav a[data-route], footer a[data-route]').forEach(a => {
    a.classList.toggle('active', a.dataset.route === id);
  });

  document.getElementById('navList').classList.remove('open');
  window.scrollTo(0, 0);
}

function routeFromHash() {
  setActive(location.hash.replace('#', '') || 'home');
}

window.addEventListener('hashchange', routeFromHash);

document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navList').classList.toggle('open');
});

routeFromHash();


// Internship accordions
document.querySelectorAll('.intern-summary').forEach(el => {
  el.addEventListener('click', () => {
    el.parentElement.classList.toggle('open');
  });
});


// FAQ accordions
document.querySelectorAll('.faq-q').forEach(el => {
  el.addEventListener('click', () => {
    el.parentElement.classList.toggle('open');
  });
});


// Project filter
document.querySelectorAll('.project-filter button').forEach(btn => {
  btn.addEventListener('click', () => {

    document.querySelectorAll('.project-filter button')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    const f = btn.dataset.filter;

    document.querySelectorAll('.project-row').forEach(row => {
      row.style.display =
        (f === 'all' || row.dataset.cat === f)
          ? 'grid'
          : 'none';
    });

  });
});


// ========================================
// CONTACT FORM → GOOGLE SHEET
// ========================================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async function(event) {

  event.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  try {

    await fetch("https://script.google.com/macros/s/AKfycbxAuWe9fi8zyqRhdcUf9_biysXKQiqFUj4UiQxU5mMaA1m5nnUx8hSue_80QwLoUc0/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });

    formMessage.textContent =
      "Thank you! Your message has been submitted.";

    form.reset();

  } catch (error) {

    formMessage.textContent =
      "Something went wrong. Please try again.";

  }

});
