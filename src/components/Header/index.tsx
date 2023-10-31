import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/Logo.svg";
import { Timer, Scroll } from "phosphor-react";

export default function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <a href="/">
          <Timer size={24} />
        </a>
        <a href="/history">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  );
}
