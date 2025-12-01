import "@/style/globals.css";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export const metadata = {
  title: "Resort",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
