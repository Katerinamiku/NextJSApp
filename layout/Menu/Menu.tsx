import s from "./Menu.module.css";
import cn from "classnames";
import { MyAppContext } from "../../context/app.context";
import { useContext, useEffect } from "react";
import { FirstLevelMenuItem } from "./../../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/cloud.svg";
import BooksIcon from "./icons/book.svg";
import ProductsIcon from "./icons/items.svg";
import { TopLevelCategory } from "../../interfaces/topPage.interface";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(MyAppContext);

  const firstLevelMenu: FirstLevelMenuItem[] = [
    {
      route: "courses",
      name: "Courses",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: "services",
      name: "Services",
      icon: <ServicesIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: "books",
      name: "Books",
      icon: <BooksIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: "products",
      name: "Products",
      icon: <ProductsIcon />,
      id: TopLevelCategory.Courses,
    },
  ];

  const buildFirstLevel = () => {
    return (
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    );
  };
  const buildSecondLevel = () => {};
  const buildThirdevel = () => {};

  return <div className={s.menu}>{buildFirstLevel()}</div>;
};
