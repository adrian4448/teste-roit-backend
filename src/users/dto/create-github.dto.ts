import { ApiProperty } from "@nestjs/swagger";

export class CreateGithubDto {
    @ApiProperty({
        type: String,
        description: 'ID Interno da conta do GitHub'
    })
    githubId: Number;
    
    @ApiProperty({
        type: String,
        description: 'Login da conta do GitHub'
    })
    login: String;
    
    @ApiProperty({
        type: String,
        description: 'URL para acessar perfil da conta do GitHub'
    })
    profileUrl: String;
    
    @ApiProperty({
        type: String,
        description: 'URL para baixar a imagem do avatar do perfil do GitHub'
    })
    avatarUrl: String;
    
    @ApiProperty({
        type: String,
        description: 'ID dos repositorios do Github'
    })
    repositoriesId: Array<String>;
}
