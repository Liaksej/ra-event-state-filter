import { FunctionComponent } from "react";

interface ToolbarProps {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
  filters,
  selected,
  onSelectFilter,
}) => {
  return (
    <div className="justify-self-center bg-transparent py-2 px-1 flex gap-2">
      {filters.map((filter, index) => (
        <button
          onClick={() => onSelectFilter(filter)}
          key={index}
          className={`${
            filter === selected
              ? "bg-black text-white"
              : "text-black bg-transparent hover:bg-gray-200"
          } border border-black px-4 py-1 transition duration-150 ease-in-out`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
