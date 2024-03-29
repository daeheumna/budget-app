// rrd imports
import { useLoaderData } from "react-router-dom";

// helpers
import { deleteItem, fetchData } from "../helpers";

// component imports
import Table from "../components/Table";
import { toast } from "react-toastify";

// loader
export async function expensesLoader() {
    const expenses= fetchData("expenses");
    return { expenses };
  }

const ExpensesPage = () => {
   const { expenses } = useLoaderData()

   return <div className="grid-lg">
        <h1>All Expenses</h1>
        {
            expenses && expenses.length > 0
                ? (
                    <div className="grid-md">
                        <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
                        <Table expenses={expenses}/>
                    </div>
                )
                : <p>No expenses to show</p>
        }
   </div>
}

// action
export async function expensesAction({request}){
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    if (_action === "deleteExpense") {
        try {
          deleteItem({
            key: "expenses",
            id: values.expenseId
          });
          return toast.success(`Expense deleted!`)
        } catch (e) {
          throw new Error("There was a problem deleting your expense.")
        }
      }
}

export default ExpensesPage;