import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Page = ({children}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Page;