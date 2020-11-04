import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import RectBlock from "../../components/common/RectBlock";

import "./styles.scss";

export default function Home() {
  return (
    <>
      <div className="root home-container">
        <div className="content-1">
          <div className="section section-title">
            <h1 className="page-title">PYLON</h1>
            <h2 className="page-sub-title">FINANCE</h2>
          </div>
          <div className="section section-concept">
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
          <div className="section section-what-is-pylon">
            <TextBlock title="What is Pylon?">
              <p>
                Pylon is a utility token that pays dividends on real world GPU
                mining farm in <br />
                the US.
              </p>
              <p className="bold">
                We are a 100% community minded token with no presale, no
                premine, and a<br />
                low cap supply of 8400.
              </p>
            </TextBlock>
          </div>
          <div className="section section-trusted">
            <div className="section1">
              Trusted by thousands
              <br />
              of customers worldwide
            </div>
            <div className="section2"></div>
            <div className="section3">
              <div className="rect active">01</div>
              <div className="rect">02</div>
              <div className="rect">03</div>
            </div>
          </div>
          <div className="section section-how-much">
            <div className="caption">
              <span>How much</span>can a miner make?
            </div>
            <div className="section-how-much-content">
              <div className="section-how-much-left">
                <p>
                  Mining units can generate 20~50% APY in a bear market
                  <br />
                  and 160-250%+APY in a bull market.
                </p>
                <div className="section-how-much-button">
                  <Button
                    className="btn-readme"
                    color="cyan"
                    caption="Read More"
                    size="md"
                  />
                  <RectBlock
                    className="rect-block bull-market"
                    title={`BULL`}
                    title2={`MARKET`}
                    subTitle="AVERAGE APY"
                    content="160-250%"
                    background="#00b9ea"
                    mainColor="#fff"
                    subColor="#7ed8f3"
                    borderColor="#80dcf5"
                    width="180"
                    height="180"
                  />
                </div>
              </div>
              <div className="section-how-much-right">
                <div className="section-howmuch-rectblock">
                  <RectBlock
                    className="rect-block bear-market"
                    title={`BEAR`}
                    title2={`MARKET`}
                    subTitle="AVERAGE APY"
                    content="20-50%"
                    background="#e7e6ec"
                    mainColor="#0540c8"
                    subColor="#7693d7"
                    borderColor="#f3f3f5"
                    width="150"
                    height="150"
                  />
                  <RectBlock
                    className="rect-block high-return"
                    title={`HIGH`}
                    title2={`RETURN`}
                    subTitle="ANNUAL"
                    content="GUARANTEED"
                    background="#0540c8"
                    mainColor="#fff "
                    subColor="#7899de"
                    borderColor="#82a1e4"
                    width="220"
                    height="220"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-2">
          <div className="section section-pylon-value">
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
                  <div className="divider">{` `}</div>
                  <div className="item">
                    <span className="number">23</span>
                    <span className="desc">HRS</span>
                  </div>
                  <div className="divider">{` `}</div>
                  <div className="item">
                    <span className="number">33</span>
                    <span className="desc">MIN</span>
                  </div>
                  <div className="divider">{` `}</div>
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
                <div className="content-item border-dot">
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
                  <span className="value border">$284,750</span>
                </div>
                <div className="content-item">
                  <span className="desc">First Year Total Investment</span>
                  <span className="value border border-dot">$145,000</span>
                </div>
                <div className="content-item">
                  <span className="desc">Net Profit</span>
                  <span className="value border">$139,750</span>
                </div>
              </div>
              <span className="profit">97% Profit in one year</span>
            </div>
          </div>
        </div>
        <div className="content-3">
          <div className="section valut-ecosystem">
            <TextBlock title="Valut/ecosystem Flow Chart" color="orange">
              <div className="value-ecosystem-content">
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
                  <h2>Mining Farm</h2>
                  Farms mine Ethereum transactions
                  <br /> and earn rewards/gas fees
                </div>
              </div>
            </TextBlock>
            <img
              className="flow-chart"
              src={require("../../assets/images/flow-chart.png")}
              alt="Valut/ecosystem Flow Chart"
            />
            <p className="capital">
              Capital is deployed to return
              <br /> maximum risk adjusted returns
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
