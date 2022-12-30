import { RatingProps } from "./Rating.props";
import s from "./Rating.module.css";
import { useState, useEffect, KeyboardEvent } from "react";
import StarIcon from "./star.svg";
import cn from "classnames";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...rest
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };
  const onRatingChange = (i: number) => {
    if (!isEditable || !setRating) {
      console.log("no");
      return;
    }
    setRating(i);
    console.log("yes");
  };
  const handleSpace = (i: number, e: KeyboardEvent) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };
  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(s.star, {
            [s.filled]: i < currentRating,
            [s.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onRatingChange(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...rest}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
