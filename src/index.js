// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency <= 0) return {};
  if (currency > 10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  const calc = (amount, number) => {
    return Math.floor(amount / number);
  };
  const halfDollars = calc(currency, 50);
  let subTotal = currency - halfDollars * 50;
  const quarters = calc(subTotal, 25);
  subTotal -= quarters * 25;
  const dimes = calc(subTotal, 10);
  subTotal -= dimes * 10;
  const nickels = calc(subTotal, 5);
  subTotal -= nickels * 5;
  const pennies = subTotal;
  let result = {};
  if (halfDollars > 0) result.H = halfDollars;
  if (quarters > 0) result.Q = quarters;
  if (dimes > 0) result.D = dimes;
  if (nickels > 0) result.N = nickels;
  if (pennies > 0) result.P = pennies;
  return result;
};
