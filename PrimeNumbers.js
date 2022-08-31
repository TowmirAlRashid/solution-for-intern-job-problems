//task 4: Get All Prime Numbers Between 1 ~ 1000
const primeNumbers = [];

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

for (let i = 1; i <= 1000; i++) {
  if (i === 1) {
    continue;
  }

  if (isPrime(i)) {
    primeNumbers.push(i.toString());
  }
}

console.log(primeNumbers);
