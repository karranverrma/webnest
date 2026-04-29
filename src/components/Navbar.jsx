export default function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Primary navigation">
        <span className="brand-spacer" aria-hidden="true"></span>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#solutions">Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </div>

        <button className="pill green-pill">Book a demo <span>↗</span></button>
      </nav>
    </header>
  );
}
