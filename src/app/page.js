import Image from "next/image";
import styles from "./page.module.css";
import LineChart from "../app/components/LineChart"
import AverageComps from "./components/AverageComps";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{width:'95%'}}>
        <LineChart/>
        <AverageComps/>
        <Link href="/addweight">
          <button> Add weight</button>
        </Link>

      </div>
    </main>
  );
}
