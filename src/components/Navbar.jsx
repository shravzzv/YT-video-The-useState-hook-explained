import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Example1</Link>
        </li>
      </ul>
    </nav>
  )
}
