import {
  Showcase,
  WhyUs,
  OurServices,
  Pricing,
  Faq,
  Reviews,
  Blog,
  ContactUs,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import "./index.css";
// import MySwipe from "./components/MySwipe";
import React, { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { FaTimes } from "react-icons/fa";
import { oprics } from "./constants";

function App() {
  const scrollContainerRef = React.useRef(null);
  const [modalBtn, setModalBtn] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [productList, setProductList] = React.useState(oprics);
  const [cart, setCart] = React.useState([]);
  const [cartTotalPrice, setCartTotalPrice] = React.useState();

  function addToCart(item) {
    setCart((prevCart) => {
      const itemExists = prevCart.some((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        return prevCart.filter((cartItem) => cartItem.id !== item.id);
      } else {
        return [...prevCart, item];
      }
    });

    setProductList((prev) =>
      prev.map((cat) => ({
        ...cat,
        items: cat.items.map((p) =>
          p.id === item.id ? { ...p, isAddedToCart: !p.isAddedToCart } : p
        ),
      }))
    );
  }

  // useEffect(() => {
  //   if (modal) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto"; // Cleanup
  //   };
  // }, [modal]);

  useEffect(() => {
    cart.length > 0 ? setModalBtn(true) : setModalBtn(false);
  }, [cart]);
  useEffect(() => {
    cart.length === 0 && setModal(false);
  }, [cart]);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price, 0);
    setCartTotalPrice(newTotal);
  }, [cart]);

  React.useEffect(() => {
    let locomotiveScroll;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          // Beta-specific options you might want to include:
          lerp: 0.9, // Default smoothing factor
          multiplier: 1.1, // Scroll speed multiplier
          firefoxMultiplier: 50, // Firefox-specific multiplier
          touchMultiplier: 2, // Touch device multiplier
          smartphone: {
            smooth: true, // Enable smooth scrolling on mobile
          },
          tablet: {
            smooth: true, // Enable smooth scrolling on tablets
          },
        });
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
      }
    };

    initScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <>
      <div ref={scrollContainerRef} data-scroll-container>
        <Nav />

        <section
          id="home"
          data-scroll-section
          className="bg-[#f6fbff] max-lg:px-6 px-20 w-[100%] h-[100vh]"
        >
          <Showcase />
        </section>
        <main className="relative z-[6] w-[100%]">
          <section
            data-scroll-section
            id="about"
            className="bg-[#fefdfb] px-20 py-20 max-lg:px-6"
          >
            <WhyUs />
          </section>
          <section
            data-scroll-section
            id="service"
            className="bg-[#fbfeff] px-20 py-20 max-lg:px-6"
          >
            <OurServices />
          </section>
          <section
            data-scroll-section
            id="pricing"
            className="bg-[#FFF] px-20 py-20 max-lg:px-6"
          >
            <Pricing productList={productList} addToCart={addToCart} />
          </section>
          <section
            data-scroll-section
            className="bg-[#fff] px-20 py-20 max-lg:px-6"
          >
            <Faq />
          </section>
          <section
            data-scroll-section
            className="bg-[#F4F4F6] px-20 py-20 max-lg:px-6"
          >
            <Reviews />
          </section>
          <section
            data-scroll-section
            id="blog"
            className="bg-[#fff] px-20 py-20 max-lg:px-6"
          >
            <Blog />
          </section>
          <section
            data-scroll-section
            id="contact"
            className="bg-[#FDFDFD] px-20 py-20 max-lg:px-6 w-full"
          >
            <ContactUs />
          </section>
          <section
            data-scroll-section
            className="bg-[url('./assets/images/fsbg.jpg')] bg-no-repeat bg-center bg-cover px-16 pt-20 max-lg:px-6"
          >
            <Footer />
          </section>
        </main>
        <section
          data-scroll-section
          className={`fixed top-0 overflow-y-auto left-0 origin-[90%_90%] h-screen w-screen bg-[rgba(1,22,39,0.5)] flex justify-center items-center transition-all duration-500 delay-75 ${
            modal ? "z-50 scale-100 opacity-100" : "z-0 scale-0 opacity-0"
          }`}
        >
          <div className="h-full w-full max-h-[500px] max-w-[400px] bg-[#FFF] flex flex-col justify-between gap-y-[15px] overflow-y-auto">
            <div className="bg-[#013321] w-full p-5 h-[75px] flex justify-between items-center text-[25px] text-[#FFF] ">
              <h2>Summary</h2>
              <div
                onClick={() => {
                  setModal(false);
                }}
                className="cursor-pointer"
              >
                <FaTimes size={20} />
              </div>
            </div>

            <div className="flex flex-col overflow-y-auto h-[330px] myScrollbar-hide text-[#212529]">
              {cart.length > 0 &&
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-[10px] px-[15px] text-[16px] gap-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.1)]"
                  >
                    <div
                      onClick={() => {
                        addToCart(item);
                      }}
                      className="transition-all duration-300 cursor-pointer hover:text-orange-400"
                    >
                      <FaTimes size={20} />
                    </div>
                    <div className="flex flex-col divFlex1">
                      <h4 className="font-[700]">{item.itHtext}</h4>
                      <p className="font-[400]">{item.ptext}</p>
                    </div>
                    <p className="font-[700]">${item.price}</p>
                  </div>
                ))}
            </div>
            <div className="bg-[rgba(1,51,33,0.1)] w-full p-[15px] h-[60px] flex justify-between items-center text-[#212529] text-[20px] font-[700]">
              <p>
                Total: <span>${cartTotalPrice}</span>
              </p>

              <div className="transition-all duration-300 cursor-pointer hover:text-orange-400">
                <p>Pay now</p>
              </div>
            </div>
          </div>
        </section>
        <div
          onClick={() => {
            setModal(true);
          }}
          className={`fixed bottom-10 right-10 w-[130px] h-[44px] text-[#FFF] bg-[#013321] flex justify-center items-center mBtnShadow text-[1rem] font-[700] cursor-pointer transition-all duration-300 ${
            modalBtn
              ? "z-40 scale-100 opacity-100 bottom-10 right-10"
              : "z-0 scale-0 opacity-0 bottom-0 right-0"
          }`}
        >
          Proceed here
        </div>
      </div>
    </>
  );
}

export default App;
