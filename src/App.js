import React, { useState, useEffect } from 'react';
import css from './components/app.module.css';
import Inputs from './components/Inputs';
import CalculateInstallments from './components/AuxiliaryCalculations';

export default function App() {
  const [amount, setAmount] = useState(1000);
  const [monthlyRate, setMonthlyRate] = useState(0);
  const [period, setPeriod] = useState(2);  
  const [installmentsArray, setInstallmentsArray] = useState([]);
  

  function onChangeAmount (newAmount) {
    // console.log(newAmount);
    setAmount(newAmount);
  };
  
  function onChangeRate(newRate){
    // console.log(newRate);
    setMonthlyRate(newRate);
  };
  
  function onChangePeriod(newPeriod){
    // console.log(newPeriod);
    setPeriod(newPeriod);
  };
  
  
  
  useEffect(() => {
    
    setInstallmentsArray(CalculateInstallments(amount, period, monthlyRate));
    console.log(installmentsArray);
    
    
    return () => {
      clearInterval({amount, monthlyRate, period});
    }
    
  }, [amount, monthlyRate, period]);
  
  

  return (
    
    <div>

    <div>
      <h2 className={css.head}>React - Juros Compostos</h2>
      <Inputs value={amount} changeButtonDisplay={onChangeAmount}/>
      
      <Inputs value={monthlyRate} changeButtonDisplay={onChangeRate}/>
      
      <Inputs value={period} changeButtonDisplay={onChangePeriod}/>
    </div>

    <div>
      {installmentsArray.map(installment => {
        return(
          <div className={`${css.box} ${css.flexRow}`}>
            <div key={installment.month}>
              <ul>
                Mês: {installment.month}
              </ul>
              <ul>
                Valor: {installment.amount}
              </ul>
              <ul>
                Acréscimo: {installment.totalAddingOrDiscount}
              </ul>
              <ul>
                Taxa: {installment.monthlyRate}% a.m.
              </ul>
              <ul>
                Taxa Composta: {installment.compoundRate} %
              </ul>
            </div>
          </div>
        );
      })}
      </div>
    
      </div>
      
  );

}
