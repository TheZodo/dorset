"use client";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const Calculator = () => {
  const [interestRate, setInterestRate] = useState<number>(0.125);
  const [loanAmount, setLoanAmount] = useState<number>();
  const [loanPeriod, setLoanPeriod] = useState<number>(1);
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);
  const [totalRepayment, setTotalRepayment] = useState<number>(0);
  const [eligible, setEligible] = useState(false);
  const [canAfford, setCanAfford] = useState<number>(0);
  const [netSalary, setNetSalary] = useState<number>();
  const [basicSalary, setBasicSalary] = useState<number>();
  const [maxBorrow, setMaxBorrow] = useState<number>(0);
  function pmt(
    interest_rate: number,
    number_payments: number,
    present_value: number,
    future_value: number | undefined,
    type: number | undefined
  ): number {
    let pmt: number, pvif: number;
    if (!future_value) {
      future_value = 0;
    }
    if (!type) {
      type = 0;
    }
    pvif = Math.pow(1 + interest_rate, number_payments);
    pmt = (interest_rate / (pvif - 1)) * -(present_value * pvif + future_value);
    if (type === 1) {
      pmt /= 1 + interest_rate;
    }
    return Math.abs(pmt);
  }

  // function presentValue(
  //   rate: number,
  //   nper: number,
  //   pmt: number,
  //   fv: number = 0,
  //   type: number = 0
  // ): number {
  //   let pv: number;
  //   if (rate === 0) {
  //     pv = -1 * (fv + pmt * nper);
  //   } else {
  //     pv =
  //       -fv / Math.pow(1 + rate, nper) -
  //       (pmt * (1 + rate * type) * (Math.pow(1 + rate, nper) - 1)) / rate;
  //   }
  //   return Math.abs(pv);
  // }

  // function presentValue(
  //   rate: number,
  //   nper: number,
  //   pmt: number,
  //   fv: number = 0,
  //   type: number = 0
  // ): number {
  //   let pv: number;
  //   if (rate === 0) {
  //     pv = -1 * (fv + pmt * nper);
  //   } else {
  //     let x = Math.pow(1 + rate, -nper);
  //     let y = Math.pow(1 + rate, nper);
  //     pv =
  //       -1 *
  //       ((x * (fv + pmt * ((1 + rate * type) * nper))) / rate + (y * pmt * (1 + rate * type)) / rate - y * fv);
  //   }
  //   return Math.abs(pv);
  // }

  function presentValue(
    rate: number,
    periods: number,
    payment: number,
    futureValue: number = 0,
    type: number = 0
  ): number {
    // Calculate the discount rate
    const discountRate = rate;

    // Calculate the present value
    const presentValue =
      -1 *
      (futureValue +
        payment *
          (((1 + discountRate * type) * ((1 + discountRate) ** periods - 1)) /
            (discountRate * (1 + discountRate) ** periods)));

    return presentValue;
  }

  let monthly: number;
  let afford: number;
  let max: number;
  const calculate = () => {
    if (loanAmount && netSalary && basicSalary) {
      monthly = pmt(interestRate, loanPeriod, loanAmount, 0, 0);
      // (loanAmount * (1 + (interestRate * loanPeriod) / 100)) / loanPeriod;
      afford = netSalary - basicSalary * 0.2;
      max = presentValue(interestRate, loanPeriod, afford, 0, 0);
      // (afford * loanPeriod) / (1 + (interestRate * loanPeriod) / 100);

      setCanAfford(afford);
      setMonthlyRepayment(monthly);
      setTotalRepayment(monthly * loanPeriod);
      setMaxBorrow(max);
    }
    if (monthly > afford) {
      setEligible(false);
    } else {
      setEligible(true);
    }
  };

  return (
    <div className=" bg-blob flex h-full flex-col items-center justify-center bg-gray-20 px-6 sm:px-16">
      <h1 className="font-poppins ss:text-[32px] ss:leading-[60px] text-dark mt-6 flex-1 pt-40 text-base font-semibold leading-[35px] md:pt-0">
        Check Eligibility and Monthly Repayments
      </h1>
      <form className="flex flex-col items-center justify-around">
        <div className="items center flex w-full flex-col justify-around md:flex-row">
          <div className="m-5 flex w-[320px] flex-col items-center py-2">
            <label
              htmlFor="loanAmount"
              className="text-dark font-poppins text-base"
            >
              Enter The Amount You'd like to borrow
            </label>
            <input
              type="number"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-black"
              id="loanAmount"
              value={loanAmount}
              onChange={(e: any) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="m-5 flex w-[320px]  flex-col items-center py-2">
            <label
              htmlFor="basicSalary"
              className="text-dark font-poppins text-base"
            >
              What is your basic monthly income
            </label>
            <input
              type="number"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-black"
              id="basicSalary"
              value={basicSalary}
              onChange={(e: any) => setBasicSalary(e.target.value)}
            />
          </div>
          <div className="m-5 flex w-[320px]  flex-col items-center py-2">
            <label
              htmlFor="netSalary"
              className="text-dark font-poppins text-base"
            >
              What is your NET monthly income?
            </label>
            <input
              type="number"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-black"
              id="netSalary"
              value={netSalary}
              onChange={(e: any) => setNetSalary(e.target.value)}
            />
          </div>
        </div>
        <div className="m-5 flex w-11/12  flex-col items-center py-2">
          <label
            htmlFor="loanPeriod"
            className="font-poppins ss:text-[22px] ss:leading-[60px] text-dark mt-6 flex-1 text-base text-[12px] font-semibold leading-[35px]"
          >
            Loan Period: {loanPeriod} {loanPeriod == 1 ? "Month" : "Months"}{" "}
          </label>

          {/* <Slider
            value={loanPeriod}
            aria-label="Default"
            onChange={(e: any) => setLoanPeriod(e.target.value)}
            valueLabelDisplay="auto"
            min={1}
            max={12}
          /> */}
          {/* <InputLabel id="demo-simple-select-label">Loan Period</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={loanPeriod}
            label="Age"
            onChange={(e: any) => setLoanPeriod(e.target.value)}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
            <MenuItem value={7}>Seven</MenuItem>
            <MenuItem value={8}>Eight</MenuItem>
            <MenuItem value={9}>Nine</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={11}>Eleven</MenuItem>
            <MenuItem value={12}>One Year</MenuItem>
          </Select>
        </div>
      </form>
      <div className="w-screen">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-poppins ss:text-[32px] ss:leading-[60px] text-dark mt-6 flex-1 text-[12px] font-semibold leading-[35px]">
            YOUR MONTHLY <span className="text-secondary">REPAYMENTS</span> WILL
            BE
          </h2>
          <div className="font-poppins ss:text-[32px] ss:leading-[60px] text-dark flex-1 text-[12px] font-semibold leading-[35px]">
            K{Math.ceil(monthlyRepayment)}
          </div>
        </div>
        <div className="flex flex-row items-center justify-around p-20">
          <div className="font-poppins ss:text-[22px] text-dark flex flex-1 flex-col justify-center text-center text-[12px] font-normal">
            <h1>TOTAL REPAYMENT</h1>K{Math.ceil(totalRepayment)}
          </div>
          {/*  */}
          <div className="font-poppins ss:text-[22px] text-dark flex flex-1 flex-col justify-center text-center text-[12px] font-normal">
            <h1>FOR {loanPeriod} MONTHS YOU CAN BORROW A MAXIMUM OF</h1>K
            {Math.abs(Math.floor(maxBorrow))}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              className={`font-poppins rounded-full bg-primary-500 py-4 px-8 text-[16px] text-white`}
              onClick={calculate}
            >
              Calculate
            </button>
            <div className="py-5">
              {eligible ? (
                <div className="flex flex-col items-center justify-center">
                  <p>
                    You're <strong className="text-green-600"> Eligible</strong>{" "}
                    for the loan click the button below to apply
                  </p>
                  <a
                    href="https://sample.lendbox.io/"
                    className={`font-poppins mt-5 rounded-full bg-secondary-500 py-4 px-8 text-[16px] text-white`}
                  >
                    Apply here
                  </a>
                </div>
              ) : (
                <div>
                  You're <strong className=" text-red-600">NOT</strong> eligible
                  for the loan, reduce your request and calculate to check your
                  eligibility{" "}
                </div>
              )}{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
