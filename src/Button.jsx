import { useState } from "react";
import NewCatFriendForm from "./NewCatFriendForm";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

function Button() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex justify-center pb4">
      <div className="flex-column flex">
        <button className="create-button" onClick={openForm}>
          <Icon path={mdiPlus} size={1} color="green" /> Create new cat friend
        </button>

        <NewCatFriendForm isOpen={isFormOpen} onClose={closeForm} />
      </div>
    </div>
  );
}

export default Button;
