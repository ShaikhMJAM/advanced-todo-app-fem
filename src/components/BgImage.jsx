import React from 'react'
import BgDesktopDark from "../assets/images/bg-desktop-dark.jpg"
import BgMobileDark from "../assets/images/bg-mobile-dark.jpg"
import BgDesktopLight from "../assets/images/bg-desktop-light.jpg"
import BgMobileLight from "../assets/images/bg-mobile-light.jpg"
import { useTheme } from '../context/theme-context'

const BgImage = () => {
  const { theme } = useTheme();
  return (
    <>
      {
        theme === "dark" ? (
          <picture>
            <source srcSet={BgDesktopDark} media="(min-width: 600px)" />
            <img src={BgMobileDark} alt="background" />
          </picture>
        ) :
          (
            <picture>
              <source srcSet={BgDesktopLight} media="(min-width: 600px)" />
              <img src={BgMobileLight} alt="background" />
            </picture>
          )
      }
    </>
  )
}

export default BgImage