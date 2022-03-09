let balance = 500.00;

class Transaction {
  constructor(amount, account){
    this.amount = amount;
    this.account = account;
  }
}

class Withdrawal extends Transaction{
  commit(){
    this.account.balance -= balance;
  }
}

class Deposit extends Transaction{
  commit(){
    this.account.balance += balance;
  }
}

class Account {
  constructor(username){
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

// ACCOUNT
const myAccount = new Account("snow-patrol");

// WITHDRAWL
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);


//DEPOSIT
t3 = new Deposit(120.00);
t3.commit();
console.log("Transaction 3: ", t3);
console.log('Balance:', balance);
