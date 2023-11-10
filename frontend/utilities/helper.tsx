export const currencies = [
  {
    id: 1,
    label: 'EUR',
  },
  {
    id: 2,
    label: 'BTC',
  },
  {
    id: 3,
    label: 'JPY',
  },
  {
    id: 4,
    label: 'USD',
  },
];
export const wallets = [
  {
    id: 1,
    label: 'Google pay',
  },

  {
    id: 2,
    label: 'Debit card',
  },
  {
    id: 3,
    label: 'Cash',
  },
  {
    id: 4,
    label: 'Online',
  },
  {
    id: 5,
    label: ' Credit card',
  },
];
export const category = [
  {
    id: 1,
    label: 'Household',
  },

  {
    id: 2,
    label: 'Treatment',
  },
  {
    id: 3,
    label: 'Transport',
  },
  {
    id: 4,
    label: 'Food',
  },
  {
    id: 5,
    label: 'Education',
  },
];

export const timeDuration = [
  {
    id: 1,
    label: 'By Weeks',
  },
  {
    id: 2,
    label: 'By Months',
  },
  {
    id: 3,
    label: 'By Years',
  },
];

export interface Month {
  id: number;
  label: string;
}
export const months: Month[] = [
  {
    id: 1,
    label: 'January',
  },
  {
    id: 2,
    label: 'February',
  },
  {
    id: 3,
    label: 'March',
  },
  {
    id: 4,
    label: 'April',
  },
  {
    id: 5,
    label: 'May',
  },
  {
    id: 6,
    label: 'June',
  },
  {
    id: 7,
    label: 'July',
  },
  {
    id: 8,
    label: 'August',
  },
  {
    id: 9,
    label: 'September',
  },
  {
    id: 10,
    label: 'October',
  },
  {
    id: 11,
    label: 'November',
  },
  {
    id: 12,
    label: 'December',
  },
];

export const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2UzYzgzYzZkNzA5OWFlYjlkYTJmOCIsImVtYWlsIjoiYWJAZ21haWwuY29tIiwiaWF0IjoxNjk5MzQ4NTAzLCJleHAiOjE2OTkzNzg1MDN9.6G4OMax1gW2PUktKwF-2v68yf_S9oS53piMoqffI2uo',
};
