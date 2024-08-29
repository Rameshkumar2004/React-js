import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div class="foot_panel">
          <ul>
            <p>Training Blog</p>
            <a href="">
              Welcome to our technical blog, where we delve into the{" "}
            </a>
            <a href="">world of cutting-edge technologies and explore their</a>
            <a href=""> practical applications.</a>
          </ul>
          <ul>
            <p>Category</p>
            <a href="">HTML</a>
            <a href="">CSS</a>
            <a href="">JavaScript</a>
            <a href="">VS code</a>
          </ul>
          <ul>
            <p>Get in touch</p>
            <a href="">+91-8XXX-XXX-XX</a>
            <a href="">Demo@gMAIL.COM</a>
          </ul>
          <ul>
            <p>follow US ON</p>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Footer;
