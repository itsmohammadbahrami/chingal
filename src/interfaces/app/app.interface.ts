export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface AppDataState {
   darkMode?: boolean;
   searchText?: string;
   sortOrder?: any;
}

export interface AppAction extends AppDataState {
   type: string;
}
