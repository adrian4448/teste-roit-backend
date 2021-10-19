import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export default class Endereco {
    
    @Prop()
    cep: String;
    
    @Prop()
    logradouro: String;
    
    @Prop()
    numero: Number;
    
    @Prop()
    localidade: String;
    
    @Prop()
    uf: String;
    
    @Prop()
    ibge: Number;
}