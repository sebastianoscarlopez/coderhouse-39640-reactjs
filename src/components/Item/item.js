import "./item.css";

const Item = ({ children, isSelected, onSelectedChange }) => {
  const clsIsSelected = isSelected ? "item_selected" : "";
  return (
    <div
      className={`item ${clsIsSelected}`}
      onClick={() => onSelectedChange(!isSelected)}
    >
      {children}
    </div>
  );
};

export default Item;
