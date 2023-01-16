import { Htag } from "../../components/Htag/Htag";
import { Tag } from "../../components/Tag/Tag";
import { TopPageComponentProps } from "./TopPageComponentProps";
import s from "./TopPageComponent.module.css";
import { HhData } from "../../components/hhData/HhData";
import { TopLevelCategory } from "../../interfaces/topPage.interface";
import { Advantages } from "../../components/Advantages/Advantages";
import { SortEnum } from "../../components/Sort/Sort.props";
import { Sorting } from "../../components/Sort/Sort";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { Product } from "../../components/Product/Product";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };
  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag={"h1"}>{page.title}</Htag>
        {products && (
          <Tag color={"grey"} fontSize={"large"}>
            {products.length}
          </Tag>
        )}
        <Sorting sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product key={p._id} product={p} />)}
      </div>
      <div className={s.hhTitle}>
        <Htag tag={"h2"}>Vacancies - {page.category}</Htag>
        <Tag color={"red"} fontSize={"large"}>
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">
            <Advantages advantages={page.advantages} />
          </Htag>
        </>
      )}
      {page.seoText && (
        <div
          className={s.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag="h2">Skills</Htag>
      {page.tags.map((t) => (
        <Tag color={"primary"} key={t}>
          {t}
        </Tag>
      ))}
    </div>
  );
};
