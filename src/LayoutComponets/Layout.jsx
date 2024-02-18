import Footer from "./Footer";
import Header from "./Header";

const cmps = {
  Header: () => <Header />,
  body: () => <> body </>,
  Footer: () => <Footer />,
};

export default function Layout({ children }) {
  return (
    <>
      {<cmps.Header />}
      {children}
      {<cmps.Footer />}
    </>
  );
}
