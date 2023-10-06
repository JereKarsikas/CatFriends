import { useState, useMemo } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import NewCatFriendForm from "./NewCatFriendForm";

function NewCatFriend({ onAddCat, catId }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Using UseMemo because too many useState cause infinity loop
  const nextCatId = useMemo(() => String(catId + 1), [catId]);

  // Save added cat and give it the next available ID
  const saveCatDataHandler = (enteredCatData) => {
    const newCat = {
      ...enteredCatData,
      id: nextCatId,
    };
    onAddCat(newCat);
    setIsFormOpen(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex justify-center pb4">
      <div className="flex-column flex">
        {!isFormOpen && (
          <button className="create-button bg-lightest-blue" onClick={openForm}>
            <Icon path={mdiPlus} size={1} color="green" />
            Create new cat friend
          </button>
        )}
      </div>
      {isFormOpen && (
        <NewCatFriendForm
          onSaveCatData={saveCatDataHandler}
          onCancel={closeForm}
        />
      )}
    </div>
  );
}

export default NewCatFriend;
