import CreateNewClientForm from '@/components/forms/create-new-client-form';
import Modal from '@/components/modal';
import PaymentAnalytics from '@/components/payment-analytics';
import ShowView from '@/components/show-view/show-view';
import SvgIcon from '@/components/svg-icon/svg-icon';
import { ISvgIconNameTypes } from '@/types/svg-icon-type';
import { formatCurrency } from '@/utils/formatCurrency';

const Dashboard = () => {
  const dashboardCardData = [
    {
      icon: 'invoice',
      title: 'Invoice',
      amount: 500,
      percentage: 10,
    },
    {
      icon: 'money-bill',
      title: 'Payments',
      amount: 4000,
      percentage: 5,
    },
    {
      icon: 'clock',
      title: 'Outstanding Payments',
      amount: 600,
      percentage: 2,
    },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center gap-6 justify-between w-full py-4">
        <div className="flex border items-center w-full max-w-[600px] rounded-md gap-2 [&>*]:p-2">
          <div>
            <SvgIcon name="search" className="w-[14px] h-[14px]" />
          </div>

          <input
            type="search"
            name=""
            id=""
            placeholder="Search contact"
            className="border-l"
          />
        </div>

        <div className="flex items-center gap-3">
          <SvgIcon name="bell" className="w-[16px] h-[16px]" />
          <p className="py-2 px-3 bg-blue-50">HG</p>
        </div>
      </div>

      <div className="py-5">
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-between w-full">
          <div>
            <h3 className="text-[20px] md:text-[24px]">Welcome! Paul</h3>
            <p>Here are the current financial statistics</p>
          </div>

          <div className="flex gap-3 [&>button]:bg-blue-600 [&>button]:flex [&>button]:gap-1 [&>button]:xs:gap-3 [&>button]:items-center [&>button]:py-3 [&>button]:px-4 [&>button]:h-fit [&>button]:rounded-md text-white text-[12px] xs:text-[14px] ">
            <button>
              <SvgIcon name="plus" className="w-[14px] h-[14px]" />

              <p>Add new invoice</p>
            </button>

            <Modal
              hideCloseButton
              disableEscapeDown
              disableOutsideClick
              trigger={
                <button>
                  <SvgIcon name="plus" className="w-[14px] h-[14px]" />

                  <p>Add new client</p>
                </button>
              }
            >
              {(close) => <CreateNewClientForm close={close} />}
            </Modal>
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-5 my-10">
          {dashboardCardData.map((item, i) => (
            <div
              key={i}
              className="w-full bg-white py-10 px-5 border rounded-xl min-w-[90%] xs:min-w-[320px] flex flex-col gap-5"
            >
              <div className="rounded-1/2 p-4 border w-max">
                <SvgIcon
                  name={item.icon as ISvgIconNameTypes}
                  className="w-7 h-7"
                />
              </div>

              <p>{item.title}</p>

              <div className="flex w-full items-center justify-between gap-3">
                <p className="font-bold">{formatCurrency(item.amount)}</p>

                <div className="flex gap-1 items-center bg-blue-50 rounded-full py-2 px-4">
                  <SvgIcon name="line-chart" className="w-[16px] h-[16px]" />

                  <p>{item.percentage}% Today</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 [&>div]:border [&>div]:p-5 [&>div]:max-h-[500px] [&>div]:rounded-[12px] ">
          <PaymentAnalytics />

          <div className="flex flex-col relative">
            <div className="py-4 flex justify-between gap-5 font-bold sticky top-0 bg-white z-1">
              <p>Invoice Payment History</p>

              <button className="text-blue-600">See all</button>
            </div>

            <ShowView when={false}>
              <div className="flex-1 grid place-items-center text-center">
                <div>
                  <p>
                    <strong>No data to show</strong>
                  </p>

                  <p>Create a client profile and start sending invoices</p>
                </div>
              </div>
            </ShowView>

            <div className="flex-1 overflow-auto">
              <ShowView when>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 border-t py-4"
                  >
                    <div className=" rounded-1/2 bg-blue-700 text-white p-3 grid place-items-center font-bold">
                      <p>AP</p>
                    </div>

                    <div className="flex-1 items-center flex justify-between gap-3">
                      <div>
                        <p>Almond Pharmaceuticals</p>
                        <p>#1212121</p>
                      </div>

                      <p>{formatCurrency(500)}</p>
                    </div>
                  </div>
                ))}
              </ShowView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
