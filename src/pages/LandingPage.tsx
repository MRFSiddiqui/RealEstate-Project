import { FunctionComponent } from "react";
import OutputCluster from "../components/OutputCluster";
import StackNode from "../components/StackNode";
import BPlusTreeNode from "../components/BPlusTreeNode";
import DataAggregator from "../components/DataAggregator";
import PolygonNode from "../components/PolygonNode";
import InputProcessor from "../components/InputProcessor";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.logicGate}>
        <div className={styles.inputProcessor}>
          <OutputCluster />
          <StackNode />
        </div>
      </section>
      <BPlusTreeNode />
      <DataAggregator />
      <PolygonNode />
      <InputProcessor />
    </div>
  );
};

export default LandingPage;
