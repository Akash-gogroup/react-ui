import React, { useState, useEffect } from "react";
import {
  Checkbox,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  ListItemText,
  SelectChangeEvent,
  OutlinedInput,
} from "@mui/material";

// Define props type
interface DropdownWithCheckboxProps {
  options: string[]; // Array of options to display
  onSelectionChange: (selectedItems: string[]) => void; // Callback when selected items change
  label?: string;
}

export const DropdownWithCheckbox: React.FC<DropdownWithCheckboxProps> = ({
  options,
  onSelectionChange,
  label = "Select",
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    onSelectionChange(selectedItems); // Trigger the callback whenever selected items change
  }, [selectedItems, onSelectionChange]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];

    // If "Select All" is selected, toggle select/deselect all
    if (value.includes("selectAll")) {
      if (selectedItems.length === options.length) {
        setSelectedItems([]); // Deselect all
      } else {
        setSelectedItems(options); // Select all items
      }
    } else {
      setSelectedItems(value); // Handle individual item selection
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedItems}
          input={<OutlinedInput label={label} />}
          onChange={handleChange}
          renderValue={(selected) => (selected as string[]).join(", ")}
        >
          {/* "Select All" option */}
          <MenuItem value="selectAll">
            <Checkbox
              checked={selectedItems.length === options.length}
              indeterminate={
                selectedItems.length > 0 &&
                selectedItems.length < options.length
              }
            />
            <ListItemText primary="Select All" />
          </MenuItem>

          {/* Individual options */}
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={selectedItems.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
