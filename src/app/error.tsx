'use client'
import styles from 'app/sass/global-error.module.scss'

export default function GlobalError({reset}: ErrorPageProps) {


  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error </h1>
      <p className={styles.Error__message}>Por favor, intente nuevamente</p>

      <button onClick={reset} className={styles.Error__button}>
        Volver a intentar
      </button>
    </main>
  );
}


