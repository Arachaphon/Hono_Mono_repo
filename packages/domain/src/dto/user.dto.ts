import type {IUserEntity, IProductEntity} from "../entity/user.js"
import {createResponseSchema} from "../utils/index.js";
import {z} from "zod";


export interface UserDto extends Omit<IUserEntity, "password"> { }
export interface UserCreateDto extends Omit<IUserEntity, "id"> { }
export interface UserUpdateDto extends IUserEntity { }


export const UserSchema = z.object({
    id : z.number().optional(),
    email : z.string().optional(),
    username : z.string().optional(),
} as Record<keyof  IUserEntity,any>)

export const UserResponseSchema = createResponseSchema(UserSchema)
export const UserListResponseSchema = createResponseSchema(z.array(UserSchema))

export interface productDto extends Omit<IProductEntity,"code"> {}
export interface productCreateDto extends Omit<IProductEntity, "id"> { }
export interface productUpdateDto extends IProductEntity { }

export const ProductSchema = z.object({
    id: z.number().optional(),
    product_name: z.string().optional(),
    cost: z.number().optional(),
    created_at: z.string().optional(),
    is_publish: z.string().optional(),
} as Record<keyof IProductEntity, any>)

export const productResponseSchema = createResponseSchema(ProductSchema)
export const productListResponseSchema = createResponseSchema(z.array(ProductSchema))