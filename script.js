/**
 * CINEMATCH - INTERACTIVE FRONT-END LOGIC
 * Features: Navbar scroll effects, mobile hamburger drawer, active section tracking,
 * dynamic multi-attribute catalogue filtering, and interactive mood matching engine.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  
  function checkScroll() {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    }
  }
  
  checkScroll();
  window.addEventListener('scroll', checkScroll);


  // --- 2. Mobile Navigation Toggle (Hamburger Menu) ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside of the active menu or toggle button
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }


  // --- 3. Scroll Section Active Tracker (Intersection Observer) ---
  const sections = document.querySelectorAll('section[id]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));


  // --- 4. Dynamic Film Catalogue Filtering ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const genreBadges = document.querySelectorAll('.genre-badge');
  const movieCards = document.querySelectorAll('.movie-card');

  let activeType = 'all'; // 'all', 'movie', 'series'
  let activeGenre = 'all'; // 'all', 'mystery', 'thriller', etc.

  function applyFilters() {
    movieCards.forEach(card => {
      const cardType = card.getAttribute('data-type');
      const cardGenres = card.getAttribute('data-genres').split(',');

      const matchesType = (activeType === 'all' || cardType === activeType);
      const matchesGenre = (activeGenre === 'all' || cardGenres.includes(activeGenre));

      if (matchesType && matchesGenre) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // Type Selector Tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.getAttribute('data-type');
      applyFilters();
    });
  });

  // Genre Selector Badges
  genreBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      genreBadges.forEach(b => b.classList.remove('active'));
      badge.classList.add('active');
      activeGenre = badge.getAttribute('data-genre');
      applyFilters();
    });
  });


  // --- 5. Interactive Mood Matcher Engine ---
  const matcherForm = document.getElementById('matcherForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('formSubmitBtn');

  if (matcherForm && formFeedback && submitBtn) {
    matcherForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const type = document.getElementById('mediaType').value;
      const mood = document.getElementById('userMood').value;

      if (!type || !mood) {
        return;
      }

      // Simulate calculations
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Searching Cinema Archives...';
      submitBtn.disabled = true;
      formFeedback.style.display = 'none';

      // Recommendation mapping database
      let recTitle = '';
      let recReason = '';

      if (type === 'movie') {
        switch(mood) {
          case 'mindbending':
            recTitle = 'Interstellar (Recommended)';
            recReason = 'a visual masterpiece that navigates deep gravitational physics, time dilation, and family bonds across dimensions.';
            break;
          case 'romantic':
            const romMovies = [
              { title: 'Eternal Sunshine of the Spotless Mind', reason: 'a surreal and deeply emotional film exploring what happens when a couple deletes their relationship memories.' },
              { title: 'La La Land', reason: 'a visually stunning and bittersweet musical detailing the compromises of love and dreams.' },
              { title: 'Atonement', reason: 'a tragic, beautifully shot romantic drama about war, secrets, and life-changing regrets.' }
            ];
            const romChoice = romMovies[Math.floor(Math.random() * romMovies.length)];
            recTitle = romChoice.title;
            recReason = romChoice.reason;
            break;
          case 'dark':
            const darkMovies = [
              { title: 'The Shining', reason: 'Stanley Kubrick’s horrifying adaptation exploring psychological isolation, supernatural forces, and cabin fever.' },
              { title: 'Requiem for a Dream', reason: 'Darren Aronofsky’s intense, masterpiece portrait of substance addiction and tragic downward spirals.' }
            ];
            const darkChoice = darkMovies[Math.floor(Math.random() * darkMovies.length)];
            recTitle = darkChoice.title;
            recReason = darkChoice.reason;
            break;
          case 'suspense':
            recTitle = 'Zodiac';
            recReason = 'David Fincher’s detailed and tense investigation following cartoonists and detectives chasing an elusive riddle killer.';
            break;
        }
      } else if (type === 'series') {
        switch(mood) {
          case 'dark':
          case 'suspense':
            recTitle = 'Dexter (Recommended)';
            recReason = 'a highly suspenseful crime drama following Miami’s serial blood analyst who hunts down bad guys under a strict moral code.';
            break;
          case 'mindbending':
            recTitle = 'Better Call Saul';
            recReason = 'a masterfully written character study detailing Jimmy McGill’s psychological transformation into attorney Saul Goodman.';
            break;
          case 'romantic':
            recTitle = 'Better Call Saul';
            recReason = 'which, alongside its lawyer schemes, features one of television’s most complex and deeply loyal romance arcs (Jimmy & Kim).';
            break;
        }
      }

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        formFeedback.innerHTML = `🍿 <strong>CineMatch Suggestion:</strong> We recommend watching <strong>${recTitle}</strong>. It is ${recReason} Go search it up!`;
        formFeedback.className = 'form-feedback-message success';
        formFeedback.style.display = 'block';
      }, 1200);
    });
  }


  // --- 6. Suggestion Request Form ---
  const requestForm = document.getElementById('requestForm');
  if (requestForm) {
    requestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('titleName').value.trim();
      alert(`Thank you! Your recommendation request for "${title}" has been submitted to the curation queue.`);
      requestForm.reset();
    });
  }

  // --- 7. Lightbox Image Modal ---
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  const moviePosters = document.querySelectorAll('.movie-poster, .poster-card-sm');

  if (imageModal && modalImg && modalClose) {
    moviePosters.forEach(poster => {
      poster.addEventListener('click', (e) => {
        e.stopPropagation();
        
        let bgImgUrl = '';
        // If it's a card with a background image (like the hero cards)
        if (poster.classList.contains('poster-card-sm')) {
          const bgStyle = window.getComputedStyle(poster).backgroundImage;
          // Extract url(...) from background image style
          const matches = bgStyle.match(/url\((['"]?)(.*?)\1\)/);
          if (matches && matches[2]) {
            bgImgUrl = matches[2];
          }
        } else {
          // If it's an img element
          bgImgUrl = poster.getAttribute('src');
        }

        if (bgImgUrl) {
          modalImg.setAttribute('src', bgImgUrl);
          imageModal.style.display = 'flex';
          // Wait a tiny frame to allow transition to trigger
          setTimeout(() => {
            imageModal.classList.add('active');
          }, 10);
        }
      });
    });

    // Close function
    function closeModal() {
      imageModal.classList.remove('active');
      setTimeout(() => {
        imageModal.style.display = 'none';
        modalImg.setAttribute('src', '');
      }, 300); // matches transition speed
    }

    modalClose.addEventListener('click', closeModal);
    imageModal.addEventListener('click', closeModal);
  }

});
