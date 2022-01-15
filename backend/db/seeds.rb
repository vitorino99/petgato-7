# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

############## USERS

userAdm = User.create!(
  name: 'O Poderoso Gatón',
  email: 'adm@gato.com',
  password: '12345678',
  is_admin: true,
)
userAdm.photo.attach(
  io: File.open('./public/images/user3.jpg'),
  filename: 'user3.jpg'
)

user1 = User.create!(
  name: 'Gatô Ninja',
  email: 'user1@gato.com',
  password: '12345678',
  is_admin: false,
)
user1.photo.attach(
  io: File.open('./public/images/user1.jpg'),
  filename: 'user1.jpg'
)

user2 = User.create!(
  name: 'Gatô de aço',
  email: 'user2@gato.com',
  password: '12345678',
  is_admin: false,
)
user2.photo.attach(
  io: File.open('./public/images/user2.jpg'),
  filename: 'user2.jpg'
)

############## TAGS

tag1 = Tag.create!(name: 'Cuidados', description: 'De saúde a estética, são textos que vão te ajudar a cuidar do seu bichinho')
tag2 = Tag.create!(name: 'Cães & Gatos', description: 'Nessas publicações estão chovendo cães e gatos: os pets mais fofinhos do nosso coração')
tag3 = Tag.create!(name: 'Guias', description: 'Um compilado de guias repletos de dicas, pros iniciantes e pros mais experientes')
tag4 = Tag.create!(name: 'Adestramento', description: 'Textos com diversas formas de melhorar o comportamento do seu pet')
tag5 = Tag.create!(name: 'Nutrição', description: 'Guias de como alimentar saudavelmente o seu pet')
tag6 = Tag.create!(name: 'Engraçado', description: 'Um compilado de histórias que envolvem os pets e seus donos')

############## POSTS (TAGPOST, LIKE)

post1 = Post.create!(
  name: 'Cachorro pode comer doce? Saiba se as sobremesas estão liberadas!',
  content: %q(O que seria da vida sem um pouco de doçura, não é mesmo? Uma boa dose de açúcar melhora até um dia difícil, mas será que as sobremesas estão liberadas para os pets? Cachorro pode comer doce? 
  Antes de oferecer um petisco para seu peludo, é importante ficar atento, já que alguns alimentos são prejudiciais para nossos amigos. Para descobrir se cachorro pode comer doce, continue lendo! Consultamos uma médica-veterinária, que tirou todas as dúvidas sobre o assunto!
  Sabemos que o excesso de açúcar pode trazer prejuízos para a saúde, mas, para os pets, o perigo é bem maior. É o que explica a Dra. Ana Paula Sanches Barcelos, médica-veterinária da Petz. A especialista afirma que, mesmo que você dê açúcar para cachorro em pequenas porções, isso poderá ser prejudicial à saúde do peludo. 
  Por isso, se você está se perguntando se cachorro pode comer doce, saiba que esse tipo de alimento está terminantemente proibido. Se quiser agradar seu filho de quatro patas, há diversas opções mais saudáveis e seguras. Continue lendo para saber mais. 
  Para entender porque o doce está entre os alimentos que cachorro não pode comer, precisamos lembrar que a nutrição dos peludos é bem diferente da nossa. Por esse motivo precisam de uma atenção a mais.
  Na natureza, basicamente, os cães se alimentam de carnes, vegetais e até frutas. Isso explica porque alguns pets se interessam tanto pelos doces — as frutas contêm frutose, um tipo de açúcar. 
  Porém, normalmente, os doces industrializados que comemos estão longe de serem alimentos seguros para os pets. A quantidade de açúcar presente nesses produtos é muito superior à que encontramos em frutas e legumes. 
  Assim, mesmo uma porção pequena de uma sobremesa pode trazer prejuízos para a saúde dos cães. Além disso, muitos ingredientes presentes em doces comuns são tóxicos para os peludos. Abaixo, destacamos o que cachorro não pode comer.),
  views: 4
)
post1.banner_image.attach(
  io: File.open('./public/images/cachorro-pode-comer-doce.jpg'),
  filename: 'cachorro-pode-comer-doce.jpg'
)

