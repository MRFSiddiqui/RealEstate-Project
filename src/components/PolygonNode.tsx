import { FunctionComponent } from "react";
import styles from "./PolygonNode.module.css";

const PolygonNode: FunctionComponent = () => {
  return (
    <section className={styles.polygonNode}>
      <div className={styles.groupNode}>
        <div className={styles.frameNode}>
          <h1 className={styles.weAreA}>
            We are a global, boutique real estate brokerage
          </h1>
        </div>
        <div className={styles.distributeNodes}>
          <div className={styles.layoutNodes}>
            <div className={styles.anchorsNodes}>
              <div className={styles.guidesNodes}>
                <div className={styles.theTransferOfRealEstateParent}>
                  <h1 className={styles.theTransferOf}>
                    The transfer of real estate
                  </h1>
                  <div className={styles.easyStepMessage}>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                      sit pellentesque sollicitudin. Egestas faucibus lacus diam
                      in senectus consectetur. Mattis elit adipiscing quisque
                      tellus scelerisque vehicula ante nunc. Tellus consequat
                      nisl quis nisl justo.
                    </div>
                  </div>
                </div>
                <div className={styles.fillsNodes}>
                  <div className={styles.strokesNodes}>
                    <button className={styles.bookNowFrame}>
                      <div className={styles.bookNow}>Book Now!</div>
                    </button>
                    <button className={styles.bookNowFrame1}>
                      <div className={styles.readMore}>Read More</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.blendsNodes}>
                <div className={styles.transformNodes}>
                  <div className={styles.vectorNodes}>
                    <div className={styles.separatorRectangle}>12+</div>
                    <div className={styles.customers}>Customers</div>
                  </div>
                  <div className={styles.vectorNodes1}>
                    <div className={styles.div}>14+</div>
                    <div className={styles.officesWrapper}>
                      <div className={styles.offices}>Offices</div>
                    </div>
                  </div>
                  <div className={styles.vectorNodes2}>
                    <div className={styles.div1}>10+</div>
                    <div className={styles.students}>Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dataAggregatorParent}>
            <img
              className={styles.dataAggregatorIcon}
              loading="lazy"
              alt=""
              src="/rectangle-27@2x.png"
            />
            <div className={styles.conditionSplitter} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolygonNode;
