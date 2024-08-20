import GoogleMap from "./modules/views/GoogleMap";

import styles from './App.module.scss';

function App() {
  return (
    <>
      <GoogleMap />
      <div className={styles.wrap} />
      </>
  );
}

export default App;
