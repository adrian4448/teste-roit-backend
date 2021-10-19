import { Controller, Get, Post, Body, Param, Delete, Patch, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Cadastra um novo usuário no sistema'})
  @ApiForbiddenResponse({ description: 'Dados de envio incorretos, favor verificar'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de todos os usuários cadastrados no sistema'})
  @ApiForbiddenResponse({ description: 'Não possui nenhum usuário cadastrado no sistema'})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Lista o usuário solicitado de acordo com o ID passado'})
  @ApiForbiddenResponse({ description: 'Não possui nenhum usuario cadastrado no sistema com este ID'})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id).catch(() => { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN) });
  }

  @Get('/github/:githubUsername')
  @ApiOkResponse({ description: 'Retorna o usuário de acordo com o usuario do github enviado'})
  @ApiForbiddenResponse({ description: 'Não possui nenhum usuario com este usuario do github cadastrado' })
  findByGithubUser(@Param('githubUsername') githubUsername: string) {
    return this.usersService.findGithubUser(githubUsername).catch(() => { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN) });
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Altera o usuário cadastrado no sistema conforme ID passado'})
  @ApiForbiddenResponse({ description: 'Não possui nenhum usuario cadastrado no sistema com este ID'})
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(id, updateUserDto).catch(() => { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN) });
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Exclui o usuario de acordo com o ID passado como parametro'})
  remove(@Param('id') id: string) {
    return this.usersService.remove(id).catch(() => { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN) });
  }
}
