import dynamic from "next/dynamic";
const FooterStyle = dynamic(() => import("../styles/FooterStyles"));
export default function Footer() {
  return (
    <FooterStyle>
      <p>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd. </p>
    </FooterStyle>
  );
}
