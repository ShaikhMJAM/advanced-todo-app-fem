import React from 'react'
import BgDesktop from "../assets/images/bg-desktop-dark.jpg"
import BgMobile from "../assets/images/bg-mobile-dark.jpg"

const BgImage = () => {
  return (
    <picture>
      <source srcSet={BgDesktop} media="(min-width: 600px)" />
      <img src={BgMobile} alt="background" />
    </picture>
  )
}

export default BgImage