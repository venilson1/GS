import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  nossahistoria: string = `Tudo se iniciou no coração de Deus, talvez seja clichê falar isso, mais é a pura
  realidade. No meio de um mundo  cheio de desafios, foi implantado no coração do principal líder Lucas, por
  criar um grupo de teatro, a principio denominado Bom Samaritano, e foi escolhido por uma peça que o mesmo
  fez. O grupo teve início em 2019, começando apenas como um simples grupo, mais os propósitos de Deus foram
  maiores do que poderiamos imaginar. As coisas foram acontecendo e no meio do ano passado Deus nos presenteou
  com uma equipe gestora que hoje se totaliza em cinco pessoas, e com a chegada dos mesmo, novas idéias,
  projetos e tecnologia chegaram ao grupo. E assim surgiu um novo nome Geração Samuel. Desde o início a
  meta do grupo era alcançar almas e conquista las para o Senhor, tirando de nós qualquer mérito e entregando
  a ele toda a honra. E aqui estamos até hoje, focados em levar a palavra  do Senhor através de peças,
  e propagando o amor.`;


  facaparte: string = `Nosso ensaios estão momentaneamente  congelados devida a pandemia.
  Mais para fazer parte de nosso grupo, você precisa estar congregando em nosso ministério,
  para que assim possa estar por dentro de tudo que o mesmo envolve.`

  doacoes: string = `Como citado em nossa história, esse foi um dos novos projetos que agregamos ao nosso grupo.
  Recolheremos alimentos  não perecíveis, e produtos de higiene para ajudar com a nossa comunidade,
  nosso sistema é totalmente sigiloso, onde seus dados não seram divulgados e para participar tanto como
  doador  ou recebedor, terá que efetuar um cadastro, após o mesmo é apenas aguardar o contato da nossa
  equipe para maiores informações.`;

  believer: string = `O projeto visa ajudar  a nossa comunidade e bairro, levando a eles alimentos e produtos de higiene.
  Todos os alimentos e produtos recebidos serão catalogados em nosso site, assim ficando a disposição para os doadores saberem o destino dos mesmos.
  Fique tranqüilo seus dados não serão divulgados e mantermos sigilo tanto dos doadores, quanto para os recebedores.
  Nosso projeto contará com um evento anual, porém sem data pré estabelecida, por conta da pandemia, mais fique atendo e acesse sempre que possível a nossa plataforma para que assim você fique por dentro de tudo e saiba em primeira mão sobre o evento que impactará a sua vida.
  Para participar é muito fácil é preciso apenas se cadastrar, a baixo terá mais informações sobre o mesmo.`;

  Subtitle : string = `Sejam Bem vindos Ao Grupo de Teatro`;
  Title : string = `Geração Samuel`;

  constructor() { }

  ngOnInit(): void {
  }

}
