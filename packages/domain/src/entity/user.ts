export interface IUser {
    id: number
    username: string
    email: string
    password: string
}
export interface IUserEntity extends Partial<IUser> {}

export interface IProduct {
    id: number
    code: string
    product_name : string
    cost: number
    created_at: string
    update_at : string
    is_publish: boolean
}
export interface IProductEntity extends Partial<IProduct> { }
