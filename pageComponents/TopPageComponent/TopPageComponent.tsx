import { Htag } from "../../components/Htag/Htag";
import { Tag } from "../../components/Tag/Tag";
import { TopPageComponentProps } from "./TopPageComponentProps";
import s from "./TopPageComponent.module.css";
import { HhData } from "../../components/hhData/HhData";
import { TopLevelCategory } from "../../interfaces/topPage.interface";
import { Advantages } from "../../components/Advantages/Advantages";
import { Paragraph } from "../../components/Paragrph/Paragraph";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag={"h1"}>{page.title}</Htag>
        {products && (
          <Tag color={"grey"} fontSize={"large"}>
            {products.length}
          </Tag>
        )}
        <span>Sorting </span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
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
