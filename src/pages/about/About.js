import { Link } from "react-router-dom";

import "./About.css";
import we from "../home/we-logo.svg";
import arrow from "../order/arrow.svg";
import drugstore from "./drugstore.png";
import hospital from "./hospital.png";
import money from '../home/money-hand.svg';
import spy from './Spy.svg';
import chart from './chart.svg';
import protection from '../home/protection.svg';
import quality from '../home/quality.svg';

const About = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="about-header">
          <img src={we} alt="" />
          <div className="about-info">
            <p className="about-subtitle">OUR PRODUCT</p>
            <p className="about-title">WHO ARE WE?</p>
            <p className="about-text">
              ÖmirSafe is building a platform for safe and convenient medication
              ordering. Doctors will issue electronic prescriptions sent
              directly to the user's app. Users can choose a pharmacy, compare
              prices, and order medication delivery straight to their door.{" "}
            </p>
          </div>
        </div>
        <div className="tree">
          <Link to="/">
            <p className="tree-home">Homepage</p>
          </Link>
          <img src={arrow} alt="" />
          <p className="order-label">About</p>
        </div>

        <div className="advantage">
          <div className="advantage-header">
            <div className="left">
              <img src={drugstore} alt="" />
              <p className="advantage-title">
                For <span>pharmacies</span>
              </p>
              <p className="advantage-subtitle">
                Why is this beneficial for pharmacies?
              </p>
            </div>
            <div className="right">
              <img src={hospital} alt="" />
              <p className="advantage-title">
                For <span>hospitals</span>
              </p>
              <p className="advantage-subtitle">
                Why is this beneficial for hospitals?
              </p>
            </div>
          </div>
          <div className="advantages-block">
            <div className="advantage-content">
              <div className="advantage-row">
                <div className="advantage-block">
                  <div className="advantage-number">1</div>
                  <p className="advantage-block-title">Расширение клиентуры</p>
                  <p className="advantage-block-text">
                    Доступ к пациентам, получающим рецепты от докторов. Далее
                    можно будет принимать заказы онлайн и отправлять сразу
                    поставщику, чтобы закупать будущий нереализованный товар.
                  </p>
                </div>
                <div className="advantage-block">
                  <div className="advantage-number">2</div>
                  <p className="advantage-block-title">Увеличение продаж</p>
                  <p className="advantage-block-text">
                    Возможность для пользователей сравнивать цены и выбирать
                    аптеку увеличивает вероятность заказа. Продажи вырастут от
                    7% до 43% в зависимости от количества клиентов аптек.
                  </p>
                </div>
              </div>
              <div className="advantage-row">
                <div className="advantage-block">
                  <div className="advantage-number">1</div>
                  <p className="advantage-block-title">Расширение клиентуры</p>
                  <p className="advantage-block-text">
                    Доступ к пациентам, получающим рецепты от докторов. Далее
                    можно будет принимать заказы онлайн и отправлять сразу
                    поставщику, чтобы закупать будущий нереализованный товар.
                  </p>
                </div>
                <div className="advantage-block">
                  <div className="advantage-number">2</div>
                  <p className="advantage-block-title">Увеличение продаж</p>
                  <p className="advantage-block-text">
                    Возможность для пользователей сравнивать цены и выбирать
                    аптеку увеличивает вероятность заказа. Продажи вырастут от
                    7% до 43% в зависимости от количества клиентов аптек.
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-content">
              <div className="advantage-row">
                <div className="advantage-block right">
                  <div className="advantage-number">1</div>
                  <p className="advantage-block-title">Расширение клиентуры</p>
                  <p className="advantage-block-text">
                    Доступ к пациентам, получающим рецепты от докторов. Далее
                    можно будет принимать заказы онлайн и отправлять сразу
                    поставщику, чтобы закупать будущий нереализованный товар.
                  </p>
                </div>
                <div className="advantage-block right">
                  <div className="advantage-number">2</div>
                  <p className="advantage-block-title">Увеличение продаж</p>
                  <p className="advantage-block-text">
                    Возможность для пользователей сравнивать цены и выбирать
                    аптеку увеличивает вероятность заказа. Продажи вырастут от
                    7% до 43% в зависимости от количества клиентов аптек.
                  </p>
                </div>
              </div>
              <div className="advantage-row right">
                <div className="advantage-block rightend">
                  <div className="advantage-number">3</div>
                  <p className="advantage-block-title">Эффективность выписки</p>
                  <p className="advantage-block-text">
                    Автоматизация процесса выдачи рецептов пациентам снижает
                    время на обработку и уменьшает ошибки. Это повысит
                    эффективность более чем в два раза.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission block">
          <div className="mission-content wrapper">
            <p className="block-subtitle">What are we opposite to?</p>
            <p className="block-title">OUR RELEVANCY</p>
            <div className="mission-blocks">
              <div className="mission-block">
                <img src={money} alt='' />
                <p className="block-text">
                Expanding elderly population base coupled with increasing prevalence of chronic diseases, and boom in digital medicine are also contributing to the market growth. This will have a positive impact on the growth dynamics of omir safe.
                </p>
              </div>
              <div className="mission-block">
                <img src={spy} alt='' />
                <p className="block-text">
                Based on a report by the Center for Safe Online Pharmacies, about 600 new illegal pharmacies are launched every month, taking advantage of the growing interest in online pharmacy. This shows the need for a solution like Omirsafe.
                </p>
              </div>
              <div className="mission-block">
                <img src={chart} alt='' />
                <p className="block-text">
                The global online pharmacy market has grown significantly, which has been due to pandemic, technological advancements, and changing consumer behavior. The market size exceeded $98.8 billion in 2022 and is projected to grow at a CAGR of over 14.5% from 2023 to 2032.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-content wrapper">
            <p className="block-subtitle">What we strive for</p>
            <p className="block-title">OUR MISSION</p>
            <div className="mission-blocks">
              <div className="mission-block">
                <img src={money} alt='' />
                <p className="block-text">
                Make safe, convenient and affordable access to life-saving medicines. People save time by receiving the recipe directly to their profile.
                </p>
              </div>
              <div className="mission-block">
                <img src={protection} alt='' />
                <p className="block-text">
                We fight the unauthorized sale of medicines by offering convenient purchase of medicines at any time with home delivery.
                </p>
              </div>
              <div className="mission-block">
                <img src={quality} alt='' />
                <p className="block-text">
                Our goal is to make healthcare more accessible, improve people's quality of life and create a reliable system for ordering and delivering medicines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
