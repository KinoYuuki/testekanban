# testekanban

DB: Usei MySQL como banco de dados e fiz a conexão e as queries utilizando o SEQUELIZE.

Login: Fiz uma rota para login, onde ele passa por uma autenticação conforme o arquivo .env. Após isso ele gera um token pra ser utilizado nas outras rotas de Cards. As informações estão num .env de exemplo (credenciais para os métodos e acesso ao banco de dados) sem as credenciais inclusas.

Cards: Fiz a criação de routes num arquivo separado, onde como params recebe um auth pra autenticação de token (middleware), um controller (ação a se fazer sobre as cards), e por fim, no PUT e DELETE eu coloquei um param a mais que foi solicitado pra printar no console.log qual foi a alteração realizada no database.

Não consegui mexer com o Dockers pois não tenho conhecimento e estava sem tempo pra dar uma olhada sobre, tive que investir o tempo que eu tinha para estudar SEQUELIZE e Express. Essa foi a minha primeira experiência com Javascrip e NodeJS, até então eu só sabia a parte teórica, espero que o código tenha ficado legível, compreensível e tenha coesão nas nomenclaturas, funções e separação de arquivos.

Obrigado pela oportunidade!
