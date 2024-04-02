import Link from "next/link";
import styles from "./home.module.css";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to this App</h1>
      <p className={styles.paragraph}> 
        In this example app you will be able to appreciate a system used for
        managing data in a MongoDB platform. the app can execute queries via
        Mongoose, to insert, update and delete data. We have also implemented an
        authentication system with protected routes, middleware and server
        actions.
      </p>
      <p className={styles.paragraph}>
        Please enjoy checking it out. You can access it with this credential:
      </p>
      <div className={styles.access}>
        <span className={styles.title}>username:</span>
        <p className={styles.value}>admin</p>
        <span className={styles.title}>password</span>
        <p className={styles.value}>123456</p>
        <Link className={styles.link} href="/login">Login</Link>
      </div>
    </div>
  );
}
