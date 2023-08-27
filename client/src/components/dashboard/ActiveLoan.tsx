import '../../App.css';

const cardsData = [
  {
    imageSrc: 'default_profile.svg',
    name: 'Title #1',
    amount: 'AUD 20.00',
    due_date: '03-09-2023',
    description:
      "Sign up as a lender or borrower. Fill in your details, set your preferences, and you're good to go!",
  },
  {
    imageSrc: 'default_profile.svg',
    name: 'Title #2',
    amount: 'AUD 59.00',
    due_date: '23-09-2023',
    description:
      "Swipe through profiles that fit your criteria. When both parties swipe right, it's a match!",
  },
  {
    imageSrc: 'default_profile.svg',
    name: 'Title #3',
    amount: 'AUD 37.00',
    due_date: '03-10-2023',
    description:
      'Engage in encrypted conversations to discuss loan terms, amounts, and repayment plans.',
  },
  {
    imageSrc: 'default_profile.svg',
    name: 'Title #4',
    amount: 'AUD 400.00',
    due_date: '03-01-2024',
    description:
      'Once both parties come to an agreement, move forward with your financial transactions off-platform.',
  },
];

export default function How() {
  return (
    <div>
      <div className="mt-[20px]">
        <h1 className="text-3xl font-medium">Active Loans</h1>
      </div>
      <div
        className="flex justify-center"
        style={{
          //   marginTop: '70px',
          marginBottom: '70px',
          display: 'flex',
          justifyContent: 'center', // Center the cards horizontally
          gap: '20px', // Add gaps between the cards
          padding: '20px', // Add padding around the cards
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card bg-white border border-gray-200 rounded-lg shadow"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <a href="#">
              <img
                className="how-it-works-image rounded-t-lg mb-3"
                src={card.imageSrc}
                alt=""
              />
            </a>
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-gray-900 dark:text-white">
                {card.amount}
              </h3>
              <h4 className="text-xl tracking-tight mb-3 text-gray-900 dark:text-white">
                {card.name}
              </h4>
              <div className="text-center">
                <h5>Payment due:</h5>
                <p className="mb-3 text-center dark:text-gray-400">
                  {card.due_date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
