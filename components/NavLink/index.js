'use client';

import classNames from 'classnames';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './styles.module.scss';

export default function NavLink({href = '', label = ''}) {
    const path = usePathname();

    return (
        <li>
            <Link href={href} className={classNames(styles.link, path.includes(href) && styles.active)}>
                {label}
            </Link>
        </li>
    );
}
