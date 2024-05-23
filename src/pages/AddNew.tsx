import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNew: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="./assets/clients/Customer segmentation and target audience(2).png"
        alt=""
      />
      <p className="w-2/5 text-center text-xl font-bold">
        Create customers to quickly pre-fill their information while creating
        invoices
      </p>
      <NavLink
        to="/client/addClient"
        className="flex items-center align-middle gap-2 mt-14 border-solid border-2 border-blue-400 rounded-full pt-2 pb-2 pl-8 pr-8 text-xl font-black text-blue-600"
      >
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Add new
      </NavLink>
    </div>
  );
};

export default AddNew;
