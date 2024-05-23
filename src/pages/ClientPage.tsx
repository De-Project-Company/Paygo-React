import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ClientPage: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setSelectedCurrency(value);
    console.log("Selected Currency:", value);
  };

  const [selectedPaymentTerms, setSelectedPaymentTerms] = useState<string>("");

  const handlePaymentTermsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setSelectedPaymentTerms(value);
    console.log("Selected Payment Terms:", value);
  };
 
  const [selectedTaxRate, setSelectedTaxRate] = useState<string>("");

  const handleSelectedTaxRate = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setSelectedTaxRate(value);
    console.log("Selected Payment Terms:", value);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-extrabold text-6xl"> Add Client</h2>
        <div className="flex gap-5">
          <button className="border-2 border-blue-600 border-solid pt-2 pb-2 pl-8 pr-8 text-blue-600  hover:bg-blue-700 hover:text-white">
            Save
          </button>
          <button className="border-2 border-blue-600 border-solid pt-2 pb-2 pl-8 pr-8 text-blue-600  hover:bg-blue-700 hover:text-white">
            Cancel
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between place-items-center mt-20 w-4/5">
          <p> Select client type </p>

          <label className="checkbox-container">
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckChange}
            />
            <span className="checkbox-label"></span>
            Business
          </label>

          <label className="checkbox-container">
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckChange}
            />
            <span className="checkbox-label"></span>
            Individual
          </label>
        </div>
      </div>

      <div>
        <div className="flex justify-between place-items-center mt-3">
          <p> Salutation </p>

          <label className="checkbox-container flex items-cente">
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckChange}
            />
            <span className="checkbox-label"></span>
            Mr
          </label>

          <label className="checkbox-container">
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckChange}
            />
            <span className="checkbox-label"></span>
            Mrs.
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckChange}
            />
            <span className="checkbox-label"></span>
            Dr.
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckChange}
            />
            <span className="checkbox-label"></span>
            Miss.
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckChange}
            />
            <span className="checkbox-label"></span>
            None
          </label>
        </div>
      </div>

      <div className=" flex justify-between gap-10 mt-5">
        <div className=" w-1/2">
          <div className="flex flex-col flex-1 ">
            <label className="mt-5 text-lg font-medium"> First Name: </label>
          </div>
          <input
            type="text"
            className="border-solid border-2 border-rgba(114, 114, 114, 1) pl-3  w-full h-14 mt-2 outline-none"
          />
          <div className="flex flex-col">
            <label className="mt-5 text-lg font-medium"> Email Address: </label>
            <input
              type="text"
              className="border-solid border-2 border-rgba(114, 114, 114, 1) pl-3  w-full h-14 mt-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 text-lg font-medium"> Website: </label>
            <input
              type="text"
              className="border-solid border-2 border-rgba(114, 114, 114, 1) pl-3  w-full h-14 mt-2 outline-none"
            />
          </div>
        </div>

        <div className=" w-1/2">
          <div className="flex flex-col flex-1">
            <label className="mt-5 text-lg font-medium"> Last Name: </label>
            <input
              type="text"
              className="border-solid border-2 border-rgba(114, 114, 114, 1) pl-3  w-full h-14 mt-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 text-lg font-medium"> Phone Number: </label>
            <input
              type="text"
              className="border-solid border-2 border-rgba(114, 114, 114, 1) pl-3 w-full h-14 mt-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 text-lg font-medium"> Address 1: </label>
            <input
              type="text"
              className="border-solid border-2 border-rgba(114, 114, 114, 1) pl-3  w-full h-14 mt-2 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-base font-bold"> OTHER DETAILS </h3>
        <div className="flex justify-between text-lg font-medium">
        <div className=" flex border-solid border-2 border-rgba(114, 114, 114, 1) w-5/12 items-center justify-between h-16 pl-2 pr-2">
          <p> currency </p>

          <select value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="NGN">NGN</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        
        <div className=" flex border-solid border-2 border-rgba(114, 114, 114, 1) w-1/2 items-center justify-between h-16 pl-2 pr-2">
          <p> Payment Terms </p>

          <select className="text-sm" value={selectedPaymentTerms} onChange={handlePaymentTermsChange}>
            <option value="endOfTheMonth">Due end of the month</option>
            <option value="endOfNextMonth">Due end of next month </option>
          </select>
        </div> 
        </div>  
      </div>

      <div className="mt-6 border-solid border-2 border-rgba(114, 114, 114, 1) w-full p-4">
        <h3 className="text-base font-bold"> TAX DETAILS </h3>
        <div className="flex items-center border-solid border-2 border-rgba(114, 114, 114, 1) h-12">
          <select className="text-lg font-medium" value={selectedTaxRate} onChange={handleSelectedTaxRate}>
            <option value="taxRate"> Tax Rate </option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-base font-bold"> ADDRESS DETAILS </h3>

        <div className="border-solid border-2 border-rgba(114, 114, 114, 1) w-full p-4">
          <h4 className="text-sm font-bold"> Billing Address</h4>
          
          <div className="flex items-center justify-between mt-3 border-solid border-2 border-rgba(114, 114, 114, 1) p-4 font-medium text-sm">
            <p> Country/Region </p>
            <p> Select or type to add</p>
          </div>
          <div className="flex items-center justify-between mt-3 border-solid border-2 border-rgba(114, 114, 114, 1) p-4 font-medium text-sm">
            <p> Address </p>
            <p> Select or type to add</p>
          </div>
        
          <div className="flex items-center justify-between mt-3 border-solid border-2 border-rgba(114, 114, 114, 1) p-4 font-medium text-sm">
            <p> State </p>
            <p> Select or type to add</p>
          </div>
          </div>

        <div className="border-solid border-2 border-rgba(114, 114, 114, 1) w-full p-4 mt-4" >
          <h4 className="text-sm font-bold"> Shipping Address</h4>
          
          <div className="flex items-center justify-between mt-3 border-solid border-2 border-rgba(114, 114, 114, 1) p-4 font-medium text-sm">
            <p> Country/Region </p>
            <p> Select or type to add</p>
          </div>
          <div className="flex items-center justify-between mt-3 border-solid border-2 border-rgba(114, 114, 114, 1) p-4 font-medium text-sm">
            <p> Address </p>
            <p> Select or type to add</p>
          </div>
        
          <div className="flex items-center justify-between mt-3 border-solid border-2 border-rgba(114, 114, 114, 1) p-4 font-medium text-sm">
            <p> State </p>
            <p> Select or type to add</p>
          </div>
          </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold"> CONTACT PERSONS </h3>
        <div className="flex items-center gap-2 mt-4">
        <span className="add flex items-center justify-center w-7 h-7 rounded-full"> <FontAwesomeIcon icon={faPlus} className="w-3 text-white"/> </span>
        <span className="text-sm">Add new cotntact</span>
        </div>
      </div>

      <div className="mt-6">
        <span className="font-bold"> REMARKS </span> <span className="text-base"> (For internal use only)  </span>
        <div className="border-solid border-2 border-rgba(114, 114, 114, 1) w-full h-40 rounded mt-4">

        </div>
      </div>

    </div>
  );
};

export default ClientPage;
 