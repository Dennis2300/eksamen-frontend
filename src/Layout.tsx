import NavHeader from "./NavHeader";
import Footer from "./Footer";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      <header className="nav-header">
        <NavHeader />
      </header>
      <main className="page-content">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
