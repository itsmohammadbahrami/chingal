export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface AppDataState {
   darkMode?: boolean;
   searchText?: string;
}

export interface AppAction extends AppDataState {
   type: string;
}
