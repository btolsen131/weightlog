import Image from "next/image";
import styles from "./page.module.css";
import LineChart from "../app/components/linechart"

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{width:'95%'}}>
        <LineChart/>
      </div>
    </main>
  );
}
