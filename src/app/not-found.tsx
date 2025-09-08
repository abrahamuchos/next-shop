import Link from "next/link";
import styles from 'app/sass/not-found.module.scss'

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <h2 className={styles.NotFound__subtitle}>
        ¡Uy, parece que el enlace se escondió!
      </h2>
      <p className={styles.NotFound__description}>Pero nuestra tienda está abierta las 24/7</p>
      <Link className={styles.NotFound__link} href="/store">
        ¡Vamos de compras!
      </Link>
    </main>
  );
}

