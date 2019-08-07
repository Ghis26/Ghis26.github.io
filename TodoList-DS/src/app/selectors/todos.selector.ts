import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ElementsState } from '../interfaces/element-state.interface';
import { getTodos } from '../reducer/todo.reducer';

export const getElementsState = createFeatureSelector<ElementsState>('elements');

export const getTodosState = createSelector(getElementsState, (state: ElementsState) => state.todos);

export const getAllTodos = createSelector(getTodosState, getTodos);
