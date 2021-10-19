import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Repositórios Github')
@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Cadastra um novo repositório'})
  @ApiForbiddenResponse({ description: 'Dados de envio incorretos, favor verificar'})
  create(@Body() createRepositoryDto: CreateRepositoryDto) {
    return this.repositoriesService.create(createRepositoryDto);
  }
  @ApiOkResponse({ description: 'Lista todos os repositórios cadastrados no sistema'})
  @Get()
  findAll() {
    return this.repositoriesService.findAll();
  }

  @ApiOkResponse({ description: 'Lista o repositório cadastrado no sistema de acordo com o ID enviado' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repositoriesService.findById(id).catch(() => { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN) });
  }

  @ApiOkResponse({ description: 'Atualiza o repositório cadastrado no sistema de acordo com o ID enviado' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepositoryDto: CreateRepositoryDto) {
    return this.repositoriesService.update(id, updateRepositoryDto).catch(() => { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN) });;
  }

  @ApiOkResponse({ description: 'Deleta o repositório cadastrado no sistema de acordo com o ID enviado' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repositoriesService.remove(id).catch(() => { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN) });;
  }
}