Tagpost.create!([
  { post_id: post1.id, tag_id: tag1.id }, 
  { post_id: post1.id, tag_id: tag3.id },
  { post_id: post1.id, tag_id: tag4.id }
])

Like.create!([
  {post_id: post1.id, user_id: userAdm.id},
  {post_id: post1.id, user_id: user2.id},
])

##############

post2 = Post.create!(
  name: 'O que é um cachorro comunitário? Entenda aqui!',
  content: %q(Você já estava passeando por uma rua quando encontrou um cachorro desfilando como se fosse dono do pedaço? Em um primeiro momento, você pode pensar que se trata de um pet abandonado, precisando de resgate, mas ele pode ser um cachorro comunitário!
  Apesar de esse não ser um termo muito conhecido, o conceito de cachorro comunitário existe há muito tempo: trata-se de um pet que é de todos os vizinhos, sem ter um tutor fixo. Saiba mais sobre esse tema e entenda os detalhes a seguir!
  Apesar de ser uma prática mais comum do que se imagina, poucas pessoas sabem que, de fato, o cão comunitário é previsto em lei em diversos estados. Entre eles, estão São Paulo, Rio de Janeiro e Rio Grande do Sul. 
  Apesar de serem legislações diferentes para cada local, elas preveem alguns princípios em comum, definindo o que é um cachorro comunitário: “aquele que estabelece laços de dependência e manutenção com a comunidade em que vive, embora não possua responsável único e definido,” segundo a lei nº 12.916/2008 do estado de São Paulo.
  No entanto, mesmo que o cachorro não tenha só um tutor, ainda existe a necessidade de nomear um cuidador principal. Segundo a lei do cão comunitário, essa pessoa pode registrar o bichinho e castrá-lo gratuitamente junto à prefeitura.
  Em alguns estados, todos os chamados “responsáveis-tratadores”, ou seja, todos os membros da comunidade que cuidam do pet, recebem uma credencial da prefeitura para identificação. Em outros casos, apenas o cuidador principal deve se registrar como tal.
  Além de levarem alegria à vizinhança, os cachorros comunitários podem exercer algumas funções. Segundo as recomendações do Centro de Controle de Zoonoses de São Paulo, o CCZ, eles podem proteger a comunidade contra cães desconhecidos e, por vezes, agressivos.
  Quanto ao treinamento e ao adestramento do pet, esse é um critério aberto à comunidade a qual ele pertence. No entanto, é altamente recomendado que o cão seja treinado para que nem ele, nem os moradores corram perigo.
  Caso o cachorro esteja mordendo pessoas e tenha vítima comprovada, ele pode ser denunciado como cão agressor e passar por avaliação. Só pode ser aberta uma solicitação desse tipo caso a vítima tenha um atestado que comprove a agressão, retirado no posto de saúde onde ela foi atendida.),
  views: 198
)
post2.banner_image.attach(
  io: File.open('./public/images/cachorro-comunitario.jpg'),
  filename: 'cachorro-comunitario.jpg'
)

Tagpost.create!([
  { post_id: post2.id, tag_id: tag1.id }, 
  { post_id: post2.id, tag_id: tag6.id }
])

Like.create!([
  {post_id: post2.id, user_id: userAdm.id},
  {post_id: post2.id, user_id: user1.id},
  {post_id: post2.id, user_id: user2.id},
])

##############

