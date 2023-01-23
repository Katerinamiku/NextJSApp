import cn from "classnames";
import { ProductProps } from "./Product.props";
import s from "./Product.module.css";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceEur } from "../../helpers/helpers";
import { Divider } from "./../Divider/Divider";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

const Product = forwardRef(
  (
    { product, className, ...rest }: ProductProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    const scrollToReview = () => {
      setIsReviewOpened(true);
      reviewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      reviewRef.current?.focus();
    };
    const variants = {
      visible: {
        opacity: 1,
        height: "auto",
      },
      hidden: { opacity: 0, height: 0 },
    };
    return (
      <div className={className} {...rest} ref={ref}>
        <Card className={s.product}>
          <div className={s.logo}>
            <Image
              src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
              alt={product.title}
              width={70}
              height={70}
            />
          </div>
          <div className={s.title}>{product.title}</div>
          <div className={s.price}>
            <span>
              <span className={s.visuallyHidden}>Цена</span>
              {priceEur(product.price)}
            </span>
            {product.oldPrice && (
              <Tag color="green" className={s.oldPrice}>
                <span className={s.visuallyHidden}>Скидка</span>
                {priceEur(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>

          <div className={s.credit}>
            <span className={s.visuallyHidden}>Кредит</span>
            {priceEur(product.credit)} / <span className={s.months}>месяц</span>
          </div>
          <div className={s.rating}>
            <span className={s.visuallyHidden}>
              {"Рейтинг" + (product.reviewAvg ?? product.initialRating)}
            </span>
            <Rating rating={product.reviewAvg ?? product.initialRating} />
          </div>
          <div className={s.tags}>
            {product.categories.map((c) => (
              <Tag color="ghost" key={c} className={s.category}>
                {c}
              </Tag>
            ))}
          </div>
          <div className={s.priceTitle} aria-hidden={true}>
            Цена
          </div>
          <div className={s.creditTitle} aria-hidden={true}>
            Кредит
          </div>
          <div className={s.ratingTitle}>
            <a href="#ref" onClick={scrollToReview}>
              {product.reviewCount}{" "}
              {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
            </a>
          </div>

          <Divider className={s.hr} />

          <div className={s.description}>{product.description}</div>
          <div className={s.features}>
            {product.characteristics.map((c) => (
              <div className={s.characteristics} key={c.name}>
                <span className={s.characteristicsName}>{c.name}</span>
                <span className={s.characteristicsDots}></span>
                <span className={s.characteristicsValue}>{c.value}</span>
              </div>
            ))}
          </div>
          <div className={s.advBlock}>
            {product.advantages && (
              <div className={s.advantages}>
                <div className={s.advTitle}>Преимущества</div>
                <div>{product.advantages}</div>
              </div>
            )}
            {product.disadvantages && (
              <div className={s.disadvantages}>
                <div className={s.advTitle}>Недостатки</div>
                <div>{product.disadvantages}</div>
              </div>
            )}
          </div>
          <Divider className={cn(s.hr, s.hr2)} />
          <div className={s.actions}>
            <Button appearance="primary">Узнать еще</Button>
            <Button
              appearance="ghost"
              arrow={isReviewOpened ? "down" : "right"}
              className={s.reviewButton}
              onClick={() => setIsReviewOpened(!isReviewOpened)}
              aria-expanded={isReviewOpened}
            >
              Отзывы
            </Button>
          </div>
        </Card>
        <motion.div
          animate={isReviewOpened ? "visible" : "hidden"}
          variants={variants}
          initial={"hidden"}
        >
          <Card
            ref={reviewRef}
            tabIndex={isReviewOpened ? 0 : -1}
            color="blue"
            className={s.reviews}
          >
            {product.reviews.map((r) => (
              <div key={r._id}>
                <Review review={r} />
                <Divider />
              </div>
            ))}
            <ReviewForm productId={product._id} isOpened={isReviewOpened} />
          </Card>
        </motion.div>
      </div>
    );
  }
);
Product.displayName = "Product";

export default motion(Product);
