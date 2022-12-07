//IF YOU SA AND, YOU NEED TO REFACTOR THE CODE 
//initial code

class Invoice {
    constructor(customer, total) {
        this.customer = customer;
        this.total = total;
    }

    getDetails() { 
        return `
        Customer: ${this.customer}
        Total: ${this.total}
        `;
    }

    // salesTax() {
    //     let rate;
    //     switch (this.sate) {
    //         case "CA":
    //             rate = 0.0825;
    //             break;
    //         case "TX":
    //             rate = 0.0819;
    //             break;
    //         case "CO":
    //             rate = 0.075;
    //             break;
    //         default:
    //             rate = 0.0675;
    //             break;
    //     }
    //     return rate;
    // }

    // emailInvoice() {
    //     console.log(`
    //     Hellow, ${this.getDetails()}
    //     Have a great day!
    //     `);
    // }
}



//above refactored

class Mailer {
    static emailInvoice(content) {
        console.log(`
        Hellow, ${content}
        Have a great day!
        `);
    }
}

class Tax {
    constructor(state) {
        this.state = state;
    }

    salesTax() {
        let rate;
        switch (this.stsate) {
            case "CA":
                rate = 0.0825;
                break;
            case "TX":
                rate = 0.0819;
                break;
            case "CO":
                rate = 0.075;
                break;
            default:
                rate = 0.0675;
                break;
        }
        return rate;
    }
}
const customerInvoice = new Invoice('Robert', 400);
const tax = new Tax('TX')
const taxRate = tax.salesTax()
console.log('tax rate', taxRate);
Mailer.emailInvoice(customerInvoice.getDetails());


let point = [1,3], segment = [point,[5,5]], triangle = [...segment,[1,8]];