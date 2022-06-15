import React from "react";
import InventoryItemCard from "./InventoryItemCard";

function ReorderInventoryList({ reorderList, onClick, onDelete }) {
  return (
    <div id="reorder-container">
      <h2>Reorder</h2>
      <div>
        {reorderList.map((item) => (
          <InventoryItemCard
            key={item.id + "reorder"}
            item={item}
            onClick={onClick}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default ReorderInventoryList;
