import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p class="copyright">Copyright ⓒ {year} AAST Monitoring Project</p>
    </footer>
  );
}

export default Footer;