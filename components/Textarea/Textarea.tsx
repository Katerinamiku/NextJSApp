import cn from "classnames";
import { TextareaProps } from "./Textarea.props";
import s from "./Textarea.module.css";
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(
  (
    { className, error, ...rest }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, s.textareaWrapper)}>
        <textarea
          ref={ref}
          className={cn(s.textarea, {
            [s.error]: error,
          })}
          {...rest}
        />
        {error && <span className={s.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
