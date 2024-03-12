import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import styles from "./StackNode.module.css";

const StackNode: FunctionComponent = () => {
  return (
    <div className={styles.stackNode}>
      <div className={styles.queueNode}>
        <div className={styles.priorityQueueNode}>
          <div className={styles.welcomeToRealstate}>Welcome to Realstate</div>
          <div className={styles.treeNode}>
            <h1 className={styles.manageYourProperty}>Manage Your Property</h1>
            <div className={styles.yourWillHave}>
              Your will have everything nearby supermarket, buses , station, the
              carmen neighborhood, etc
            </div>
            <GroupComponent2 />
          </div>
        </div>
      </div>
      <div className={styles.queueArrayNode}>
        <img
          className={styles.circularBufferNode}
          alt=""
          src="/circular-buffer-node@2x.png"
        />
        <img
          className={styles.queueArrayNodeChild}
          loading="lazy"
          alt=""
          src="/group-2@2x.png"
        />
      </div>
    </div>
  );
};

export default StackNode;
