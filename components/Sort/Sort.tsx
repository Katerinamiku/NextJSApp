import s from "./Sort.module.css";
import cn from "classnames";
import { SortEnum, SortProps } from "./Sort.props";
import SortIconComponent from "./SortSvgComponent";
import { KeyboardEvent } from "react";
export const Sorting = ({
  sort,
  setSort,
  className,
  ...rest
}: SortProps): JSX.Element => {
  const sortKey = (key: KeyboardEvent) => {
    if (key.code === "Enter" || key.code === "Space") {
      key.preventDefault();
      setSort(SortEnum.Rating);
    }
  };

  return (
    <div className={cn(s.sort, className)} {...rest}>
      <div className={s.sortName} id={"sort"}>
        Сортировка
      </div>
      <button
        id={"rating"}
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [s.active]: sort === SortEnum.Rating,
        })}
        aria-pressed={sort === SortEnum.Rating}
        aria-labelledby={"sort rating"}
      >
        <SortIconComponent />
        По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [s.active]: sort === SortEnum.Price,
        })}
        aria-pressed={sort === SortEnum.Rating}
        aria-labelledby={"sort price"}
      >
        <SortIconComponent />
        По цене
      </button>
    </div>
  );
};
