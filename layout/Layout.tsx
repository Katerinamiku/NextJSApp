import cn from "classnames";
import { LayoutProps } from "./Layout.props";
import s from "./Layout.module.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Up } from "../components/Up/Up";
import { useState, KeyboardEvent, useRef } from "react";

export const Layout = ({ children, ...rest }: LayoutProps): JSX.Element => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code === "Enter" || key.code === "Space") {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsDisplayed(false);
  };
  return (
    <div className={s.wrapper}>
      <a
        onFocus={() => setIsDisplayed(true)}
        onKeyDown={skipContentAction}
        tabIndex={1}
        className={cn(s.skipLink, {
          [s.displayed]: isDisplayed,
        })}
      >
        To the content
      </a>
      <Header className={s.header} />
      <Sidebar className={s.sidebar} />
      <div className={s.body} ref={bodyRef} tabIndex={0}>
        {children}
      </div>
      <Footer className={s.footer} />
      <Up />
    </div>
  );
};
