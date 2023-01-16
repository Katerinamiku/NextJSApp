import cn from "classnames";
import { ReviewFormProps } from "./ReviewForm.props";
import s from "./ReviewForm.module.css";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CrossSvgComponent from "./CrossSvgComponent";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { IReviewForm, IReviewSendResponse } from "./ReviewForm.interface";
import { API } from "../../helpers/api";
import axios from "axios";
import { useState } from "react";

export const ReviewForm = ({
  productId,
  className,
  ...rest
}: ReviewFormProps): JSX.Element => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Something weng wrong!");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (!err?.response) {
          setError("No Server Response");
        } else if (err.response?.status === 400) {
          setError("Missing Username or Password");
        } else {
          setError("Login Failed");
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(s.reviewForm, className)} {...rest}>
        <Input
          {...register("name", {
            required: { value: true, message: "Enter name" },
          })}
          placeholder="Name"
          error={errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Enter title" },
          })}
          className={s.titleInput}
          placeholder="Title"
          error={errors.title}
        />
        <div className={s.rating}>
          <span>Rating:</span>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: { value: true, message: "Indicate rating" },
            }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Enter text" },
          })}
          className={s.description}
          placeholder="Text"
          error={errors.description}
        />
        <div className={s.submit}>
          <Button appearance="primary">Send</Button>
          <span className={s.info}>
            *review will be moderated before publication
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={s.success}>
          <div className={s.successTitle}>Your review was submited!</div>
          <div className={s.successDescription}>
            Thank you. Your review wiil be published after moderation.
          </div>
          <div className={s.close} onClick={() => setIsSuccess(false)}>
            <CrossSvgComponent />
          </div>
        </div>
      )}
      {error && (
        <div className={s.error}>
          <div className={s.errorText}>
            Something went wrong. Please, try again.
          </div>
          <div className={s.closeError} onClick={() => setError(undefined)}>
            <CrossSvgComponent />
          </div>
        </div>
      )}
    </form>
  );
};
