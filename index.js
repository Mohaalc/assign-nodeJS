function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysExcludingFridays = [];
    const daysWorkedExcludingFridays = [];
    const monthlyTargets = [];
    let totalTarget = 0;

    const monthStartDate = new Date(start.getFullYear(), start.getMonth(), 1);
    const monthEndDate = new Date(end.getFullYear(), end.getMonth() + 1, 0);

    while (monthStartDate <= monthEndDate) {
        const monthDays = [];
        const daysInMonth = new Date(monthStartDate.getFullYear(), monthStartDate.getMonth() + 1, 0).getDate();
        let daysCount = 0;
        
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(monthStartDate.getFullYear(), monthStartDate.getMonth(), day);
            if (currentDate.getDay() !== 5) {
                monthDays.push(currentDate);
                daysCount++;
            }
        }

        let daysWorked = 0;
        for (const day of monthDays) {
            if (day >= start && day <= end) {
                daysWorked++;
            }
        }

        const monthlyTarget = (daysWorked > 0) ? (totalAnnualTarget / (daysExcludingFridays.reduce((a, b) => a + b, 0) || 1)) * daysWorked : 0;

        daysExcludingFridays.push(daysCount);
        daysWorkedExcludingFridays.push(daysWorked);
        monthlyTargets.push(monthlyTarget);
        totalTarget += monthlyTarget;

        monthStartDate.setMonth(monthStartDate.getMonth() + 1);
    }

    return {
        daysExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget
    };
}

console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));
