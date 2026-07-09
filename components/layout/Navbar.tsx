import Container from "@/components/common/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-5">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </Container>
    </header>
  );
}