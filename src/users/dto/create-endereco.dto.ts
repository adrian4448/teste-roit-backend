import { ApiProperty } from "@nestjs/swagger";

export class CreateEnderecoDto {
    @ApiProperty({
        type: String,
        description: 'Cep do endereço do usuário'
    })
    cep: String;
    
    @ApiProperty({
        type: String,
        description: 'Logradouro do endereço do usuário'
    })
    logradouro: String;
    
    @ApiProperty({
        type: String,
        description: 'Número do endereço do usuário'
    })
    numero: Number;
    
    @ApiProperty({
        type: String,
        description: 'Cidade do endereço do usuário'
    })
    localidade: String;
    
    @ApiProperty({
        type: String,
        description: 'Estado do endereço do usuário'
    })
    uf: String;
    
    @ApiProperty({
        type: String,
        description: 'Número do IBGE do endereço do usuário'
    })
    ibge: Number;
}