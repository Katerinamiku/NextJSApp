import { FirstLevelMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/topPage.interface";
import BookIconComponent from "../layout/Menu/icons/BookIconComp";
import CloudIconComponent from "../layout/Menu/icons/CloudIconComp";
import CoursesIconComponent from "../layout/Menu/icons/CoursesIconComp";
import ItemsIconComponent from "../layout/Menu/icons/ItemsIconComp copy";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <CoursesIconComponent />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Services",
    icon: <CloudIconComponent />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Books",
    icon: <BookIconComponent />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Products",
    icon: <ItemsIconComponent />,
    id: TopLevelCategory.Products,
  },
];

export const priceEur = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat("€");
