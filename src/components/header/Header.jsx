import React, { useRef } from "react";
import { FiHeart, FiMessageCircle, FiUser } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Container, MainLink } from "../../utils/Components";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useSelector } from "react-redux";

const Header = () => {
  const {email} = useSelector(data => data);
  const { t } = useTranslation();
  const navigation = useRef();
  const location = useLocation();
  var prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navigation.current.style.top = "0px";
    } else {
      navigation.current.style.top = "-72px";
    }
    prevScrollpos = currentScrollPos;
  });
  return (
    !location.pathname.includes("auth") && (
      <header ref={navigation}>
        <Container>
          <div className="header-wrapper">
            <div className="header__logo">
              <img
                src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=23-02-15"
                alt=""
              />
            </div>
            <nav>
              <ul className="header__language-select">
                <li style={localStorage.getItem("lang") === "uz" ? {color: "#24E5DB"} : null} onClick={() => {i18n.changeLanguage("uz")}} className="language-select-item">O'Z</li>
                <span>|</span>
                <li style={localStorage.getItem("lang") === "ru" ? {color: "#24E5DB"} : null} onClick={() => {i18n.changeLanguage("ru")}} className="language-select-item">RU</li>
                <span>|</span>
                <li style={localStorage.getItem("lang") === "en" ? {color: "#24E5DB"} : null} onClick={() => {i18n.changeLanguage("en")}} className="language-select-item">EN</li>
              </ul>
              <MainLink
                link="/messages"
                title={t("header_message")}
                icon={<FiMessageCircle />}
              />
              <MainLink link="/wishlist" title="" icon={<FiHeart />} />
              <MainLink link="/auth" title={email ? email : t("header_account")} icon={<FiUser />} />
            </nav>
          </div>
        </Container>
      </header>
    )
  );
};

export default Header;
