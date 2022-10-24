const experiences = [
    {
        id: 1,
        title: 'Descubre el Centro histórico',
        price: 'Desde 0€',
        price_by: 'por persona',
        reviewers: '30',
        valuation: '4,75',
        similar:[],
        images:[ require('./img/1.jpg'), require('./img/2.jpeg'), require('./img/3.jpeg'), require('./img/4.webp')],
        user:{
            name:'Oficina Turismo Talavera',
            verified:true,
            previews:20,
            description:'¿Quieres conocer la historia de la cerámica más famosa de España? ¿Y pasear por la ciudad de donde proviene? Entonces no puedes perderte esta visita guiada por Talavera de la Reina. Además, puedes completar el tour con la entrada a un taller de cerámica tradicional.',
            avatar: require('./img/avatar.png'),
            extra_information:'',
        },
        content: {
            what_will_you_do: '¿Quieres conocer la historia de la cerámica más famosa de España? ¿Y pasear por la ciudad de donde proviene? Entonces no puedes perderte esta visita guiada por Talavera de la Reina. Además, puedes completar el tour con la entrada a un taller de cerámica tradicional.',
            location:[39.95880,-4.83002],
            what_are_you_going_to_do: ['El desplazamiento desde el punto de finalización de la visita por la ciudad hasta el taller se realizaría en vuestro propio vehículo.'],
            what_to_bring:['Ganas de descubrir.', 'Calzado confortable.'],
            cancellation_policy: ['Cancela sin gastos hasta 2 horas antes de la actividad. Si cancelas con menos tiempo, llegas tarde o no te presentas, no se ofrecerá ningún reembolso.'],
            comments_count: 5,
            comments_reviewers: 20,
            comments:[
                {
                    user:{
                        name: 'Miguel L',
                    },
                    comment: 'El puente romano es una maravilla de ingeniería, su diseño y fortaleza han permitido su permanencia en el tiempo.'
                },
                {
                    user:{
                        name: 'Sandra C',
                    },
                    comment: 'El casco antiguo se ha conservado en gran parte y se recomienda visitar el museo de la cerámica'
                },
                {
                    user:{
                        name: 'Alejandra R',
                    },
                    comment: 'Talavera es un lugar de gran belleza y con mucha historia, el único pero es que no está conservada como se debería, pero parece que en los últimos años se están haciendo esfuerzos por atraer al turismo. En cualquier caso, merece la pena dar un paseo por su casco histórico y visitar los jardines del prado y la basílica.'
                },
                {
                    user:{
                        name: 'Edu V',
                    },
                    comment: 'Me ha parecido un paseo bastante agradable con multitud de rincones que ver y fotografiar. Alargando el paseo hasta la ribera del río se completa una agradable jornada. Muchos bares chulos donde tomar algo y reponer fuerzas.'
                }
            ]
        }
    }
]

const GetExperience = (id) => {
    for(let i=0;i<experiences.length;i++)
        if(`${experiences[i].id}`===`${id}`)
            return experiences[i];
    return false;
}

const GetExperiences = () => {
    return experiences;
}

export { GetExperience, GetExperiences }