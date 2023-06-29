import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpensesForm from "./expense-tracker/components/ExpensesForm";
// import categories from "./expense-tracker/categories";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("");

	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: "Rent",

			amount: 1000,
			category: "Utilities",
		},
		{
			id: 2,
			description: "Food",

			amount: 1000,
			category: "Utilities",
		},
		{
			id: 3,
			description: "Gas",

			amount: 1000,
			category: "Utilities",
		},
	]);

	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	return (
		<>
			<div>
				<div className="mb-5">
					<ExpensesForm
						onSubmit={(expense) =>
							setExpenses([
								...expenses,
								{ ...expense, id: expenses.length + 1 },
							])
						}
					/>
				</div>
				<div className="mb-3">
					<ExpenseFilter
						onSelectCategory={(category) => setSelectedCategory(category)}
					/>
					FE
				</div>
				<ExpenseList
					expenses={visibleExpenses}
					onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
				/>
			</div>
		</>
	);
}

export default App;
