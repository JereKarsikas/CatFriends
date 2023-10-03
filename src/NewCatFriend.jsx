import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import NewCatFriendForm from "./NewCatFriendForm";

function NewCatFriend({ onAddCat }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveCatDataHandler = (enteredCatData) => {
    const catsData = {
      ...enteredCatData,
      id: Math.random().toString(),
    };
    onAddCat(catsData);
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
