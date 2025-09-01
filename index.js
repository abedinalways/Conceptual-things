//!prototype>> Prototype হলো একটি object, যেটা অন্য object-এর সাথে লিঙ্ক হয়ে থাকে এবং তাকে property ও method “inherit” করতে দেয়।

const person = {
  greet() {
    console.log(`hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const student = Object.create(person);
student.name = 'Rafiq';
student.age = 26;
student.name="Shahin"
student.greet();


//OOP>> OOP হলো এমন programming paradigm যেখানে ডাটা ও তার behavior (method) কে একসাথে Object আকারে রাখা হয়।
// ১. Encapsulation (এনক্যাপসুলেশন)
// সংজ্ঞা: ডেটা এবং মেথডকে একসাথে রেখে বাইরে থেকে সরাসরি অ্যাক্সেস থেকে সুরক্ষিত রাখা।
// বাস্তব উদাহরণ: একটি এটিএম মেশিন
// আপনি কার্ড ঢুকিয়ে পিন দিয়ে টাকা তুলতে পারেন
// কিন্তু মেশিনের ভেতরের জটিল সার্কিট, টাকা গণনার পদ্ধতি দেখতে পান না
// আপনি শুধু নির্দিষ্ট বাটন (interface) ব্যবহার করতে পারেন

class BankAccount {
  #balance = 0;
  #accountNumber;
  constructor(accountNumber) {
    this.#accountNumber = accountNumber;
    console.log(`account number is ${accountNumber}`)
  }
  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${amount} tk is deposite to the account`)
    }
    else {
      console.log('something wrong')
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} tk is withdraw from the account`)
    } else {
      console.log('insufficient balance')
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount('123456789');
myAccount.deposite(1000);
myAccount.withdraw(500);
console.log(`Current balance is ${myAccount.getBalance()} tk`);