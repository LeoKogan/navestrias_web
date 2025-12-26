// Gallery data - photos with multi-language captions
const galleryPhotos = [
	{
		thumb: 'Images/photos/t1.jpg',
		image: 'Images/photos/1.jpg',
		caption: {
			es: 'Rio Neuquén superior - Tareas de consolidación de márgenes mediante implante de especies vegetales regionales.',
			en: 'Upper Neuquén River - Riverbank consolidation work through planting of regional plant species.',
			pt: 'Rio Neuquén Superior - Trabalhos de consolidação de margens através do plantio de espécies vegetais regionais.'
		}
	},
	{
		thumb: 'Images/photos/t3.jpg',
		image: 'Images/photos/3.jpg',
		caption: {
			es: 'Rio Curi leuvú - Consolidación de márgenes luego del cruce del gasoducto.',
			en: 'Curi Leuvú River - Riverbank consolidation after pipeline crossing completion.',
			pt: 'Rio Curi Leuvú - Consolidação de margens após conclusão do cruzamento do gasoduto.'
		}
	},
	{
		thumb: 'Images/photos/t4.jpg',
		image: 'Images/photos/4.jpg',
		caption: {
			es: 'Gasoducto - Inicio de revegetación natural debido al adecuado manejo ambiental.',
			en: 'Pipeline - Natural revegetation beginning due to proper environmental management.',
			pt: 'Gasoduto - Início da revegetação natural devido à gestão ambiental adequada.'
		}
	},
	{
		thumb: 'Images/photos/t5.jpg',
		image: 'Images/photos/5.jpg',
		caption: {
			es: 'Revegetación natural en última etapa de construcción.',
			en: 'Natural revegetation in final construction stage.',
			pt: 'Revegetação natural na etapa final da construção.'
		}
	},
	{
		thumb: 'Images/photos/t7.jpg',
		image: 'Images/photos/7.jpg',
		caption: {
			es: 'Construcción de gasoducto en zona Cordillera de los Andes.',
			en: 'Pipeline construction in the Andes mountain range.',
			pt: 'Construção de gasoduto na Cordilheira dos Andes.'
		}
	},
	{
		thumb: 'Images/photos/t8.jpg',
		image: 'Images/photos/8.jpg',
		caption: {
			es: 'Construcción de gasoducto en zona Cordillera de los Andes.',
			en: 'Pipeline construction in the Andes mountain range.',
			pt: 'Construção de gasoduto na Cordilheira dos Andes.'
		}
	},
	{
		thumb: 'Images/photos/t13.jpg',
		image: 'Images/photos/13.jpg',
		caption: {
			es: 'Recomposición de terreno de pista de ducto, Cordillera de los Andes.',
			en: 'Pipeline right-of-way terrain restoration in the Andes.',
			pt: 'Recuperação do terreno da faixa de dutos, Cordilheira dos Andes.'
		}
	},
	{
		thumb: 'Images/photos/t16.jpg',
		image: 'Images/photos/16.jpg',
		caption: {
			es: 'Gasoducto - Gestión ambiental preservando humedales y permitiendo pastaje del ganado.',
			en: 'Pipeline - Environmental management preserving wetlands and allowing cattle grazing.',
			pt: 'Gasoduto - Gestão ambiental preservando áreas úmidas e permitindo pastagem do gado.'
		}
	},
	{
		thumb: 'Images/photos/t19.jpg',
		image: 'Images/photos/19.jpg',
		caption: {
			es: 'Construcción de ducto en Cordillera de los Andes.',
			en: 'Pipeline construction in the Andes Mountains.',
			pt: 'Construção de duto na Cordilheira dos Andes.'
		}
	},
	{
		thumb: 'Images/photos/t20.jpg',
		image: 'Images/photos/20.jpg',
		caption: {
			es: 'Recomposición de mallines en el Norte de Neuquén - Argentina.',
			en: 'Wetland restoration in Northern Neuquén - Argentina.',
			pt: 'Recuperação de áreas úmidas no Norte de Neuquén - Argentina.'
		}
	},
	{
		thumb: 'Images/photos/t21.jpg',
		image: 'Images/photos/21.jpg',
		caption: {
			es: 'Especies arbóreas implantadas para preservación del cruce con el Rio Neuquén Superior.',
			en: 'Tree species planted for preservation at the Upper Neuquén River crossing.',
			pt: 'Espécies arbóreas plantadas para preservação no cruzamento do Rio Neuquén Superior.'
		}
	},
	{
		thumb: 'Images/photos/t22.jpg',
		image: 'Images/photos/22.jpg',
		caption: {
			es: 'Construcción de cortacorrientes para desviar corrientes de deshielo.',
			en: 'Water diversion construction to redirect snowmelt runoff.',
			pt: 'Construção de desviadores para redirecionar correntes de degelo.'
		}
	},
	{
		thumb: 'Images/photos/t26.jpg',
		image: 'Images/photos/26.jpg',
		caption: {
			es: 'Seguridad en tareas.',
			en: 'Work safety procedures.',
			pt: 'Procedimentos de segurança no trabalho.'
		}
	},
	{
		thumb: 'Images/photos/t31.jpg',
		image: 'Images/photos/31.jpg',
		caption: {
			es: 'Construcción de ducto.',
			en: 'Pipeline construction.',
			pt: 'Construção de duto.'
		}
	},
	{
		thumb: 'Images/photos/t33.jpg',
		image: 'Images/photos/33.jpg',
		caption: {
			es: 'Construcción de ducto, Cordillera de los Andes.',
			en: 'Pipeline construction in the Andes Mountains.',
			pt: 'Construção de duto na Cordilheira dos Andes.'
		}
	},
	{
		thumb: 'Images/photos/t35.jpg',
		image: 'Images/photos/35.jpg',
		caption: {
			es: 'Siembra de especies herbáceas para control de erosión en laderas.',
			en: 'Planting of herbaceous species for slope erosion control.',
			pt: 'Plantio de espécies herbáceas para controle de erosão em encostas.'
		}
	},
	{
		thumb: 'Images/photos/t37.jpg',
		image: 'Images/photos/37.jpg',
		caption: {
			es: 'Construcción de ducto, Norte Argentino.',
			en: 'Pipeline construction in Northern Argentina.',
			pt: 'Construção de duto no Norte da Argentina.'
		}
	},
	{
		thumb: 'Images/photos/t38.jpg',
		image: 'Images/photos/38.jpg',
		caption: {
			es: 'Tareas de construcción en altura.',
			en: 'High-altitude construction work.',
			pt: 'Trabalhos de construção em altitude.'
		}
	},
	{
		thumb: 'Images/photos/t40.jpg',
		image: 'Images/photos/40.jpg',
		caption: {
			es: 'Instalación de superficie, Gas Natural.',
			en: 'Surface installation for Natural Gas.',
			pt: 'Instalação de superfície para Gás Natural.'
		}
	},
	{
		thumb: 'Images/photos/t41.jpg',
		image: 'Images/photos/41.jpg',
		caption: {
			es: 'Construcción en zona de altura.',
			en: 'Construction in high-altitude area.',
			pt: 'Construção em zona de altitude.'
		}
	}
];

// Get captions for specific language
function getGalleryData(lang = 'es') {
	return galleryPhotos.map(photo => ({
		thumb: photo.thumb,
		image: photo.image,
		caption: photo.caption[lang] || photo.caption.es
	}));
}
