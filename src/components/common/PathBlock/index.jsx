import React from "react";

export default function (props) {
  const {
    className,
    title,
    title2,
    subTitle,
    content,
    background,
    backgroundImage,
    quarterTitle,
    subContentSpace,
    subContent1,
    subContent2,
    subContent3,
    subContent4,
    subContent5,
    subContent6,
    share,
    facebookIcon,
    googleIcon,
    twitterIcon,
    mainColor,
    subColor,
    padding,
    width,
  } = props;

  const partStyle = {
      display: "flex",
      justifyContent: "space-between",
  };

  const bgStyle = {
      background: background,
      width:`60%`,
      height: 75,
  };

  const socialStyle = {
      flexDirection: "row"
  };

  const shareStyle = {
      color: mainColor,
  };

  const facebookStyle = {
    background: facebookIcon,
  };

  const headerStyle = {
    fontSize: 50,
    fontWeight: 1000,
    color: mainColor,
  };

  const subHeaderStyle = {
    fontSize: 28,
    fontWeight: 700,
    color: mainColor,
  };

  const divider = {
    width: 60,
    height: 6,
    background: mainColor,
    marginTop: 50,
    marginBottom: 50,
  };

  const subTitleStyle = {
    fontSize: 26,
    color: mainColor,
  };

  const contentStyle = {
    width: "80%",
    paddingTop: 20,
    fontSize: 16,
    color: mainColor,
  };

  const quarterStyle = {
    display: "flex",
  };

  const mainStyle = {
    background: background,
    // boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "30%",
    // color: mainColor,
    // fontWeight: 600,
    paddingLeft: `${padding}`,
  };
  const mainQuarterStyle = {
    background: mainColor,
    borderRight: `12px solid #82a0e3`,
    boxSizing: "border-box",
    display: "flex",
    width: "70%",
    // height: `100%`,
    // color: mainColor,
    // fontWeight: 600,
  };

  const mainQuarterText = {
    paddingTop: "5%",
    paddingLeft: padding,
    paddingBottom: padding,
    color: subColor,
    width: "70%",
  };

  const subContentStyle = {
    marginTop: 25,
  };

  const quarterIcon = {
    width:"30%",
    justifyContent: "center",
    paddingTop: "2%",
    paddingRight: "1%",
    paddingBottom: "1%",
  };

  return (
      <div className={className}>
        <div className="header-footer" style={partStyle}>
            <div className="header-footer" style={bgStyle}>
            </div>
            {share !== "" && <div className="header-footer" style={socialStyle}>
                <span style={shareStyle}>{share}</span>
                {facebookIcon !== "" && <img
                  className="quarterIcon"
                  src={require(`../../../assets/images/${facebookIcon}.png`)}
                  alt="Valut/ecosystem Flow Chart"
                />}
                {googleIcon !== "" && <img
                  className="quarterIcon"
                  src={require(`../../../assets/images/${googleIcon}.png`)}
                  alt="Valut/ecosystem Flow Chart"
                />}
                {twitterIcon !== "" && <img
                  className="quarterIcon"
                  src={require(`../../../assets/images/${twitterIcon}.png`)}
                  alt="Valut/ecosystem Flow Chart"
                />}
            </div>}
        </div>
        <div className="quarter-style" style={quarterStyle}>
          <div className={className} style={mainStyle}>
              <span style={headerStyle}>{title}</span>
              <span style={subHeaderStyle}>{title2}</span>
              <span style={divider}></span>
              <span style={subTitleStyle}>{subTitle}</span>
              <span style={contentStyle}>{content}</span>
          </div>
          <div className={className} style={mainQuarterStyle}>
            <div className={className} style={mainQuarterText}>
              <h2>{quarterTitle}</h2>
              {subContent1 !== "" && <p style={subContentStyle}>{subContentSpace}{subContent1}</p>}
              {subContent2 !== "" && <p>{subContentSpace}{subContent2}</p>}
              {subContent3 !== "" && <p>{subContentSpace}{subContent3}</p>}
              {subContent4 !== "" && <p>{subContentSpace}{subContent4}</p>}
              {subContent5 !== "" && <p>{subContentSpace}{subContent5}</p>}
              {subContent6 !== "" && <p>{subContentSpace}{subContent6}</p>}
            </div>
            <img
              className="quarterIcon"
              style={quarterIcon}
              src={require(`../../../assets/images/${backgroundImage}.png`)}
              alt="Valut/ecosystem Flow Chart"
            />
          </div>
        </div>
        <div className="header-footer" style={partStyle}>
          <div className="header-footer" style={bgStyle}>
          </div>
        </div>
    </div>
  );
}
