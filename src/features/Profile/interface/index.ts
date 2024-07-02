export interface IUser {
    name:string,
    job:string
}
export interface IModal {
    open: boolean;
    setOpen: React.ReactNode | any;
}