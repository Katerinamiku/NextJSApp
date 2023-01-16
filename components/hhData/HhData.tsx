import { priceEur } from "../../helpers/helpers";
import { Card } from "../Card/Card";
import StarRoundIconComponent from "../Card/starRoundSvgComponent";
import s from "./HhData.module.css";
import { HhDataProps } from "./HhData.props";

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
  ...rest
}: HhDataProps): JSX.Element => {
  return (
    <div className={s.hh}>
      <Card className={s.count}>
        <div className={s.title}>Total vacanies</div>
        <div className={s.vacancyCount}>{count}</div>
      </Card>

      <Card className={s.salary}>
        <div>
          <div className={s.title}>Junior</div>
          <div className={s.salaryValue}>{priceEur(juniorSalary)}</div>
          <div className={s.rate}>
            <span className={s.filled}>
              <StarRoundIconComponent />
            </span>
            <span>
              <StarRoundIconComponent />
            </span>
            <span>
              <StarRoundIconComponent />
            </span>
          </div>
        </div>

        <div>
          <div className={s.title}>Middle</div>
          <div className={s.salaryValue}>{priceEur(middleSalary)}</div>
          <div className={s.rate}>
            <span className={s.filled}>
              <StarRoundIconComponent />
            </span>
            <span className={s.filled}>
              <StarRoundIconComponent />
            </span>
            <span>
              <StarRoundIconComponent />
            </span>
          </div>
        </div>

        <div>
          <div className={s.title}>Senior</div>
          <div className={s.salaryValue}>{priceEur(seniorSalary)}</div>
          <div className={s.rate}>
            <span className={s.filled}>
              <StarRoundIconComponent />
            </span>
            <span className={s.filled}>
              <StarRoundIconComponent />
            </span>
            <span className={s.filled}>
              <StarRoundIconComponent />
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