post3 = Post.create!(
  name: 'Saiba a importância da identificação na coleira dos pets',
  content: %q(O bichinho de estimação precisa de todo o cuidado, não é mesmo? E a coleira com identificação é um zelo importante que não pode ser esquecido. Vamos falar sobre a importância do objeto para que o pet seja identificado de forma mais rápida caso se perca por aí. 
  Neste artigo, você vai aprender quais são as informações que não devem faltar na coleira com placa de identificação do seu cão ou do seu gato e quando eles devem usá-la, além da possibilidade de adicionar um QR Code à peça. Confira!
  Além da coleira com nome do bichinho, o telefone do tutor é essencial. É interessante informar também o número de alguém conhecido, um familiar ou amigo, por exemplo. Assim, você garante mais uma opção de contato para a pessoa que achar o seu pet. 
  Outra informação que pode constar na coleira de identificação é o seu endereço. Esse dado pode ajudar muito, principalmente se o seu amigo se perder perto da sua casa. Afinal, pode não ser nenhum problema a pessoa ir até o local se ela estiver perto ou na vizinhança. 
  A identificação pode servir também para comunicar alguma condição especial do seu peludo. Se ele sofre com alguma doença ou tem convulsões, por exemplo. Sabendo disso, a pessoa já pode se preocupar em entregá-lo o mais rápido possível para você. 
  A partir disso, você pode se perguntar: será que vão caber todas essas informações na coleira de identificação para cachorro ou para gato? Existe outra opção que pode ajudar nisso. Vamos falar agora sobre os QR Code.
  Já é possível adicionar QR Code na coleira com identificação para cachorro e para gato. Nele, você pode relatar o máximo de informações possível sobre o pet e como devolvê-lo com segurança e rapidez. 
  Se for optar pelo QR Code, uma dica é adicionar também o nome do bichinho, o do tutor e um telefone, caso a pessoa que encontre tenha dificuldade em usar a tecnologia e prefira o modo tradicional. O importante é que seu amiguinho seja resgatado logo, não é mesmo?  
  Outra recomendação é usar a coleira de identificação com um material de qualidade para que todas as informações fiquem legíveis. Confira também se o material está bem fixado no bichinho para não correr o risco de cair quando ele correr e brincar por aí. 
  Nunca podemos prever uma fuga do nosso bicho de estimação, não é mesmo? E se ele tiver o hábito de sair à noite e ficar alguns dias fora de casa, como alguns gatos costumam fazer? 
  Outras situações que podem ocorrer é alguém deixar a porta aberta e o bichinho sair de casa, ou até mesmo durante um passeio, ele sair correndo atrás de um outro animal ou de um carro. Não faltam motivos para o animal se perder, infelizmente. 
  Por isso, é importante que eles usem a coleira com identificação em todos os momentos, até mesmo em casa, não só quando for passear na rua. É até mais prático para o tutor que o objeto fique sempre junto ao corpo do bichinho, até porque você não corre o risco de esquecer de colocá-lo. 
  Como foi visto, várias situações imprevisíveis podem acontecer, o importante é a prevenção. O recomendado é você checar se a placa de identificação está bem presa na coleira e se está adaptada ao pet para que ele fique confortável com ela e não queira tirá-la.),
  views: 103
)
post3.banner_image.attach(
  io: File.open('./public/images/coleira-com-identificacao.jpg'),
  filename: 'coleira-com-identificacao.jpg'
)

Tagpost.create!([
  { post_id: post3.id, tag_id: tag2.id }, 
  { post_id: post3.id, tag_id: tag3.id },
  { post_id: post3.id, tag_id: tag5.id }
])

Like.create!([
  {post_id: post3.id, user_id: user2.id},
])

##############

