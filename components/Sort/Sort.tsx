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
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [s.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIconComponent />
        Rating
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [s.active]: sort === SortEnum.Price,
        })}
      >
        <SortIconComponent />
        Price
      </button>
    </div>
  );
};
