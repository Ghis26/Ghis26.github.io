import { Action } from '@ngrx/store';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';


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
