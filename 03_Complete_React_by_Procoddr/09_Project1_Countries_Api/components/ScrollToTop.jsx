import { useEffect, useState } from "react"
import { useTheme } from "../hooks/useTheme"
import "./ScrollToTop.css"

export const  ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState()
    const [isDark] = useTheme()

    const goToBtn= () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const listenToScroll = () => {
        let heightToHidden = 350

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if(winScroll > heightToHidden) {
            setIsVisible(true)
        } else{
            setIsVisible(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
    }, []);

  return (
    <>
      {isVisible && (
        <div className={`top-btn ${isDark ? "dark" : ""}`} onClick={goToBtn}>
          <i class="fa-solid fa-up-long"></i>
        </div>
      )}
    </>
  );
}
