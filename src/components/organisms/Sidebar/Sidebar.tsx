import Container from "@/components/atoms/Container/Container";
import NavWrapper from "@/components/molecules/NavWrapper/NavWrapper";

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: SidebarProps) => {
  return (
    <aside
      className={`fixed left-0 min-h-screen h-full w-full right-0 bg-[#16041B]/95 transform translate-x-0 nav-bar-clip-path pt-28  lg:hidden z-10 ${
        showSidebar && "open"
      }`}
    >
      <Container>
        <NavWrapper />
      </Container>
    </aside>
  );
};

export default Sidebar;
