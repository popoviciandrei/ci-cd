import Image from "next/image";
import styles from "./page.module.css";
import Counter from "@/components/home/counter";

async function fetchInitialCount() {
  return Math.floor(Math.random() * 100);
}

export default async function Home() {
  const initialCount = await fetchInitialCount();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <p>Hello World</p>
        <Counter initialCount={initialCount} />
      </main>
    </div>
  );
}
