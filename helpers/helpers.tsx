import { FirstLevelMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/topPage.interface";
import BookIconComponent from "../layout/Menu/icons/BookIconComp";
import CloudIconComponent from "../layout/Menu/icons/CloudIconComp";
import CoursesIconComponent from "../layout/Menu/icons/CoursesIconComp";
import ItemsIconComponent from "../layout/Menu/icons/ItemsIconComp copy";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIconComponent />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Услуги",
    icon: <CloudIconComponent />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIconComponent />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ItemsIconComponent />,
    id: TopLevelCategory.Products,
  },
];

export const priceEur = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat("Kč");

export const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
