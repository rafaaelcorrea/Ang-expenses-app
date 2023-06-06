 export class Expense {
    constructor(public id: number = 0, public expenseType: string = '', public value: number = 0 , 
    public comments:string = '' , public registeredHour: Date , public expenseDate: Date) {
        
    }
}