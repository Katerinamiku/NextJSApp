import cn from "classnames";
import { ReviewProps } from "./Review.props";
import s from "./Review.module.css";
import UserAvatarComponent from "./UserAvatarSvgComponent";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { Rating } from "../Rating/Rating";

export const Review = ({
  review,
  className,
  ...rest
}: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={s.review}>
      <UserAvatarComponent />
      <div className={s.title}>
        <span className={s.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={s.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", { locale: enGB })}
      </div>
      <div className={s.rating}>
        <Rating rating={rating} />
      </div>
      <div className={s.description}>{description}</div>
    </div>
  );
};
