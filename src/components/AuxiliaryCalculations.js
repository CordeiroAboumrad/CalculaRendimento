
export default function CalculateInstallments(amount, period, monthlyRate){
    var installments = [];
    var month;
    var initialAmount = amount;
    var totalAddingOrDiscount;
    var compoundRate;
        
    for(let i=0; i<period; i++){
        month = i + 1;
        amount = (amount * Math.pow( (1 + (monthlyRate/100) ), (1))).toFixed(2);
        totalAddingOrDiscount = (amount - initialAmount).toFixed(2);
        compoundRate = ( totalAddingOrDiscount / initialAmount * 100 ).toFixed(2);
        
        installments.push({
            month,
            amount,
            monthlyRate,
            totalAddingOrDiscount,
            compoundRate
            });
    
    }
    
    console.log(installments);

    return installments;
    
    // return(
    //     console.log(`O montante é igual a ${amount}.`),
    //     console.log(`A taxa mensal é igual a ${monthlyRate}.`),
    //     console.log(`O período é igual a ${period}.`)
    // );

    }
