import "./item.css";

const Item = ({ children, isSelected, onSelectedChange }) => {
  const clsIsSelected = isSelected ? "item_selected" : "";
  return (
    <div
      className={`item ${clsIsSelected}`}
      onClick={() => onSelectedChange(!isSelected)}
    >
      Here is the item
    </div>
  );
};

export default Item;
