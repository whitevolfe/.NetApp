export interface Todo {
deletedDate: string|number|Date;
    id: string,
    description: string,
    createdDate: Date,
    isCompleted: boolean,
    completedDate: Date,
    isDeleted:boolean,
}