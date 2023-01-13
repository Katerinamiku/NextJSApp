import cn from "classnames";
import { InputProps } from "./Input.props";
import s from "./Input.module.css";
import { forwardRef, ForwardedRef } from "react";

export const Input = forwardRef(
  (
    { className, error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, s.inputWraper)}>
        <input
          ref={ref}
          className={cn(s.input, {
            [s.error]: error,
          })}
          {...rest}
        />
        {error && <span className={s.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
