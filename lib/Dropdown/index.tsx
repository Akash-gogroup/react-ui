import { useEffect, useRef, useState, useMemo } from "react";
import { Check, ChevronDown, ChevronUp } from "react-feather";

export type DropdownOption = {
  label: string;
  value: string;
};

export interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  label?: string;
  onSelect: (val: DropdownOption) => void;
}

export const Dropdown = (props: DropdownProps) => {
  const { options, label = "", placeholder = "Select", onSelect } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: DropdownOption) => {
    setSelected(item);
    onSelect(item);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const renderedOptions = useMemo(
    () =>
      options.map((option: DropdownOption, key: number) => (
        <li
          className={`${
            selected?.value === option.value && "bg-slate-100"
          } hover:bg-slate-100 transition-all flex justify-between items-center text-center cursor-pointer text-gray-900 select-none py-2 px-3 `}
          key={key}
          onClick={() => handleSelect(option)}
        >
          <span>{option.label}</span>
          <span>{selected?.value === option.value && <Check size={16} />}</span>
        </li>
      )),
    [options, selected]
  );

  return (
    <div ref={dropdownRef} className="flex flex-col max-w-[350px] w-full">
      {label && (
        <label className="block mb-2 ml-2 text-left text-md font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="relative">
        <div
          className="flex items-center justify-between cursor-pointer bg-white rounded-md border border-gray-200 focus:right-0 transition duration-500 ease-in-out hover:bg-gray-50 px-3 py-2"
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="font-normal block truncate">
            {selected ? selected.label : placeholder}
          </span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {open && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg py-1 text-base rounded-md ring-black max-h-80 overflow-auto"
            role="listbox"
          >
            {renderedOptions}
          </ul>
        )}
      </div>
    </div>
  );
};
