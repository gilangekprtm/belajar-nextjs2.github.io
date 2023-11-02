import Link from 'next/link'
import style from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <ul className={style.tengah}>
            <li className={style.tengahli}><Link href="/">Home</Link></li>
            <li className={style.tengahli}><Link href="/About">About</Link></li>
            <li className={style.tengahli}><Link href="/Profil">Profil</Link></li>
        </ul>
    )
}

export default Navbar