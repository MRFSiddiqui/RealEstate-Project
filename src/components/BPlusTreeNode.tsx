import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import styles from "./BPlusTreeNode.module.css";

const BPlusTreeNode: FunctionComponent = () => {
  return (
    <section className={styles.bPlusTreeNode}>
      <div className={styles.redBlackTreeNode}>
        <div className={styles.aVLTreeNode}>
          <div className={styles.splayTreeNode}>
            <div className={styles.rBTreeNode}>
              <div className={styles.threeStepsThree}>
                Three steps. Three minutes.
              </div>
            </div>
            <h1 className={styles.everythingShouldBe}>
              Everything should be this easy.
            </h1>
          </div>
        </div>
        <div className={styles.frameParent}>
          <GroupComponent1
            vuesaxlinearmessages="/vuesaxlinearmessages.svg"
            answerQuestions="Answer questions"
          />
          <GroupComponent1
            vuesaxlinearmessages="/vuesaxlinearsmstracking.svg"
            answerQuestions="Select a quote"
          />
          <GroupComponent1
            vuesaxlinearmessages="/vuesaxlinearedit2.svg"
            answerQuestions="Get registered"
          />
        </div>
      </div>
    </section>
  );
};

export default BPlusTreeNode;
