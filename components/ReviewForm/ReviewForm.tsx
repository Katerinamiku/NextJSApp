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
  isOpened,
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
    clearErrors,
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
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Enter title" },
          })}
          className={s.titleInput}
          placeholder="Заголовок"
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />
        <div className={s.rating}>
          <span>Рейтинг:</span>
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
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Enter text" },
          })}
          className={s.description}
          placeholder="Текст отзыва"
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label={"текст отзыва"}
          aria-invalid={errors.description ? true : false}
        />
        <div className={s.submit}>
          <Button
            appearance="primary"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => clearErrors()}
          >
            Отправить
          </Button>
          <span className={s.info}>
            *отзыв будет опубликован после модерации
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={s.success} role="alert">
          <div className={s.successTitle}>Ваш отзыв был отправлен!</div>
          <div className={s.successDescription}>
            Спасибо. Ваш отзыв будет опубликован после модерации.
          </div>
          <button
            className={s.close}
            onClick={() => setIsSuccess(false)}
            aria-label={"закрыть оповещение"}
          >
            {" "}
            <CrossSvgComponent />
          </button>
        </div>
      )}
      {error && (
        <div className={s.error}>
          <div className={s.errorText}>
            Что-то пошло не так. Пожалуйста, попробуйте еще раз.
          </div>
          <button
            className={s.closeError}
            onClick={() => setError(undefined)}
            aria-label={"закрыть оповещение"}
          >
            {" "}
            <CrossSvgComponent />
          </button>
        </div>
      )}
    </form>
  );
};
