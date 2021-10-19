import { ApiProperty } from "@nestjs/swagger";

export class CreateRepositoryDto {
    @ApiProperty({
        type: Number,
        description: 'ID Interno da conta do GitHub'
    })
    githubId: Number;

    @ApiProperty({
        type: String,
        description: 'Nome do repositório cadastrado no Github'
    })
    nome: String;

    @ApiProperty({
        type: String,
        description: 'Descrição do repositório cadastrado no Github'
    })
    descricao: String;

    @ApiProperty({
        type: String,
        description: 'URL para acessar o repositório cadastrado no Github'
    })
    repoUrl: String;

    @ApiProperty({
        type: String,
        description: 'Nome do usuário criador do repositório no Github'
    })
    donoUser: String; 
}
