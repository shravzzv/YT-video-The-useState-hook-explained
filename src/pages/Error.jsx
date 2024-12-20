import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Error() {
  return (
    <>
      <Navbar />
      <h1>OOPS! An error has occured.</h1>
      <Link to={'/'}>Go back to home</Link>
    </>
  )
}
