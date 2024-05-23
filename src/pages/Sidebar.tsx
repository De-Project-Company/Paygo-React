import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="mt-44 flex-col align-center justify-center">
        <NavLink
          to="/"
          className="hover:bg-blue-600 hover:shadow-lg p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md"
        >
          <img src="/assets/navbar/dashboard.png" alt="" />
          <span> Dashboard </span>
        </NavLink>

        <NavLink
          to="/client"
          className="hover:bg-blue-600 p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md "
        >
          <img src="/assets/navbar/client.png" alt="" />
          <span> Client </span>
        </NavLink>

        <NavLink
          to="/invoices"
          className="hover:bg-blue-600 p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md "
        >
          <img src="/assets/navbar/invoice.png" alt="" />
          <span> Invoices </span>
        </NavLink>

        <NavLink
          to="/sales-receipt"
          className="hover:bg-blue-600 p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md "
        >
          <img src="/assets/navbar/sales.png" alt="sales" />
          <span> Sales Receipt </span>
        </NavLink>

        <NavLink
          to="/payment-received"
          className="hover:bg-blue-600 p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md "
        >
          <img src="/assets/navbar/payment.png" alt="payment" />
          <span> Payment Received </span>
        </NavLink>

        <NavLink
          to="/expenses"
          className="hover:bg-blue-600 p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md "
        >
          <img src="/assets/navbar/expenses.png" alt="" />
          <span> Expenses </span>
        </NavLink>

        <NavLink
          to="/proj"
          className="hover:bg-blue-600 p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md "
        >
         <img src="/assets/navbar/project.png" alt="project" />
          <span> Projects </span>
        </NavLink>

        <NavLink
          to="/timesheet"
          className="hover:bg-blue-600 p-3 pl-7 mt-0 w-full flex justify-start items-center gap-2 text-2xl space-x-1 rounded-md "
        >
          <span>
            <FontAwesomeIcon icon={faClock} />    
          </span>
          <span> Timesheet </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
