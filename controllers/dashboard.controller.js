
export const getSummary = async (req, res) => {
    const summary = await Record.aggregate([
        {
            $group: {
                _id: "$type",
                totalAmount: { $sum: "$amount" },
            },
        },
    ]);

    let income = 0, expense = 0;

    summary.forEach((s) => {
        if(s._id === "income") income = s.totalAmount;
        else expense = s.totalAmount;
    });

    const monthlySummary = await Record.aggregate([
        {
            $group: {
                _id: { month: { $month : "$date" }},
                totalAmount: { $sum: "$amount" },
            }
        },
        {
            $sort: { "_id.month": 1 }
        }
    ]);

    res.status(200).json({
        totalIncome: income, 
        totalExpense: expense, 
        netBalance: income - expense, 
        monthlyTrend: monthlySummary
    })

}