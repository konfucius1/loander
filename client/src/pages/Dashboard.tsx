import ActiveLoan from '@/components/Dashboard/ActiveLoan';
import '../App.css';

const Header = () => {
  return (
    <section className="mb-8 flex flex-col justify-start text-left">
      <h1 className="capitalize font-medium text-3xl">
        Your Financial Hub for Borrower-Lender Connections
      </h1>
      <h2 className="font-light text-md">
        Find all information you need about your ongoing loan agreements, match
        history, and your personal account here.
      </h2>
    </section>
  );
};

export const Dashboard = () => {
  return (
    <>
      <div className="p-8">
        <Header />
        <ActiveLoan />
      </div>
      <div className="flex justify-center"></div>
    </>
  );
};
