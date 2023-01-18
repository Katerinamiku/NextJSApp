import s from "./Menu.module.css";
import cn from "classnames";
import { MyAppContext } from "../../context/app.context";
import { useContext } from "react";
import {
  FirstLevelMenuItem,
  PageItem,
} from "./../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(MyAppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
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
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={s.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={s.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(s.secondLevelBlock, {
                  [s.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
        <Link href={`/${route}/${p.alias}`}>
          <a
            className={cn(s.thirdLevel, {
              [s.thirdLevelActive]: `${route}/${p.alias}` === router.asPath,
            })}
          >
            {p.category}
          </a>
        </Link>
      </motion.div>
    ));
  };

  return <div className={s.menu}>{buildFirstLevel()}</div>;
};
//-------animation-------
const variants = {
  visible: {
    marginBottom: 20,
    transition: {
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
    opacity: 0,
    height: 0,
  },
};
