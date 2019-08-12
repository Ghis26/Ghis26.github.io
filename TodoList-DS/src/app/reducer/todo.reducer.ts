import { TodosState } from '../interfaces/todo-state.interface';
import { GetTodosAction, GetTodosSuccessAction, GetTodosErrorAction,
     GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR, CreateTodoAction,
     CREATE_TODO, UPDATE_TODO, UpdateTodoAction } from '../actions/todos.action';
import { ActionReducerMap } from '@ngrx/store';
import { ElementsState } from '../interfaces/element-state.interface';

export const initialState: TodosState = {
    data: [],
    loading: false,
    error: ''
};

export const reducers: ActionReducerMap<ElementsState> = {
    todos: reducer
};

export const getTodos =  (state: TodosState) => state.data;

export function reducer(
    state = initialState,
    action: GetTodosAction | GetTodosErrorAction | GetTodosSuccessAction | CreateTodoAction | UpdateTodoAction ): TodosState {
    switch (action.type) {
        case GET_TODOS: {
            return {
                ...state,
                loading: true
            };
        }
        case GET_TODOS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        }
        case CREATE_TODO: {
            return {
                ...state,
                data : action.payload
            };
        }
        case UPDATE_TODO: {
            return {
                ...state,
                data: action.payload
            };
        }
    }
    return state;
    }
