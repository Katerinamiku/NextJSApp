import cn from "classnames";
import { ProductProps } from "./Product.props";
import s from "./Product.module.css";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { devlOfNum, priceEur } from "../../helpers/helpers";
import { Divider } from "./../Divider/Divider";
import Image from "next/image";
import { useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
export const Product = ({
  product,
  className,
  ...rest
}: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(true);

  return (
    <>
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
          {priceEur(product.price)}
          {product.oldPrice && (
            <Tag color="green" className={s.oldPrice}>
              {priceEur(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>

        <div className={s.credit}>
          {priceEur(product.credit)} / <span className={s.months}>months</span>
        </div>
        <div className={s.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={s.tags}>
          {product.categories.map((c) => (
            <Tag color="ghost" key={c} className={s.category}>
              {c}
            </Tag>
          ))}
        </div>
        <div className={s.priceTitle}>Price</div>
        <div className={s.creditTitle}>Credit</div>
        <div className={s.ratingTitle}>
          {product.reviewCount} {devlOfNum(product.reviewCount)}
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
              <div className={s.advTitle}>Advantages</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={s.disadvantages}>
              <div className={s.advTitle}>Disadvantages</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={cn(s.hr, s.hr2)} />
        <div className={s.actions}>
          <Button appearance="primary">Learn more</Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            className={s.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Reviews
          </Button>
        </div>
      </Card>
      <Card
        color="blue"
        className={cn(s.reviews, {
          [s.opened]: isReviewOpened,
          [s.closed]: !isReviewOpened,
        })}
      >
        {product.reviews.map((r) => (
          <div key={r._id}>
            <Review review={r} />
            <Divider />
          </div>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </>
  );
};
