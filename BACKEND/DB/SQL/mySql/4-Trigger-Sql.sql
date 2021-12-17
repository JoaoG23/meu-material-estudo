
/* ===== CRIANDO TRIGGERS ========= TUTORIAL ----*/
DELIMITER $
## 1 - Crie o Nome da trigger = create trigger
CREATE TRIGGER tr_baixa_estoque
## 2- Sequencia do procedimento = ou seja depois de inserir o ITEM há o disparo da trigger 

AFTER INSERT ON pedido_item
FOR EACH ROW

BEGIN
## 3 - Ira pegar tabela produto
	UPDATE produto 
    
## 4 - Redução da quantidade = 'estoque_atual' da tabela 'produto' menos a 'quantidade' da tabela 'item_pedido'
	SET produto.estoque_atual = produto.estoque_atual - new.quantidade
    
## 5 - Onde o codigo da 'tabela produto' for igual ao 'codigo' do produto da tabela item_pedido 'codigo_produto';
	WHERE produto.codigo = new.codigo_produto;
END
$

##DROP trigger tr_baixa_estoque;


DELIMITER $$
USE `empresa`$$
CREATE DEFINER = CURRENT_USER TRIGGER `empresa`.`pedido_item_AFTER_DELETE` 
AFTER DELETE ON `pedido_item` 
FOR EACH ROW
BEGIN

	update produto 
	set produto.estoque_atual = produto.estoque_atual + old.quantidade
	where produto.codigo = old.codigo_produto;

END$$

DELIMITER ;





## ----- Codigo que Trigger execulta dentro dela -------
/*update produto 
set produto.estoque_atual = produto.estoque_atual - 3;
where produto.codigo = 1 */


select codigo, descricao , estoque_atual from produto;
select * from pedido_item;


## ------Insira em uma tabela de pedido_item para execultar a TRIGGER NO CODIGO------
insert into pedido_item (nro_pedido, codigo_produto, quantidade, total, cancelado) value (1,2,10,10,'N');