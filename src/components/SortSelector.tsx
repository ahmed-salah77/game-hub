import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}
const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-added", label: "Date added" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedSortOrder
  )?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Orderd by: {currentSortOrder ? currentSortOrder : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
