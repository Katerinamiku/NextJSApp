import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";

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
    </div>
  );
}
