# Calculate Total Target

## Overview

The `calculateTotalTarget` function computes the total work target over a specified date range, excluding Fridays, based on an annual target. It provides insights into the number of working days, days worked, and monthly targets.

## Function Signature

```javascript
function calculateTotalTarget(startDate, endDate, totalAnnualTarget)
```

### Parameters

- **startDate**: A string representing the start date in the format `'YYYY-MM-DD'`.
- **endDate**: A string representing the end date in the format `'YYYY-MM-DD'`.
- **totalAnnualTarget**: A number representing the total target for the year.

### Returns

An object containing the following properties:

- **daysExcludingFridays**: An array representing the total number of days in each month excluding Fridays.
- **daysWorkedExcludingFridays**: An array representing the number of days worked (within the specified date range) excluding Fridays for each month.
- **monthlyTargets**: An array representing the target for each month based on the number of days worked.
- **totalTarget**: A number representing the total target over the specified date range.

## Example Usage

```javascript
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
```

### Output Example

```json
{
  "daysExcludingFridays": [22, 20, 22],
  "daysWorkedExcludingFridays": [22, 20, 22],
  "monthlyTargets": [5220, 5220, 5220],
  "totalTarget": 15660
}
```

## Implementation Details

1. **Date Parsing**: The function converts the input strings into `Date` objects for easier date manipulation.
2. **Exclusion of Fridays**: The function iterates through each month in the given date range and counts the total days excluding Fridays.
3. **Calculating Monthly Targets**: The monthly target is calculated based on the number of days worked in each month, proportionate to the total annual target.
4. **Return Structure**: The function returns an object with detailed breakdowns for further analysis.

## Notes

- Ensure that the date format is consistent (`'YYYY-MM-DD'`).
- The function accounts for months with different numbers of days.
- It does not account for public holidays or other non-working days apart from Fridays.

## License

This project is licensed under the MIT License. Feel free to modify and distribute as needed!#   A s s i g n m e n t - n o d e j s 
#   a s s i g n - n o d e J S  
 