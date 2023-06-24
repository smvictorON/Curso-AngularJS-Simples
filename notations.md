*** Diretivas ***
são tags que podem ser inseridas no html para se comunicar com o controller angular
`ex: ng-bind, ng-controller ...`
two way data bind é quando voce define um model para um input e voce pode modificar
ele tanto no js quanto no html

`ng-app`: Essa diretiva define o ponto de entrada da aplicação AngularJS em uma página HTML.
É usada para inicializar um módulo AngularJS.

`ng-controller`: Essa diretiva define o controlador associado a um elemento HTML.
Ela cria um novo escopo onde as propriedades e métodos definidos no controlador podem ser
acessados e usados no template associado.

`ng-model`: Essa diretiva permite vincular elementos de formulário, como inputs e selects,
a propriedades no escopo. Ela estabelece uma ligação bidirecional, o que significa que as
alterações no valor do input são refletidas na propriedade do escopo e vice-versa.

`ng-bind`: Essa diretiva permite exibir o valor de uma expressão do escopo no template HTML.
É semelhante à interpolação {{ }}, mas oferece maior controle sobre a exibição dos dados,
especialmente quando se trata de lidar com valores nulos ou indefinidos.

`ng-repeat`: Essa diretiva permite iterar sobre uma coleção no escopo e criar elementos HTML
repetidos com base em um modelo. Ela é usada para gerar listas dinamicamente, exibindo os itens
da coleção no template.

`ng-if`: Essa diretiva condicionalmente adiciona ou remove elementos HTML com base em uma expressão.
Se a expressão for verdadeira, o elemento é exibido; caso contrário, ele é removido do DOM.

`ng-show` / `ng-hide`: Essas diretivas condicionalmente mostram ou escondem elementos HTML
com base em uma expressão. Se a expressão for verdadeira, o elemento é exibido; caso contrário,
ele é oculto do DOM.

`ng-click`: Essa diretiva permite associar uma expressão ou função a um evento de clique em um
elemento HTML. Quando o elemento é clicado, a expressão é avaliada ou a função é chamada.

`ng-submit`: Essa diretiva permite associar uma expressão ou função a um evento de envio de
formulário. Quando o formulário é enviado, a expressão é avaliada ou a função é chamada.

`ng-src`: Essa diretiva é usada para vincular a URL de uma imagem a um atributo src em um elemento img.
Ela permite carregar dinamicamente imagens com base em valores no escopo.



## Tips ##

- Com angular temos duas formas de mostrar um variavel do scope na tela
diretamente com {{}} `<h2>{{titulo}}</h2>` e tambem com ng-bind
`<h2 ng-bind="titulo"></h2>`a vantagem de usar com ng-bind é que ao fazer
o render da tela ele leva alguns milisegundo para preencher o {{}}
fazendo com que apareca em tela as chaves.

- É aconselhavel usar os script como por exemplo o que carrega o angular
na tela sempre no body e não do header evitando que a aplicação fique
pesada para carregar.

- Com angular podemos declarar funções de duas formas,
`var nomefunc = function(){}` ou `$scope.nomefunc = function(){}`
da primeira forma ela só fica acessivel dentro do controller ja da
segunda forma ela pode ser acessada dentro do html.

- Não é recomendado usar métodos dentro de laços de repetição, uma das razões
é que se tiver um campo de busca na lista do laço, ele vai executar o método
todas as vezes que o campo de busca mudar