post4 = Post.create!(
  name: 'Descubra se gato castrado namora ou não!',
  content: %q(A castração é um processo simples, que oferece mais qualidade de vida para os gatos. Porém, o comportamento dos bichanos após a operação ainda desperta muitas dúvidas nos tutores. Uma questão que costuma ser muito levantada é: será que gato castrado namora? 
  Se a resposta for “não”, por que alguns bichanos continuam tentando escapar mesmo depois da esterilização? Para saber mais sobre o assunto, continue lendo este texto, pois vamos explicar para você se gato castrado namora ou não!
  Antes de responder se gato castrado namora, é interessante falarmos sobre como a castração irá implicar no comportamento do seu bichano. Afinal de contas, por mais que seja super simples e seguro, esse procedimento pode mudar bastante o dia a dia do pet. A começar pelo fato de que gatos castrados costumam ser menos fujões.
  A Dra. Louise Veiga da Silva Siqueira, médica-veterinária da Petz, conversou com a gente e explicou sobre essa mudança no comportamento dos peludos. De acordo com a especialista, essa alteração está relacionada à carga hormonal dos gatos. 
  Após a cirurgia, os bigodudos perdem seus instintos de procriação. Como consequência, se tornam mais caseiros e menos agitados. “O pet não sente tanta necessidade de marcar o território, fica menos agressivo e se torna mais calmo e tranquilo”, comenta a veterinária. 
  Conforme explicou a Dra. Louise, os bichanos que se submetem à castração perdem os desejos de procriação. Então, de maneira geral, podemos dizer que dificilmente vamos nos deparar com um gato castrado querendo cruzar. 
  Mas, se isso ocorre, por que alguns bichanos ainda apresentam comportamento sexual? De acordo com a veterinária, isso ocorre porque o bigodudo precisa de algum tempo para se acostumar à nova vida.
  “Nos primeiros três meses após a cirurgia, é normal que os machos ainda apresentem certa carga hormonal. Assim, não é nada incomum quando um gato castrado tenta cruzar  com fêmeas próximas”, comenta a doutora. 
  Após esse período, no entanto, os instintos sexuais do pet devem desaparecer. Porém, se você perceber o gato castrado querendo namorar muito tempo após a cirurgia, procure um veterinário. O médico realizará um diagnóstico e poderá definir se a cirurgia, de fato, foi bem-sucedida.
  Agora você já sabe se gato castrado namora ou não. Porém, será que mesmo após a cirurgia os bichanos continuam fugindo quando veem uma oportunidade? Se você achou que a castração fosse resolver completamente esse problema, infelizmente, temos uma má notícia. 
  A Dra. Louise explica que a castração não é suficiente para evitar as temidas fugas. 
  De acordo com a especialista, se o pet tinha o hábito de acessar a rua, ele continuará tentando dar suas escapadinhas. A diferença é que, muito provavelmente, a fuga não será ocasionada porque o gato castrado quer cruzar.),
  views: 80
)
post4.banner_image.attach(
  io: File.open('./public/images/gato-castrado-namora.jpg'),
  filename: 'gato-castrado-namora.jpg'
)

Tagpost.create!([
  { post_id: post4.id, tag_id: tag2.id }, 
  { post_id: post4.id, tag_id: tag5.id }
])

Like.create!([
  {post_id: post4.id, user_id: user1.id},
  {post_id: post4.id, user_id: user2.id},
])

##############

