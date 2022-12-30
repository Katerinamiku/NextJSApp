import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { Paragraph } from "../components/Paragrph/Paragraph";
import { Tag } from "../components/Tag/Tag";
import React, { useEffect, useState } from "react";
import { Rating } from "../components/Rating/Rating";
import { withLayout } from "../HOCs/withLayout";

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
