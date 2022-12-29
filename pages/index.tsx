import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { Paragraph } from "../components/Paragrph/Paragraph";
import { Tag } from "../components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Title text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <Paragraph fontSize="small">
        Some text to demostrate that paragraph is shown.
      </Paragraph>
      <Paragraph>Some text to demostrate that paragraph is shown.</Paragraph>
      <Paragraph fontSize="large">
        Some text to demostrate that paragraph is shown.
      </Paragraph>
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
    </div>
  );
}
