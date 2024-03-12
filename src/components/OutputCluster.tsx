import { FunctionComponent } from "react";
import styles from "./OutputCluster.module.css";

const OutputCluster: FunctionComponent = () => {
  return (
    <header className={styles.outputCluster}>
      <div className={styles.outputClusterChild} />
      <div className={styles.featureExtractor}>
        <div className={styles.logo}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <img
            className={styles.buildIcon}
            loading="lazy"
            alt=""
            src="/build.svg"
          />
        </div>
      </div>
      <div className={styles.childNodes}>
        <div className={styles.functionNode}>
          <div className={styles.functionNodeChild} />
          <div className={styles.variableNode}>
            <div className={styles.aboutUs}>About us</div>
          </div>
          <div className={styles.variableNode1}>
            <div className={styles.projects}>Projects</div>
          </div>
          <div className={styles.variableNode2}>
            <div className={styles.agents}>Agents</div>
          </div>
          <div className={styles.variableNode3}>
            <div className={styles.services}>Services</div>
          </div>
          <div className={styles.variableNode4}>
            <div className={styles.listings}>Listings</div>
          </div>
          <img
            className={styles.vuesaxlinearsearchNormalIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
        </div>
      </div>
      <div className={styles.constantNode}>
        <div className={styles.matrixNode}>
          <div className={styles.renderingIsometricFdgdf}>
            <div className={styles.otherServices}>Other services</div>
            <div className={styles.vuesaxlineararrowRightWrapper}>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowright@2x.png"
              />
            </div>
          </div>
        </div>
        <button className={styles.framebookNowReadMore}>
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </header>
  );
};

export default OutputCluster;
