import { Todo } from '../interfaces/todo.interface';

export interface TodosState {
    data: Todo[];
    loading: boolean;
    error: string;
}
