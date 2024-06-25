import BodyBg from '@/components/BodyBg';
import Container from '@/components/Container';
import NavLink from '@/components/NavLink';
import logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
    const linksConfig = [
        {
            href: '/meals',
            label: 'Browse Meals'
        },
        {
            href: '/community',
            label: 'Foodies community'
        }
    ];

    return (
        <>
            <BodyBg />
            <header className={styles.header}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link href={'/'} className={styles.logo}>
                            <Image src={logo} alt={'Meals logo'} width={64} height={64} />
                            Next Level Food
                        </Link>
                        <nav className={styles.nav}>
                            <ul>
                                {linksConfig.map((link, i) => (
                                    <NavLink key={i} {...link} />
                                ))}
                            </ul>
                        </nav>
                    </div>
                </Container>
            </header>
        </>
    );
}
