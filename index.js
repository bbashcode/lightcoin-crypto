class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance(){
  // Calculate the balance using the transaction objects.
    let status = 0;
    for(let transaction of this.transactions){
      status += transaction.value;
    }
    return status;
  }

  addTransaction(transaction){
    this.transactions.push(transaction);
  }


}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    if(!this.isAllowed) return false;

    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
    return true;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  isAllowed(){
    return (this.account.balance - this.amount >= 0);
  }

}

// DRIVER CODE (yes, keep everything in one file for now... b/c cog load)
const myAccount = new Account();

console.log('Starting Account Balance: ', myAccount.balance);

console.log('Attempting to withdraw even $1 should fail...');
const t1 = new Withdrawal(1.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Depositing should succeed...');
const t2 = new Deposit(9.99, myAccount);
console.log('Commit result:', t2.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Withdrawal for 9.99 should be allowed...');
const t3 = new Withdrawal(9.99, myAccount);
console.log('Commit result:', t3.commit());

console.log('Ending Account Balance: ', myAccount.balance);
console.log("Lookings like I'm broke again");

console.log('Account Transaction History: ', myAccount.transactions);
