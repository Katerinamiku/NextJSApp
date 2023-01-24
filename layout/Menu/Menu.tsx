import s from "./Menu.module.css";
import cn from "classnames";
import { MyAppContext } from "../../context/app.context";
import { useContext, KeyboardEvent, useState } from "react";
import {
  FirstLevelMenuItem,
  PageItem,
} from "./../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion, useReducedMotion } from "framer-motion";

export const Menu = (): JSX.Element => {
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>(
    undefined
  );
  const { menu, setMenu, firstCategory } = useContext(MyAppContext);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion
        ? {}
        : {
            when: "beforeChildren",
            staggerChildren: 0.08,
          },
    },
    hidden: { marginBottom: 0 },
  };
  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            setAnnounce(m.isOpened ? "closed" : "opened");
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };
  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === "Enter" || key.code === "Space") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={s.firsLevelList}>
        {firstLevelMenu.map((m) => (
          <li key={m.route} aria-expanded={m.id === firstCategory}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={cn(s.firstLevel, {
                    [s.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={s.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={s.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={s.secondLevelBlock}
              >
                {buildThirdevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };
  const buildThirdevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) => {
    return pages.map((p) => (
      <motion.li key={p._id} variants={variantsChildren}>
        <Link href={`/${route}/${p.alias}`}>
          <a
            tabIndex={isOpened ? 0 : -1}
            aria-current={
              `${route}/${p.alias}` === router.asPath ? "page" : false
            }
            className={cn(s.thirdLevel, {
              [s.thirdLevelActive]: `${route}/${p.alias}` === router.asPath,
            })}
          >
            {p.category}
          </a>
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav className={s.menu} role="navigation">
      {announce && (
        <span className={s.visuallyHidden} role="log">
          {announce === "opened" ? "развернуто" : "свернуто"}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};
//-------animation-------
