import { useEffect } from "react";

function ScrollAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll("section h1");

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;
        
        if (top >= offset - 350 && top < offset + height + 100) {
          section.classList.add("show-animate"); // start show animations when the show-animate class comes on the screen
        } else {
          section.classList.remove("show-animate"); // remove the animation if it is not on the screen
        }
      });
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

export default ScrollAnimation;
