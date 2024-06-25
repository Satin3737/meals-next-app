import Container from '@/components/Container';
import communityIcon from '@/images/community.png';
import eventsIcon from '@/images/events.png';
import mealIcon from '@/images/meal.png';
import Image from 'next/image';
import styles from './page.module.scss';

export default function CommunityPage() {
    return (
        <main className={styles.page}>
            <Container>
                <div className={styles.header}>
                    <h1>
                        One shared passion: <span className={styles.highlight}>Food</span>
                    </h1>
                    <p>Join our community and share your favorite recipes!</p>
                </div>
                <div className={styles.main}>
                    <h2>Community Perks</h2>

                    <ul className={styles.perks}>
                        <li>
                            <Image src={mealIcon} alt="A delicious meal" />
                            <p>Share & discover recipes</p>
                        </li>
                        <li>
                            <Image src={communityIcon} alt="A crowd of people, cooking" />
                            <p>Find new friends & like-minded people</p>
                        </li>
                        <li>
                            <Image src={eventsIcon} alt="A crowd of people at a cooking event" />
                            <p>Participate in exclusive events</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </main>
    );
}
