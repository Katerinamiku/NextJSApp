import cn from "classnames";
import { SearchProps } from "./Search.props";
import s from "./Search.module.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { KeyboardEvent, useState } from "react";
import SearchIconComponent from "./SearchIconComponent";
import { useRouter } from "next/router";

export const Search = ({ className, ...rest }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };
  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };
  return (
    <form className={cn(className, s.search)} {...rest} role={"search"}>
      <Input
        className={s.input}
        placeholder={"Поиск"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeydown}
      />
      <Button
        appearance={"primary"}
        className={s.button}
        onClick={goToSearch}
        aria-label={"искать по сайту"}
      >
        {<SearchIconComponent />}
      </Button>
    </form>
  );
};
