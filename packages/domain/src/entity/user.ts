export interface IUser {
    id: number
    username: string
    email: string
    password: string
}
export interface IUserEntity extends Partial<IUser> {}

export interface IProduct {
    id: number
    code: number
    product_name : string
    cost: number
    created_at: string
    is_publish: string
}
export interface IProductEntity extends Partial<IProduct> { }
