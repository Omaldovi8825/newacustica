const productos = {
    audio: [
        {
            id: 'a1',
            name: 'Polar 10',
            description: 'Sistema compacto de alta potencia',
            price: 100,
            cover: 'wacustica_audio_polar_10.jpeg',
        },
        {
            id: 'a2',
            name: 'HK pro 10',
            description: 'Gabinete de rango completo y monitor de cuña de bajo perfil.',
            price: 300,
            cover: 'wacustica_audio_hk_pro_10.jpeg',
        },
        {
            id: 'a3',
            name: 'Hk LTSA',
            description: 'Sistema alemán de tiro largo. Se cubriran las necesidades de un aforo de 250 a 1200 personas, para clientes ejecutivos, políticos y musicales.',
            price: 150,
            cover: 'wacustica_audio_hk_ltsa.jpeg',
        },
        {
            id: 'a4',
            name: 'Hk sub 4000',
            description: 'L SUB 4000 A es un subwoofer flexible de paso de banda de doble ventilación de 18 ',
            price: 150,
            cover: 'wacustica_audio_hk_sub_4000.jpeg',
        },
        {
            id: 'a5',
            name: 'Mixer Soundcraft',
            description: 'Diseñado para ser tan simple como un mezclador analógico, una impecable interfaz de audio USB de 32 entradas / 32 salidas, Si Impact ofrece mezcla y grabación de sonido digital en vivo para aquellos que se niegan a comprometer la calidad del audio.',
            price: 150,
            cover: 'wacustica_audio_mixer_soundcraft.jpeg',
        },
    ],
    microfonia: [
        {
            id: 'a6',
            name: 'Microfono inalambrico shure sm58',
            description: 'Microfono Inalambrico Shure sm58',
            price: 150,
            cover: 'wacustica_audio_microfono_inalambrico_shure.jpeg',
        },
        {
            id: 'a7',
            name: 'microfono alambrico shure sm58',
            description: 'Microfono Alambrico Shure sm58.',
            price: 150,
            cover: 'wacustica_audio_microfono_alambrico_shure.jpeg',
        },  
    ],
    iluminacion: [
        {
            id: 'i1',
            name: 'Humo',
            description: 'Humo',
            price: 2000,
            cover: 'wacustica_iluminacion_humo.jpeg',
        },
        {
            id: 'i2',
            name: 'Wash',
            description: 'Wash',
            price: 900,
            cover: 'wacustica_iluminacion_wash.jpeg',
        },
        {
            id: 'i3',
            name: 'Beam',
            description: 'Beam',
            price: 700,
            cover: 'wacustica_iluminacion_beam.jpeg',
        },
    ],
    dj: [
        {
            id: 'd1',
            name: 'DJ booth',
            description: 'Zona específica para el DJ.',
            price: 2000,
            cover: 'wacustica_dj_booth.jpeg',
        },  
        {
            id: 'd2',
            name: 'CDJ 3000',
            description: 'CDJ 3000',
            price: 2000,
            cover: 'wacustica_dj_cdj_3000.jpeg',
        }, 
        {
            id: 'd3',
            name: 'DJM 900 NX2',
            description: 'DJM 900 NX2',
            price: 2000,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
        },      
    ],
    streaming: [
        {
            id: 's1',
            name: 'Streaming 2 horas',
            description: 'Streaming 2 horas',
            price: 2000,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
        }, 
        {
            id: 's2',
            name: 'Dron',
            description: 'de 20 min a 4 horas y de 4 horas a 8 horas',
            price: 2000,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
        }, 
        {
            id: 's3',
            name: 'Zoom Q8',
            description: 'La Q8 combina video de alta definición con audio de alta resolución, lo que la convierte en la cámara perfecta para creadores de música y video en todas partes. ',
            price: 2000,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
        },
        {
            id: 's4',
            name: 'Mevo Start',
            description: 'Mevo Start, la cámara de transmisión en Vivo inalámbrica Todo en uno y cámara Web. Transmisión en Vivo en 1080P H.',
            price: 2000,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
        },
        {
            id: 'v1',
            name: 'Pantalla LED',
            description: 'Pantalla LED Hasta 6 módulos 7 hasta 11',
            price: 2000,
            cover: 'wacustica_video_pantalla.jpeg',
        },      
    ],
    paquetes: [
        {
            id: 'p1',
            name: 'duda',
            description: 'para eventos ejecutivos de un aforo maximo de 100 personas, con standar profesional',
            price: 3600,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
            products: [
                'HK polar 10',
                'microfonia alambrica (2)',
                'operador'
            ]
        },
        {
            id: 'p2',
            name: 'social estandar',
            description: 'para tus eventos sociales con la mejor calidad sonora con un aforo maximo de 100 personas ',
            price: 7499,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
            products: [
                'hk polar 10 (1)',
                'wash robotica (2) sin colgar',
                'maquina de humo (1)',
                'operador (1)',
                'dj (1)',
                'ayudante (2)'
            ]
        },
        {
            id: 'p3',
            name: 'ejecutivo estandar',
            description: 'para eventos ejecutivos de un aforo maximo de 100 personas, con mayores herramientas profesionales',
            price: 12000,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
            products: [
                'hk polar 10 (1)',
                'mic alambricos (2)',
                'mic inalambricos (2)',
                'Hk pro 10 xd',
                'Mezcladora Soundcraft ',
                'operador (1)'
            ]
        },
        {
            id: 'p4',
            name: 'social estandar plus',
            description: 'para tus eventos sociales con la mejor calidad sonora con un aforo maximo de 100 personas y muy buena iluminacion',
            price: 15750,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
            products: [
                'hk polar 10 (1)',
                'wash (2)',
                'beam (2)',
                'Hk pro 10 xdestructura metalica de 2M x 2M  tipo porteria para suspender iluminacion',
                'paneles estroboscopicos (2)',
                'DMX',
                'operador (1)',
                'maquina de Humo (1)',
                'operador dmx (1)',
                'ayudante (2)'
            ]
        },
        {
            id: 'p5',
            name: 'Ejecutivo deluxe',
            description: 'tu eventos ejectivos de un aforo de 200 personas con el maximo equipamiento profesional',
            price: 17900,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
            products: [
                'Hk polar 10 (2)',
                'Mic alambricos (2)',
                'Mic inalambricos (4) se puede cambia uno por uno de solapa',
                'hk pro 10 xd (2)',
                'mixer soundcraft',
                'operador (1)',
                'ayudante (1)',
            ]
        },
        {
            id: 'p6',
            name: 'Social deluxe',
            description: 'para tus eventos sociales con la mejor calidad sonora con un aforo maximo de 200 personas ahora si, FIESTA!',
            price: 21700,
            cover: 'wacustica_dj_djm_900_nx2.jpeg',
            products: [
                'Hk polar 10 (2)',
                'wash (2)',
                'Beam (4)',
                'estructura metalica de 4M x 4M  tipo porteria para suspender iluminacion',
                'paneles estroboscopicos (5)',
                'DMX',
                'operador (1)',
                'operador DMX (1)',
                'ayudantes (2)'
            ]
        },
    ]
}

export default productos