post5 = Post.create!(
  name: 'Gato castrado foge? Entenda o comportamento dos pets',
  content: %q(A castração é um dos processos mais recomendados para pets fujões. Geralmente, após a cirurgia os bichanos ficam mais calmos, tranquilos e caseiros, mas será que é sempre assim? Gato castrado foge? 
  Especialistas explicam que o comportamento dos peludos é complexo, por isso, a castração nem sempre é o suficiente para manter o pet em casa. Se seu bichano está escapando para passear por aí, continue lendo. Aprenda se gato castrado foge e como evitar possíveis problemas!
  Antes de responder se gato castrado foge, é importante conhecer os mitos e as verdades sobre esse processo. Será que a castração realmente altera o comportamento dos bichanos? 
  Para entender mais sobre o assunto, convidamos a Dra. Louise Veiga da Silva Siqueira, médica-veterinária da Petz. A especialista explica que, de fato, a cirurgia modifica alguns hábitos dos bigodudos. “Ela reduz a marcação de território e diminui a agressividade, deixando os pets mais calmos e tranquilos”, comenta. 
  Justamente por isso, a castração é tão recomendada para pais e mães de pet que têm gato que foge de casa. Como o peludo fica mais sossegado, os passeios tendem a diminuir. Entretanto, ela não é o suficiente para evitar fugas. 
  Como vimos, a castração realmente deixa os gatos mais tranquilos. Entretanto, alguns tutores relatam fugas mesmo com pets esterilizados. Se você está pensando “meu gato é castrado e foge”, saiba que a cirurgia não é a solução para todos os problemas comportamentais. 
  Se o pet já possui o hábito de acessar a rua com frequência, ele irá continuar com os passeios indesejados. “A única forma segura e eficaz de evitar que o gato saia de casa é a colocação de redes de proteção em todas as janelas e pontos de fuga”, comenta a Dra. Louise. 
  Ou seja: se os gatos castrados fogem continuadamente, o tutor deve tomar algumas medidas para prevenir as escapadas! Essa é a melhor forma de interromper esse hábito.
  Muitos tutores acreditam que os passeios dos bichanos são inofensivos. Afinal, os gatos voltam quando fogem, certo? Na verdade, as escapadas são mais perigosas que muitos imaginam.
  Especialistas reforçam que o acesso à rua é o principal motivo para a diminuição da expectativa de vida dos pets. Nas caminhadas, os bichanos podem sofrer acidentes, arranjar brigas e, principalmente, se infectar com vírus, bactérias e parasitas. 
  Além disso, quando estimulamos a atividade física por meio de brincadeiras e acessórios, os pets podem ter uma rotina saudável até em pequenos apartamentos. Como os passeios, além de perigosos, são desnecessários, o melhor é buscar outras formas de divertir seu amigo.),
  views: 58
)
post5.banner_image.attach(
  io: File.open('./public/images/gato-castrado-foge.jpg'),
  filename: 'gato-castrado-foge.jpg'
)

Tagpost.create!([{ post_id: post5.id, tag_id: tag2.id }])

# sem likes nesse

##############

post6 = Post.create!(
  name: 'Mordida de gato: saiba por que os gatos mordem e como evitar!',
  content: %q(Gatos são seres fofinhos e muito apegados aos seus tutores. Entretanto, como muitas pessoas já sabem, esses pets também podem ser bem desconfiados. Sendo assim, se estiverem sob alguma situação de estresse, os bichanos podem se tornar agressivos. Então, o que fazer se você levar uma mordida de gato? 
  Em geral, esse não é um comportamento esperado dos peludos, principalmente se estamos falando de nossos próprios bichinhos de estimação. Entretanto, quando apreensivos, gatos de rua ou até mesmo pets podem acabar mordendo quem — ou o que — se aproximar, como forma de defesa. 
  Porém, por se tratar de um ferimento cotidiano, a mordida de gato pode ser tratada levianamente. Entretanto, isso não deve acontecer, pois o machucado pode causar graves problemas à saúde. A seguir, descubra o que leva um gato a morder o tutor e o que fazer em casos como esse. 
  Diferentemente dos cães, o principal mecanismo de defesa dos felinos são as garras. Entretanto, como já explicamos, em algumas situações os bichinhos podem acabar usando as presas para se proteger. Mas em quais casos isso ocorre? 
  Em primeiro lugar, vale ressaltar que estamos levando em consideração mordidas de gato provinientes de comportamentos agressivos. Isso porque é comum os bichanos mordiscarem seus tutores durante brincadeiras e/ou cafunés. 
  Situações como essas não oferecem riscos à saúde, mas não devem ser incentivadas (principalmente quando se trata de mordidas de gato filhote). Afinal, não é interessante que os pets criem o hábito de morder seus tutores. Em alguns casos, isso pode levar a comportamentos mais agressivos. 
  Entretanto, quando falamos nas mordidas como forma de autodefesa, alguns fatores devem ser levados em consideração. A seguir, listamos os principais motivos pelos quais os gatos mordem: 
  Gatos são bichinhos desconfiados. Por isso, podem se assustar facilmente com barulhos, pessoas desconhecidas e até mesmo objetos muito grandes. Assim, gatos assustados tendem a ficar reclusos. Nesses momentos, é importante não tentar mexer com o animalzinho, pois isso pode acabar resultando em uma mordida. 
  Se o seu bichano não tem o costume de morder mas, de repente, começou com esse hábito, pode ser que ele esteja enfrentando algum problema de saúde. Assim, é importante ficar atento a mais sintomas. Nesses casos, não hesite em consultar um veterinário antes de levar uma mordida de gato no dedo da mão.
  Muitas situações podem deixar os bichanos estressados, seja uma ida ao veterinário ou a presença de muitas pessoas desconhecidas em sua casa. Além disso, você também pode acabar sofrendo uma mordida de gato de rua ao tentar resgatar o bichinho abandonado. Sendo assim, tome as devidas precauções.),
  views: 101
)
post6.banner_image.attach(
  io: File.open('./public/images/mordida-de-gato.jpg'),
  filename: 'mordida-de-gato.jpg'
)

