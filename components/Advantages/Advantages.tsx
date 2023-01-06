import cn from "classnames";
import { AdvantagesProps } from "./Advantages.props";
import s from "./Advantages.module.css";
import CheckIconComponent from "./checkSvgComponent";
import { Paragraph } from "../Paragrph/Paragraph";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div>
      {advantages.map((a) => (
        <div key={a._id} className={s.advantage}>
          <CheckIconComponent />
          <div className={s.title}>{a.title}</div>
          <hr className={s.vline} />
          <Paragraph fontSize="small">{a.description}</Paragraph>
        </div>
      ))}
    </div>
  );
};
