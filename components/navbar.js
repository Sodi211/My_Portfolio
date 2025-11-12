class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .logo {
          color: #2563eb;
font-weight: 700;
          font-size: 1.5rem;
          font-family: 'Poppins', sans-serif;
text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }
        
        .nav-link:hover {
          color: #4f46e5;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #4f46e5;
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">CodeCraft</a>
        
        <ul class="nav-links">
          <li><a href="#hero" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    `;
    
    // Manually inject Feather icon CSS
    const style = document.createElement('style');
    style.textContent = `
      .feather {
        width: 24px;
        height: 24px;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
    `;
    this.shadowRoot.appendChild(style);
}
}

customElements.define('custom-navbar', CustomNavbar);