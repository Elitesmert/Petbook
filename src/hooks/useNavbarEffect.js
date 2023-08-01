import {useState, useEffect} from 'react'

const useNavbarEffect = () => {
  const [colorChange, setColorChange] = useState(false)
  const [show, setShow] = useState(false)
  const [menuScreen, setMenuScreen] = useState(false)

  const handleShow = () => setShow(!show)

  const changeNavbarColor = () => setColorChange(window.scrollY >= 200)

  useEffect(() => {
    const handleMenuScreen = () => setMenuScreen(window.innerWidth > 640)
    handleMenuScreen()

    const handleResize = () => {
      handleMenuScreen()
      changeNavbarColor()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', changeNavbarColor)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  return {colorChange, show, menuScreen, handleShow}
}

export default useNavbarEffect
