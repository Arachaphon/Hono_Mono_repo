import type {IProduct, IUser, IUserEntity, IProductEntity, } from "../entity/user.js"


export interface IUserRepository {

    // Read
    findAll(): Promise<IUserEntity[]>
    findById(id: number): Promise<IUserEntity>

    // Create
    create(user: IUser): Promise<IUserEntity>

    // Update
    update(id: number, user: Partial<IUserEntity>): Promise<IUserEntity>

    // Delete
    delete(id: number): Promise<boolean>

}

export interface productRepository {

    // Read
    findAll(): Promise<IProductEntity[]>
    findById(id: number): Promise<IProductEntity>

    // Create
    create(product: IProduct): Promise<IProductEntity>

    // Update
    update(id: number, product: Partial<IProductEntity>): Promise<IProductEntity>

    // Delete
    delete(id: number): Promise<boolean>

}