import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaAnglesUp } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";

export default function Footer() {
  const [isDonationHovered, setIsDonationHovered] = useState(true);
  const [isTopLeftBubbleHovered, setIsTopLeftBubbleHovered] = useState(true);
  const [isBottomLeftBubbleHovered, setIsBottomLeftBubbleHovered] =
    useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <footer className="p-8 bg-black bg-opacity-90 backdrop-blur-md shadow-xl text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-3xl font-extrabold text-center md:text-left">
            <span className="text-[#edbf6d]">Your Company</span>
          </div>
          <div className="text-white flex flex-col items-center md:items-start space-y-2">
            <Link
              to="/about"
              className="text-lg hover:text-[#edbf6d] transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-lg hover:text-[#edbf6d] transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-lg hover:text-[#edbf6d] transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-lg hover:text-[#edbf6d] transition duration-300"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex space-x-6 text-white mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b5998] text-2xl transition duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1da1f2] text-2xl transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e1306c] text-2xl transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="text-white mb-4 md:mb-0 flex justify-center md:justify-end w-full md:w-auto">
            <div className="h-[350px] overflow-hidden">
              <Calendar
                className="rounded-lg shadow-xl bg-[#2d2d2d] p-4"
                tileClassName={({ date, view }) =>
                  view === "month" &&
                  date.toDateString() === new Date().toDateString()
                    ? "bg-blue-500 text-white font-bold"
                    : ""
                }
                prev2Label={null}
                next2Label={null}
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Top Left Bubble */}
      <Link
        to="/faq"
        className={`fixed bottom-[calc(16px+110px)] left-6 bg-[#6ddaed] text-[#00032e] hover:bg-[#56c2d9] p-5 rounded-full shadow-xl transition duration-300 flex items-center justify-center 
        ${isTopLeftBubbleHovered ? "z-40" : "z-50"}`}
        style={{ width: "70px", height: "70px" }}
        onMouseEnter={() => setIsTopLeftBubbleHovered(false)}
        onMouseLeave={() => setIsTopLeftBubbleHovered(true)}
      >
        <IoChatboxEllipses className="size-8" />
      </Link>

      {/* Bottom Left Bubble */}
      <Link
        to="/contact"
        className={`fixed bottom-16 left-6 bg-[#ed6d6d] text-[#00032e] hover:bg-[#d95656] p-5 rounded-full shadow-xl transition duration-300 flex items-center justify-center 
        ${isBottomLeftBubbleHovered ? "z-40" : "z-50"}`}
        style={{ width: "70px", height: "70px" }}
        onMouseEnter={() => setIsBottomLeftBubbleHovered(false)}
        onMouseLeave={() => setIsBottomLeftBubbleHovered(true)}
      >
        <IoIosNotifications className="size-8" />
      </Link>

      {/* Donation Bubble (Right Side) */}
      <Link
        to="/donation"
        className={`fixed bottom-16 right-6 bg-[#edbf6d] text-[#00032e] hover:bg-[#d9a856] p-5 rounded-full shadow-xl transition duration-300 flex items-center justify-center 
        ${isDonationHovered ? "z-40" : "z-50"}`}
        style={{ width: "90px", height: "90px" }}
        onMouseEnter={() => setIsDonationHovered(false)}
        onMouseLeave={() => setIsDonationHovered(true)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/bdnahcds.json"
          trigger={isDonationHovered ? "loop" : "hover"}
          style={{ width: "55px", height: "55px" }}
        ></lord-icon>
      </Link>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bg-orange-700 bg-opacity-90 text-white p-3 rounded-full shadow-xl transition-all duration-500 ease-in-out flex items-center justify-center 
    ${showScrollTop ? "top-[85vh]" : "top-0 opacity-0 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <FaAnglesUp className="size-8" />
      </button>

      <div className="absolute bottom-0 left-0 p-4 text-white text-xs text-center w-full bg-black bg-opacity-70">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  );
}
