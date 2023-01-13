import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { Paragraph } from "../components/Paragrph/Paragraph";
import { Tag } from "../components/Tag/Tag";
import React, { useState } from "react";
import { Rating } from "../components/Rating/Rating";
import { withLayout } from "../HOCs/withLayout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "./../interfaces/menu.interface";
import { Input } from "../components/Input/Input";
import { Textarea } from "../components/Textarea/Textarea";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Htag tag="h1">Title text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Paragraph fontSize="small">Some text to demostrate paragraph.</Paragraph>
      <Paragraph>Some text to demostrate paragraph.</Paragraph>
      <Paragraph fontSize="large">Some text to demostrate paragraph.</Paragraph>
      <Tag fontSize="small" color="ghost">
        small ghost
      </Tag>
      <Tag fontSize="large" color="red">
        large red
      </Tag>
      <Tag fontSize="small" color="green" href="#">
        small green
      </Tag>
      <Tag fontSize="small" color="primary" href="#">
        small primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <Input />
      <Textarea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: { menu, firstCategory },
  };
};

export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
