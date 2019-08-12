import { Action } from '@ngrx/store';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATA_TODO';


export class GetTodosAction implements Action {
    readonly type = GET_TODOS;
}

export class GetTodosSuccessAction implements Action {
    readonly type = GET_TODOS_SUCCESS;
    constructor(public payload: any) {}
}

export class GetTodosErrorAction implements Action {
    readonly type = GET_TODOS_ERROR;
    constructor(public payload: any)  {}
}

export class CreateTodoAction implements Action {
    readonly type = CREATE_TODO;
    constructor(public payload: any) {}
}

export class UpdateTodoAction implements Action {
    readonly type = UPDATE_TODO;
    constructor(public payload: any) {}
}
