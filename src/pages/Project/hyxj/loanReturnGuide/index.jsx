import styles from "./index.module.scss";
import { Tabs } from "antd-mobile";
const Index = () => {
  let loanImgs = [1, 2, 3, 4, 5];
  let repaymentImgs = [1, 2, 3, 4];
  let tabs = [
    {
      title: "借款指南",
    },
    {
      title: "还款指南",
    },
  ];
  loanImgs = loanImgs.map((item, index) => {
    return require(`./images/loan_guide_0${index+1}.png`).default;
  });
  repaymentImgs = repaymentImgs.map((item, index) => {
    return require(`./images/repayment_guide_0${index+1}.png`).default;
  });
  return (
    <div className={styles.container}>
      <img src={require("./images/loan_guide_bg.png").default} alt="" />
      <Tabs initialPage={1} tabs={tabs}>
        {loanImgs.map((item, index) => {
          return <img key={index} src={item} alt='' />;
        })}
        {repaymentImgs.map((item, index) => {
          return <img key={index} src={item} alt='' />;
        })}
      </Tabs>
    </div>
  );
};

export default Index;
