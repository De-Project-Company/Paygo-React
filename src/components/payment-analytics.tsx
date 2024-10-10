import LineChart from './chart/line-chart';

const PaymentAnalytics = () => {
  return (
    <div>
      <div className="py-4 flex justify-between gap-5 font-bold">
        <p>Payment Analytics</p>

        <button className="text-blue-600">See all</button>
      </div>

      <LineChart price={[0, 20, 80, 40, 100, 60, 20, 90, 20, 50, 50, 30]} />
    </div>
  );
};

export default PaymentAnalytics;
