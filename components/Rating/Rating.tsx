import { RatingProps } from "./Rating.props";
import s from "./Rating.module.css";
import React, { useState, useEffect, KeyboardEvent, useRef } from "react";
import cn from "classnames";
import StarIconComponent from "./starSvgComponent";

export const Rating = ({
  isEditable = false,
  rating,
  error,
  tabIndex,
  setRating,
  ...rest
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  const computeFocuse = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i === 0) {
      return tabIndex ?? 0;
    }
    if (rating === i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

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
  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code === "ArrowRight" || e.code === "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
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
          tabIndex={computeFocuse(rating, i)}
          onKeyDown={handleKey}
          ref={(r) => ratingArrayRef.current?.push(r)}
        >
          <StarIconComponent />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div
      className={cn(s.ratingWrapper, {
        [s.error]: error,
      })}
      {...rest}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {error && <span className={s.errorMessage}>{error.message}</span>}
    </div>
  );
};