Tagpost.create!([
  { post_id: post6.id, tag_id: tag5.id },
  { post_id: post6.id, tag_id: tag6.id }
])

Like.create!([
  {post_id: post6.id, user_id: userAdm.id},
  {post_id: post6.id, user_id: user2.id},
])

############## COMENTARIOS (REPLIES)

comment1 = Comment.create!([{
  description: 'Nossa, não sabia que isso era possível', 
  post_id: post1.id, 
  user_id: user1.id
}, {
  description: 'Nossa, não sabia que isso era possível', 
  post_id: post2.id, 
  user_id: user1.id
}, {
  description: 'Nossa, não sabia que isso era possível', 
  post_id: post3.id, 
  user_id: user1.id
}, {
  description: 'Nossa, não sabia que isso era possível', 
  post_id: post4.id, 
  user_id: user1.id
}, {
  description: 'Nossa, não sabia que isso era possível', 
  post_id: post5.id, 
  user_id: user1.id
}, {
  description: 'Nossa, não sabia que isso era possível', 
  post_id: post6.id, 
  user_id: user1.id
}])

reply1 = Reply.create!(
  description: 'Pois é kkkk, nem eu sabia, aprendi recentemente', 
  comment_id: comment1[0].id, 
  user_id: userAdm.id
)

reply2 = Reply.create!(
  description: 'Mesmo assim, muito obrigado', 
  comment_id: comment1[0].id, 
  user_id: user1.id
)

comment2 = Comment.create!([{
  description: 'Bem interessante', 
  post_id: post1.id, 
  user_id: user2.id
}, {
  description: 'Bem interessante', 
  post_id: post3.id, 
  user_id: user2.id
}, {
  description: 'Bem interessante', 
  post_id: post4.id, 
  user_id: user2.id
}, {
  description: 'Bem interessante', 
  post_id: post6.id, 
  user_id: user2.id
}])

############## REPORTS

Report.create!(
  reply_id: reply1.id, 
  comment_id: comment1[0].id
)

Report.create!(
  reply_id: reply2.id, 
  comment_id: comment1[0].id
)

############## CONTACT

Contact.create!(
  name: 'Teste Contato 001',
  email: 'testecontato001@email.com',
  description: 'Isso é uma mensagem de teste para contato'
)

Contact.create!(
  name: 'Teste Contato 002',
  email: 'testecontato002@email.com',
  description: 'Isso é uma das três mensagens de teste para contato'
)

Contact.create!(
  name: 'Teste Contato 003',
  email: 'testecontato003@email.com',
  description: 'Isso é a última de três mensagens de teste para contato'
)