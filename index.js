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


//Linked List::
// Linked List হলো একটি data structure যেখানে ডেটাগুলো (elements) ধারাবাহিকভাবে থাকে, কিন্তু array-এর মতো এক জায়গায় জমা থাকে না।
//প্রতিটি element (যাকে Node বলে) দুইটি অংশে গঠিত হয় –
// Data/Value – যেখানে আসল মান (যেমন সংখ্যা বা string) থাকে।
// Next (pointer/reference) – যেখানে পরের Node-এর address/reference থাকে।
// অর্থাৎ, প্রতিটি Node জানে তার পরের Node কোথায় আছে।

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
  }
  append(value){
    const newNode =new Node(value);
    if(!this.head){
      this.head=newNode;
      return;
    }
    let current=this.head;
    while(current.next){
      this.head=current.next;
    }
    current.next=newNode;
  }
}
