import cn from "classnames";
import { ReviewFormProps } from "./ReviewForm.props";
import s from "./ReviewForm.module.css";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CrossSvgComponent from "./CrossSvgComponent";

export const ReviewForm = ({
  productId,
  className,
  ...rest
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(s.reviewForm, className)} {...rest}>
        <Input placeholder="Name" />
        <Input className={s.titleInput} placeholder="Review title" />
        <div className={s.rating}>
          <span>Rating:</span>
          <Rating rating={0} />
        </div>
        <Textarea className={s.description} placeholder="Review text" />
        <div className={s.submit}>
          <Button appearance="primary">Send</Button>
          <span className={s.info}>
            *review will be moderated before publication
          </span>
        </div>
      </div>
      <div className={s.success}>
        <div className={s.successTitle}>Your review was submited!</div>
        <div className={s.successDescription}>
          Thank you. Your review wiil be published after moderation.
        </div>
        <div className={s.close}>
          <CrossSvgComponent />
        </div>
      </div>
    </>
  );
};
