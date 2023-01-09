import s from "./Sort.module.css";
import cn from "classnames";
import { SortEnum, SortProps } from "./Sort.props";
import SortIconComponent from "./SortSvgComponent";

export const Sorting = ({
  sort,
  setSort,
  className,
  ...rest
}: SortProps): JSX.Element => {
  return (
    <div className={cn(s.sort, className)} {...rest}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [s.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIconComponent />
        Rating
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [s.active]: sort === SortEnum.Price,
        })}
      >
        <SortIconComponent />
        Price
      </span>
    </div>
  );
};
