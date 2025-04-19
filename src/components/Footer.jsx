const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Rafiqul Islam.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
