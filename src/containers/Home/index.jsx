import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import SlotFour from "../../components/common/Slot/slotFour";
import AddressBar from "../../components/common/AddressBar";
import LoadingIndicator from "../../components/common/LoadingIndicator";
import ModalBox from "../../components/common/ModalBox";

export default function Home() {
  const userProfile = useSelector((state) => state.Auth.profile);
  const isLoading = useSelector((state) => state.Auth.isLoading);

  const iProfile = useSelector((state) => state.Page.iProfile);

  const [x3Matrix, setX3Matrix] = useState(null);
  const [x6Matrix, setX6Matrix] = useState(null);

  useEffect(() => {
    if (userProfile && !iProfile) {
      setX3Matrix(userProfile.x3Matrix);
      setX6Matrix(userProfile.x6Matrix);
    }
    if (iProfile) {
      setX3Matrix(iProfile.x3Matrix);
      setX6Matrix(iProfile.x6Matrix);
    }
  }, [userProfile, iProfile]);

  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div className="root">
        <div className="section">
          <h1 class="page-title">PYLON</h1>
          <h2 class="page-sub-title">FINANCE</h2>
        </div>
        <div className="section">
          <TextBlock title="Our Concept">
            <p>
              Tassadar's first gift to Terrans. Without Pylon, nothing else
              exists.
            </p>
            <p>
              Pylon holders enjoy exposure to all other crystals and get lions
              share of
              <br />
              ttGPU mining farm proceeds
            </p>
          </TextBlock>
        </div>
        <div className="section">
          <TextBlock title="What is Pylon?">
            <p>
              Pylon is a utility token that pays dividends on real world GPU
              mining farm in <br />
              the US.
            </p>
            <p className="bold">
              We are a 100% community minded token with no presale, no premine,
              and a<br />
              low cap supply of 8400.
            </p>
          </TextBlock>
        </div>
        <div className="section trusted">
          <div className="section1">
            Trusted by thousands
            <br />
            of customers worldwide
          </div>
          <div className="section2"></div>
          <div className="section3">
            <div classNAme="rect">01</div>
            <div classNAme="rect">02</div>
            <div classNAme="rect">03</div>
          </div>
        </div>
        <div className="section how-much">
          <div className="caption">
            <span>How much</span>can a miner make?
          </div>
          <p>
            Mining units can generate 20~50% APY in a bear market
            <br />
            and 160-250%+APY in a bull market.
          </p>
          <Button color="cyan" caption="Read More" size="md" />
        </div>
        <div className="section pylon-value">
          <div className="left">
            <h2>Pylon's Value</h2>
            <p>
              We are a 100% community mined project with no ICO,
              <br />
              presale, and low cap supply of 8.4k.
            </p>
            <div className="section mine-open">
              <h3>NEW MINE OPENS ON</h3>
              <span>10 Dec (Sunday) 2020, 15 AM</span>
              <div className="date">
                <div className="item">
                  <span className="number">19</span>
                  <span className="desc">DAYS</span>
                </div>
                <div className="item">
                  <span className="number">23</span>
                  <span className="desc">HRS</span>
                </div>
                <div className="item">
                  <span className="number">33</span>
                  <span className="desc">MIN</span>
                </div>
                <div className="item">
                  <span className="number">11</span>
                  <span className="desc">SEC</span>
                </div>
              </div>
              <Button color="orange" caption="JOIN NOW" size="lg" />
            </div>
          </div>
          <div className="right">
            <h2 className="caption">Crypto Investment</h2>
            <span>Annual Pylon Profit Analytics</span>
            <div className="content">
              <div className="content-item">
                <span className="desc">Invest</span>
                <span className="value">$100,000</span>
              </div>
              <div className="content-item">
                <span className="desc">(+)Additional Invest</span>
                <span className="value">$45,000</span>
              </div>
              <div className="divider"></div>
              <div className="content-item">
                <span className="desc">Total</span>
                <span className="value border border-dot">$145,000</span>
              </div>
              <div className="content-item">
                <span className="desc">Second Year Value</span>
                <span className="value border border-dot">$284,750</span>
              </div>
              <div className="content-item">
                <span className="desc">First Year Total Investment</span>
                <span className="value border border-dot">$145,000</span>
              </div>
              <div className="content-item">
                <span className="desc">Net Profit</span>
                <span className="value border border-dot">$139,750</span>
              </div>
            </div>
            <span>97% Profit in one year</span>
          </div>
        </div>
        <div className="section valut-ecosystem">
          <TextBlock title="Valut/ecosystem Flow Chart">
            <div className="content">
              <div className="description">
                <p>
                  The farms will mine Ethereum, banking on the <br />
                  elevated gas fees and mining rewards as of late.
                </p>
                <p>
                  These rewards are then returned into the $PYLON <br />
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="mining-farm">
              Farms mine Ethereum transactions
              <br /> and earn rewards/gas fees
            </div>
          </TextBlock>
          <img
            className=""
            src={require("../../assets/images/flow-chart.png")}
            alt="Valut/ecosystem Flow Chart"
          />
        </div>
      </div>
    </>
  );
}
