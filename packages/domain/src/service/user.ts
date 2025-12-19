import type {UserCreateDto, UserDto,ProductDto,ProductCreateDto, ProductUpdateDto} from "../dto/user.dto.js";

export interface IUserService {

    findAllUser() : Promise<UserDto[]>
    create(userDto : UserCreateDto) : Promise<UserDto>
}

export interface IProductService {

    findAllProduct() : Promise<ProductDto[]>
    findProduct(id: number) : Promise<ProductDto[]>
    create(dto: ProductCreateDto) : Promise<ProductDto>
    update(id: number, dto:ProductUpdateDto): Promise<ProductDto>
    delete(id: number): Promise<void>
}