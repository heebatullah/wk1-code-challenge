function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates, NHIF and NSSF contributions
    let PAYE_RATES = [
      { min: 0, max: 24000, rate: 0.1 },
      { min: 24001, max: 32333, rate: 0.25 },
      { min: 32334, max: 500000, rate: 0.3 },
      { min: 500001, max: 800000, rate: 0.325 },
      { min: 800001, max: Infinity, rate: 0.35 }
    ];
  
    let NHIF_RATES = [
      { min: 0, max: 5999, amount: 150 },
      { min: 6000, max: 7999, amount: 300 },
      { min: 8000, max: 11999, amount: 400 },
      { min: 12000, max: 14999, amount: 500 },
      { min: 15000, max: 19999, amount: 600 },
      { min: 20000, max: 24999, amount: 750 },
      { min: 25000, max: 29999, amount: 850 },
      { min: 30000, max: 34999, amount: 900 },
      { min: 35000, max: 39999, amount: 950 },
      { min: 40000, max: 44999, amount: 1000 },
      { min: 45000, max: 49999, amount: 1100 },
      { min: 50000, max: 59999, amount: 1200 },
      { min: 60000, max: 69999, amount: 1300 },
      { min: 70000, max: 79999, amount: 1400 },
      { min: 80000, max: 89999, amount: 1500 },
      { min: 90000, max: 99999, amount: 1600 },
      { min: 100000, max: 109999, amount: 1700 },
      { min: 110000, max: 119999, amount: 1800 },
      { min: 120000, max: 129999, amount: 1900 },
      { min: 130000, max: 139999, amount: 2000 },
      { min: 140000, max: 149999, amount: 2100 },
      { min: 150000, max: Infinity, amount: 2200 }
    ];
  
    let NSSF_RATE_EMPLOYEE = 0.06; // equivalent to 6%
  
    // Calculating  the gross salary
    let grossSalary = basicSalary + benefits;
  
    // Calculating the PAYE (Tax)
  let payee = 0;
  for (let i = 0; i < PAYE_RATES.length; i++) {
    if (grossSalary > PAYE_RATES[i].min) {
      let taxableAmount = 0;
      if (grossSalary <= PAYE_RATES[i].max) {
        taxableAmount = grossSalary - PAYE_RATES[i].min;
      } else {
        taxableAmount = PAYE_RATES[i].max - PAYE_RATES[i].min;
      }
      payee += taxableAmount * PAYE_RATES[i].rate;
    //   grossSalary -= taxableAmount; 
    grossSalary = grossSalary - taxableAmount;
    }
  }
  
  // NHIF Deductions 

    // Calculating NSSF deductions 
    let nssfDeductionsEmployee = grossSalary * NSSF_RATE_EMPLOYEE;
  

    // Calculating the net salary
    let netSalary = basicSalary + benefits - payee  - nssfDeductionsEmployee;
  
    
    console.log("Gross Salary: " + grossSalary);
    console.log("PAYE (Tax): " + payee);
    console.log("NSSF Deductions : " + nssfDeductionsEmployee);
    console.log("Net Salary: " + netSalary);
  
 
  }
  
  // basicSalary and benefits
  calculateNetSalary(60000, 5000);  
  