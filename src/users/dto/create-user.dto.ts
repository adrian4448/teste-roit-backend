import { ApiProperty } from "@nestjs/swagger";
import { CreateEnderecoDto } from "src/users/dto/create-endereco.dto";
import { CreateGithubDto } from "./create-github.dto";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'Nome do usuário'
    })
    nome: String;

    @ApiProperty({
        type: Number,
        description: 'Idade do usuário'
    })
    idade: number;

    @ApiProperty({
        type: CreateEnderecoDto,
        description: 'Endereço do usuário'
    })
    endereco: CreateEnderecoDto;

    @ApiProperty({
        type: CreateGithubDto,
        description: 'Informações relacionadas ao Github do usuario'
    })
    githubInfo: CreateGithubDto;
}
