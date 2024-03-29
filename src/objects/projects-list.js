import { images } from "./url-image"

export const projectsList = [
    {
        id: '1',
        title: 'Ip Address Tracker',
        imageS: images.ipTracker.small,
        image: images.ipTracker.normal,
        desc: 'Essa aplicação mostra a localização geográfica de endereços de IP ou domínios.',
        repoLink: 'https://github.com/jhonyfreitasdev/ip-address-tracker',
        pageLink: 'https://ip-address-tracker-jhonyfreitasdev.vercel.app/',
        skills: ['Sass', 'React', 'TypeScript']
    },
    {
        id: '2',
        title: 'Pokédex',
        imageS: images.pokedex.small,
        image: images.pokedex.normal,
        desc: 'Uma pokedex em forma de lista onde cada pokemon possui uma página única com suas habilidades e movimentos detalhados, criada em um layout responsivo com botão que altera o tema e um filtro para os tipos dos pokemons.',
        repoLink: 'https://github.com/jhonyfreitasdev/pokedex',
        pageLink: 'https://pokedex-alpha-mauve.vercel.app/',
        skills: ['Jest', 'Styled Components', 'React', 'JavaScript']
    },
    {
        id: '3',
        title: 'Lavandinha Bordados',
        imageS: images.lavanda.small,
        image: images.lavanda.normal,
        desc: 'Um catalogo de uma loja de bordados feito em uma Single Page Application com React e possui um carrinho de compras com integração com o WhatsApp.',
        repoLink: '',
        pageLink: 'https://lavandinha-bordados.vercel.app/',
        skills: ['Styled Components', 'JavaScript', 'React']
    },
    {
        id: '4',
        title: 'API do Github',
        imageS: images.github.small,
        image: images.github.normal,
        desc: 'Nesse site eu faço um request da Api do GitHub e renderizo informações do perfil solicitado como repositórios, seguidores e eventos.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-fetch-com-api-do-github',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-fetch-com-api-do-github/',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    /*{
        id: '5',
        title: 'Blog',
        // imageS: images..small,
        // image: images..normal,
        desc: 'Um blog básico para trabalhar com o conceito de rotas no React.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-blog',
        pageLink: '',
        skills: ['React', 'JavaScript', 'Styled Components']
    },*/
    {
        id: '6',
        title: 'Project Interactive Card',
        imageS: images.interactiveCard.small,
        image: images.interactiveCard.normal,
        desc: 'Um formulário que vai atualizando as informações preenchidas nele em um cartão modelo ao lado, automaticamente. Possui também validação de campos numéricos e vazios.',
        repoLink: 'https://github.com/jhonyfreitasdev/project-interactive-card',
        pageLink: 'https://jhonyfreitasdev.github.io/project-interactive-card/',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: '7',
        title: 'Gerador de conselhos',
        imageS: images.gerador.small,
        image: images.gerador.normal,
        desc: 'Um gerador de conselhos/frases aleatórios, que são fornecidos através de uma API.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-gerador-de-conselhos',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-gerador-de-conselhos/',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: '8',
        title: 'Fylo',
        imageS: images.fylo.small,
        image: images.fylo.normal,
        desc: 'Desafio feito do Fontend Mentor de uma landing page criada com Flex e Grid, utilizando javaScript para validação de email.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-fylo',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-fylo/',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    /*{
        id: '9',
        title: 'Contador de Pontos',
        imageS: images..small,
        image: images..normal,
        desc: 'Em construção.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-contador-truco',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-fylo/',
        skills: ['React', 'JavaScript', 'Styled Components']
    },*/
    {
        id: '10',
        title: 'Pet Hope',
        imageS: images.petHope.small,
        image: images.petHope.normal,
        desc: 'Uma Landing page de uma ONG para adoção de cachorros.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-pet-hope',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-pet-hope/',
        skills: ['HTML', 'CSS']
    },
    {
        id: '11',
        title: 'Agência XPTO',
        imageS: images.agenciaXPTO.small,
        image: images.agenciaXPTO.normal,
        desc: 'Uma landing page de divulgação de uma agência, com carousel de imagens contendo seus projetos.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-agencia-xpto',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-agencia-xpto/',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: '12',
        title: 'Agência XYZ',
        imageS: images.agenciaXYZ.small,
        image: images.agenciaXYZ.normal,
        desc: 'Uma landing page criada para testar vários formatos de layouts, utilizando display Flex e Grid.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-agencia-xyz',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-agencia-xyz/',
        skills: ['HTML', 'CSS']
    },
    {
        id: '13',
        title: 'Cordel Moderno',
        imageS: images.cordel.small,
        image: images.cordel.normal,
        desc: 'Uma poesia de Milton Duarte, construída em uma página com efeito parallax.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-cordel',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-cordel/',
        skills: ['HTML', 'CSS']
    },
    {
        id: '14',
        title: 'Code Café',
        imageS: images.codeCafe.small,
        image: images.codeCafe.normal,
        desc: 'Uma landing page de uma cafeteria.',
        repoLink: 'https://github.com/jhonyfreitasdev/projeto-code-cafe',
        pageLink: 'https://jhonyfreitasdev.github.io/projeto-code-cafe/',
        skills: ['HTML', 'CSS']
    },
]