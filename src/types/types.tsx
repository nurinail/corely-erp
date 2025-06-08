export interface InventoryType{
    id:number;
    product:string;//
    category:string;//
    count:number;//
    prices:number;//
    total:number;
    date:string;//
    cashflow:string;//
    desc:string;
    note:string;
}
export interface InventoryInitialState{
    inventory:InventoryType[];
}
export interface HistoryType{
    id:number;
    desc:string; 
    date:string;
    name:string;
    method:string;
    total:number;
    transaction:string;
}
export interface HistoryInitialState{
    history:HistoryType[];
}

export interface WorkersType{
    id:number;
    desc:string;
    date:string;// 
    name:string;//
    email:string;//
    number:number;//
    position:string;//
    department:string;//
    place:string;//
    salary:number;//
}
export interface WorkerInitialState{
    workers:WorkersType[];
}

export interface OrderType{
    id:number;
    customer:string;//
    product:string;//
    cashflow:string;//
    desc:string;
    date:string;//
    total:number;
    count:number;//
    prices:number;//
    note:string;//
}
export interface OrderInitialState{
    orders:OrderType[];
    customers:CustomerType[];
}
export interface CustomerType{
    id:number;
    name:string;
    contract:string;
    document:string;
    date:string;
}
export interface FinanceInitialState{
    cashAmount:number;
    bankAmount:number;
    debitorAmount:number;
    liabilityAmount:number;
    income:number;
    expenses:number;
}
export interface PaymentMetodType{
    amount:number;
    method:string;
}

export interface LoginType{
    username:string;
    password:string;
}
export interface LoginSignUpInitialState{
    users:LoginType[];
}

export interface DepositeType{
    amount:number,
    method:string,
}

export interface OtherInitialState{
    loading:boolean;
    isAdmin:boolean;
}