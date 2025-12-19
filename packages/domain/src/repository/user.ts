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

export interface    IProductRepository {

    // Read
    findAll(): Promise<IProductEntity[]>
    findById(id: number): Promise<IProductEntity>
    findByCode(code: string): Promise<IProductEntity>

    // Create
    create(product: Partial<IProduct>): Promise<IProductEntity>

    // Update
    update(id: number, product: Partial<IProduct>): Promise<IProductEntity>

    // Delete
    delete(id: number): Promise<boolean>
    
    isUsed(id:number): Promise<boolean>

}