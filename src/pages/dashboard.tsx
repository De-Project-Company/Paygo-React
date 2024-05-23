import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const BarChartData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="border-solid border-2 border-rgba(0, 0, 0, 0.13) rounded-3xl p-6 flex gap-2 align-middle justify-center w-2/5 h-36">
          <img
            className="w-16 object-contain"
            src="./assets/dashboard/Group 81.png"
            alt=""
          />
          <div className="flex flex-col align-middle justify-center">
            <h1 className="font-bold text-4xl"> Hi! John Doe. </h1>
            <p className="italic font-bold"> John </p>
          </div>
        </div>

        <div className="border-solid border-2 border-rgbargba(0, 0, 0, 0.07) rounded-xl p-4 px-[50px] shadow-md flex flex-col gap-3 w-3/5 h-44">
          <h1 className="font-bold text-4xl"> Total Revenue</h1>
          <div className="flex justify-between">
            <div>
              <p className="text-3xl"> $600k </p>
              <div className="mt-4 text-lg">
                <span className="text-green-500"> 12.5% </span>{" "}
                <span> than last month </span>
              </div>
            </div>
            <ResponsiveContainer width="18%" height='100%'>
              <BarChart width={150} height={40} data={BarChartData}>
                <Bar dataKey="uv" fill="green" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-3 items-center align-middle justify-center w-full mt-3">
          <img className="" src="./assets/dashboard/Group 3.png" alt="arrow" />

          <div className="flex flex-row w-5/6 justify-between items-center">
            <div>
              <div className="flex align-middle items-center gap-3 w-fit p-1 text-lg">
                <p> Income for Dec 2023 </p>{" "}
                <div className="flex w-6 h-5 bg-blue-600"> </div>
              </div>
              <div className="flex align-middle items-center gap-3 w-fit p-1 text-lg">
                <p> Expense for Dec 2023 </p>{" "}
                <div className="w-6 h-5 bg-red-600"> </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold"> This Year </h3>
              <div className="text-lg mt-2">
                <p> NGN 0.00</p>
                <p> NGN 0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400} className="mt-7">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
