class SmoothScroll {
  constructor() {
    this.navAnchors = document.querySelectorAll('.js-nav-anchor');
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.navAnchors.forEach(anchor => {
      anchor.addEventListener('click', e => this.handleAnchorClick(e));
    });
  }

  handleAnchorClick(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      const headerDropdown = document.querySelector('.header__dropdown');
      headerDropdown.classList.remove('is-show');

      document.body.classList.remove('is-hidden');

      const headerToggle = document.querySelector('.header__toggle');
      headerToggle.classList.remove('is-active');
    }
  }
}

export default SmoothScroll;
