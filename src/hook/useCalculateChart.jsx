import useGetTransaction from "../hook/useGetTransaction";

export default function useCalculateChart() {
  const { transactions } = useGetTransaction();

  function calculateTotalExpenses(data) {
    const totals = {};

    // Iterate through the expense data
    data.forEach((expense) => {
      const category = expense.category;
      const amount = parseInt(expense.amount); // Convert amount to integer

      // If category doesn't exist in totals, initialize it with 0
      if (!totals[category]) {
        totals[category] = 0;
      }

      // Add amount to the total of the category
      totals[category] += amount;
    });

    return totals;
  }

  const totalExpenses = calculateTotalExpenses(transactions);

  // Output the total expenses for each category
  for (const category in totalExpenses) {
    console.log(`${category}: ${totalExpenses[category]}`);
  }

  const {
    EducationDevelopment,
    FoodDrinks,
    EntertainmentRecreation,
    HouseholdUtilities,
    HealthPersonalCare,
    Other,
  } = totalExpenses;

  // Calculate total sum of all categories
  const TotalSum = Object.values(totalExpenses).reduce(
    (acc, cur) => acc + cur,
    0,
  );

  const data = [
    { EducationDevelopment },
    { FoodDrinks },
    { EntertainmentRecreation },
    { HouseholdUtilities },
    { HealthPersonalCare },
    { Other },
  ];

  return {
    data,
    EducationDevelopment,
    FoodDrinks,
    EntertainmentRecreation,
    HouseholdUtilities,
    HealthPersonalCare,
    Other,
    TotalSum,
  };
}
