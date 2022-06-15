import React from "react";

function InventoryItemCard({ item, onClick, onDelete }) {
  //desructure the item object into it's individual parts.
  const { id, image, name, price } = item;

  // When the delete button is clicked a delete request will be sent for that particular item.
  function handleDelete() {
    fetch(`http://localhost:8001/inventory/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      //When the response comes back the onDelete function will be called.
      .then((res) => onDelete(id))
      .catch((error) => window.alert(error));
  }

  return (
    // the onClick function will either be handleAddReorder or handleRemoveReorder depending on if it was mounted in ReorderInventoryList or CurrentInventoryList respectively.
    <div className="card" onClick={() => onClick(item)}>
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      <h4>${price}</h4>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default InventoryItemCard;
