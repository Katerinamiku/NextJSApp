import s from "./Sort.module.css";

export default function SortIconComponent({}) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      id="sort"
      className={s.sortIcon}
      fill="#3b434e"
    >
      <path d="M21,8H3A1,1,0,0,1,3,6H21a1,1,0,0,1,0,2Z"></path>
      <path d="M17,13H3a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"></path>
      <path d="M13,18H3a1,1,0,0,1,0-2H13a1,1,0,0,1,0,2Z"></path>
    </svg>
  );
}
