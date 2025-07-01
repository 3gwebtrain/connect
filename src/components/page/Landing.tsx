import { Header } from '../templates/header/header';
import styles from './Landing.module.css';
export const Landing = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
