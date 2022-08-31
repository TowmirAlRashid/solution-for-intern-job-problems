const data = [
  {
    user_id: "4a1b84f7-9756-4549-837e-9574c7ffc142",
    timestamp: "1970-01-01T00:00:00.000Z",
    currency: "GBP",
    amount: "+12.00",
  },
  {
    user_id: "4a1b84f7-9756-4549-837e-9574c7ffc142",
    timestamp: "1970-01-01T00:00:00.000Z",
    currency: "USD",
    amount: "-12.00",
  },
  {
    user_id: "faf4a6fe-c839-4ee3-ac11-ee3957ac6332",
    timestamp: "1970-01-01T00:00:00.000Z",
    currency: "EUR",
    amount: "-3.99",
  },
  {
    user_id: "4a1b84f7-9756-4549-837e-9574c7ffc142",
    timestamp: "1970-01-01T00:00:00.000Z",
    currency: "EUR",
    amount: "-44.00",
  },
  {
    user_id: "4a1b84f7-9756-4549-837e-9574c7ffc142",
    timestamp: "1970-01-01T00:00:00.000Z",
    currency: "GBP",
    amount: "+120.00",
  },
];

//task 8: Get the Transaction Records
let transactionRecords = {};

data.forEach((item) => {
  if (!transactionRecords.hasOwnProperty(item.user_id)) {
    transactionRecords = {
      ...transactionRecords,
      [item.user_id]: {},
    };
  }

  if (!transactionRecords[item.user_id].hasOwnProperty(item.currency)) {
    transactionRecords = {
      ...transactionRecords,
      [item.user_id]: {
        ...transactionRecords[item.user_id],
        [item.currency]: 0,
      },
    };
  }

  transactionRecords = {
    ...transactionRecords,
    [item.user_id]: {
      ...transactionRecords[item.user_id],
      [item.currency]:
        transactionRecords[item.user_id][item.currency] + Number(item.amount),
    },
  };
});

console.log("Task 8: Multiple Transactions Handling =>");
console.log(transactionRecords);
