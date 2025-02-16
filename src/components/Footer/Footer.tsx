import "../Footer/Footer.css";

const Footer = () => {
  console.log([...Array(5)].map((e, i) => console.log(i)));

  return (
    <footer className="container footer">
      <div>@{new Date().getUTCFullYear()}</div>
      <div>Copy right reseved</div>
      <div>Accessbility enabled</div>
    </footer>
  );
};

export default Footer;
