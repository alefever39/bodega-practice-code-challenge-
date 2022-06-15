import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList";

function InventoryManager() {
  // The inventory contains all of the data from the API.
  const [inventory, setInventory] = useState([]);
  // The reorderList only contains items that have been clicked in the current inventory (no duplicates).
  const [reorderList, setReorderList] = useState([]);

  //the first time this component is mounted it will fetch the data from the API
  useEffect(() => {
    fetch("http://localhost:8001/inventory")
      .then((response) => response.json())
      .then((data) => setInventory(data))
      .catch((error) => window.alert(error));
  }, []);

  // When the item card is clicked in the current inventory this function will be invoked. The clicked item will be added to reorderList if it doesn't yet exist there.
  function handleAddReorder(newItem) {
    // creates an array that is populated by the newItem if it already exists in reorderList. creates an empty array if the item hasn't been added yet.
    const itemCheck = reorderList.filter((item) => item.id === newItem.id);
    //checks if the itemCheck array has anything inside it. If it does it will not add the newItem to the reorder list.
    if (itemCheck[0]) {
      return reorderList;
    } else {
      setReorderList([...reorderList, newItem]);
    }
  }

  // When the item card is clicked in the reorder inventory list this function will be invoked. The clicked item will be removed from reorderList.
  function handleRemoveReorder(removeItem) {
    setReorderList(reorderList.filter((item) => item.id !== removeItem.id));
  }

  // When the delete button is pressed on the InventoryItemCard the item will be removed from both the inventory list and the reorder list.
  function onDelete(id) {
    setInventory(inventory.filter((item) => item.id !== id));
    setReorderList(reorderList.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <CurrentInventoryList
        inventory={inventory}
        onClick={handleAddReorder}
        onDelete={onDelete}
      />
      <ReorderInventoryList
        reorderList={reorderList}
        onClick={handleRemoveReorder}
        onDelete={onDelete}
      />
    </div>
  );
}

export default InventoryManager;
