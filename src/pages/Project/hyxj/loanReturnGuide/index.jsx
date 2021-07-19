import styles from "./index.module.scss";
import { Tabs } from "antd-mobile";
import { useState } from "react";
/**
 * @function       获取指定目录下的指定图片
 * @param {*} dir  本地图片目录
 * @param {*} lists 图片集合
 * @returns  图片集合
 */
const getLocalImg = (dir, lists) => {
  if (!Array.isArray(lists)) {
    lists = [lists];
  }
  return lists.map((item) => {
    try {
      return require(`${dir}/${item}`).default;
    } catch (err) {
      console.error(item, "图片找不到了,请检查");
    }
  });
};
const imageDir = "./images";
const loanImgs = [
  "loan_guide_01.png",
  "loan_guide_02.png",
  "loan_guide_03.png",
  "loan_guide_04.png",
  "loan_guide_05.png",
];
const repaymentImgs = [
  "repayment_guide_01.png",
  "repayment_guide_02.png",
  "repayment_guide_03.png",
  "repayment_guide_04.png",
];
const loan_guide_bg = getLocalImg(imageDir, "loan_guide_bg.png");
let tabs = [
  {
    title: "借款指南",
    imgs: getLocalImg(imageDir, loanImgs),
  },
  {
    title: "还款指南",
    imgs: getLocalImg(imageDir, repaymentImgs),
  },
];
const tabBarUnderlineStyle = {
  marginLeft: "21%",
  width: "28px",
  height: "4px",
  background: "#FF6200",
};
const tabBarTextStyle = {
  height: "27px",
  padding: "30px 0px 20px 0px",
};
const tabBarActiveTextColor = "#333333";
const tabBarInactiveTextColor = "#999999";

const Index = () => {
  const [initialPage, setInitialPage] = useState(0);
  return (
    <div className={styles.container}>
      <img src={loan_guide_bg} alt="" />
      <div className={styles.sticky}>
        <Tabs
          initialPage={initialPage}
          tabs={tabs}
          tabBarUnderlineStyle={tabBarUnderlineStyle}
          tabBarTextStyle={tabBarTextStyle}
          tabBarActiveTextColor={tabBarActiveTextColor}
          tabBarInactiveTextColor={tabBarInactiveTextColor}
          onTabClick={(tab, index) => {
            setInitialPage(index);
          }}
        ></Tabs>
      </div>
      {/* 页面切换 */}
      {tabs[initialPage].imgs.map((item, index) => {
        return <img key={index} src={item} alt="" />;
      })}
    </div>
  );
};

export default Index;
