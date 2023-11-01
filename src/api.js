const transactions = [
  { id: 't_01', merchant: 'Comet Cruises', amount: 100 },
  { id: 't_02', merchant: 'Treats Trove', amount: 120 },
  { id: 't_03', merchant: 'Gear Garage', amount: -100 },
  { id: 't_04', merchant: 'Comet Cruises', amount: -21 },
  { id: 't_05', merchant: 'Gear Garage', amount: -200 },
  { id: 't_06', merchant: 'Area Announcer', amount: 20 },
  { id: 't_07', merchant: 'Treats Trove', amount: -7 },
  { id: 't_08', merchant: 'Comet Cruises', amount: -21 },
  { id: 't_09', merchant: 'Area Announcer', amount: 80 },
  { id: 't_10', merchant: 'Hometown Hops', amount: 80 },
];

export const fetchData = () =>
  new Promise(resolve => setTimeout(resolve, 500, transactions));
