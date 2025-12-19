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

export interface ProductDto extends IProductEntity {}
export interface ProductCreateDto extends Omit<IProductEntity, "id"> { }
export interface ProductUpdateDto extends IProductEntity { }

export const ProductSchema = z.object({
    id: z.number(),
    code: z.string(),
    product_name: z.string(),
    cost: z.number().min(1),
    created_at: z.date(),
    update_at: z.date(),
    is_publish: z.boolean().default(true),
} as Record<keyof IProductEntity, any>)

export const productResponseSchema = createResponseSchema(ProductSchema)
export const productListResponseSchema = createResponseSchema(z.array(ProductSchema))