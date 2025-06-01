import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "../components/navbar";


export default function Home() {
  return (
     <>
      <Navbar />
      <h1>Hello, Hung Q.</h1>
    </>
  );
}
