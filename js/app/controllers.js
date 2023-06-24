angular.module("meuModulo")
.controller("indexController", function($scope){
  $scope.titulo = "Home"

  $scope.alunos = [
    {nome: "Victor", email: "victorsm9@hotmail.com", nota1:65, nota2:80, nota3:55},
    {nome: "Pedro", email: "petro@hotmail.com", nota1:70, nota2:90, nota3:45},
    {nome: "Murilo", email: "murilo@hotmail.com", nota1:60, nota2:80, nota3:40},
    {nome: "Joao", email: "joao@hotmail.com", nota1:50, nota2:75, nota3:70}
  ]

  var init = function(){
    $scope.alunos.forEach(aluno => {
      aluno.media = media(aluno)
    });
    limpaForm()
  }

  var media = function(aluno) {
    return ((parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3)) / 3).toFixed(2)
  }

  $scope.abreAddAluno = function(){
    $scope.editando = false
    limpaForm()
    $('#modal1').modal('open')
  }

  $scope.addAluno = function(aluno){
    aluno.media = media(aluno)
    $scope.alunos.push(aluno)
    $('#modal1').modal('close')
    limpaForm()
  }

  $scope.editando = false
  var alunoEditar;
  $scope.editarAluno = function(aluno){
    $scope.editando = true
    angular.copy(aluno, $scope.aluno)
    $('#modal1').modal('open')
    alunoEditar = aluno
  }

  $scope.salvarAluno = function(aluno){
    alunoEditar.nome = aluno.nome
    alunoEditar.email = aluno.email
    alunoEditar.nota1 = aluno.nota1
    alunoEditar.nota2 = aluno.nota2
    alunoEditar.nota3 = aluno.nota3
    alunoEditar.media = media(aluno)
    $('#modal1').modal('close')
  }

  $scope.deletarAluno = function(aluno){
    for(var index in $scope.alunos){
      var aux = $scope.alunos[index]
      if (aluno === aux)
        $scope.alunos.splice(index, 1)
    }
  }

  var limpaForm = function(){
    $scope.aluno = {nome: "", email: "", nota1:"", nota2:"", nota3:"", media: ""}
  }

  $('#modal1').modal();
  init()
})


.controller("contatoController", function($scope){
  $scope.titulo = "Contato"
})