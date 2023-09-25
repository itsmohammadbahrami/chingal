export interface User {
   id: number;
   createdAt: string;
   name: string;
   avatar: string;
   dateOfBirth: string;
   country: string;
   city: string;
   street: string;
   zipcode: string;
   company: string;
   email: string;
   phoneNumber: string;
}

export interface UserDataState {
   loading?: boolean;
   users?: User[];
}

export interface UserDataAction extends UserDataState {
   type: string;
}
