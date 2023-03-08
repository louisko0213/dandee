import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="posiiton-relative">
      <Header />
      <Navbar />
      <div className="position-absolute" style={{
        left: '16rem',
        padding: '0 30px',
        width: 'calc(100% - 16rem)',
        height: 'calc(100vh - 70px)'
      }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;