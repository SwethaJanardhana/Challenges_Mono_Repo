import logo from "../img/logo.jpg";
import Image from "./Image";

export default function Logo() {
  return (
    <a href="#">
      <Image scrProp={logo} altProp="logo" />
    </a>
  );
}
