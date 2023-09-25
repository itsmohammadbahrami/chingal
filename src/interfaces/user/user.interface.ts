export interface User {}

export interface UserDataState {
   loading?: boolean;
   users?: User[];
}

export interface UserDataAction extends UserDataState {
   type: string;
}
