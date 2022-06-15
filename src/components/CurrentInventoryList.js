import React from "react";
import InventoryItemCard from "./InventoryItemCard";

function CurrentInventoryList({ inventory, onClick, onDelete }) {
  return (
    <div id="current-inventory">
      <h2>Current Inventory</h2>
      <div>
        {/* map over all of the items in inventory to create a card for each. */}
        {inventory.map((item) => (
          <InventoryItemCard
            key={item.id}
            item={item}
            onClick={onClick}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrentInventoryList;
