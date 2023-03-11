const db = require("../models");

const product = async () => {
	await db.product.bulkCreate([
		{
			name: "Pakcoy",
			unit_id: 2,
			category_id: 1,
			price: 4000,
			img: "https://assets.segari.id/products/10002900001_20122022112329.webp",
			description:
				"Pakcoy diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Labu Siam Besar",
			unit_id: 2,
			category_id: 1,
			price: 4500,
			img: "https://assets.segari.id/products/10002500002_17012023030126.webp",
			description:
				"Labu Siam Besar diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Terong Ungu",
			unit_id: 2,
			category_id: 1,
			price: 9000,
			img: "https://assets.segari.id/products/10003700002_20122022112329.webp",
			description:
				"Terong Ungu diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis/dipanggang.",
		},
		{
			name: "Daun Rosemary Segari",
			unit_id: 2,
			category_id: 1,
			price: 6000,
			img: "https://assets.segari.id/products/10700000031_02122022093505.jpg",
			description:
				"Daun Rosemary Segari cocok untuk memberikan aroma khas rosemary terhadap masakan. Cocok untuk dijadikan bumbu masak.",
		},
		{
			name: "Lettuce Head",
			unit_id: 2,
			category_id: 1,
			price: 11200,
			img: "https://assets.segari.id/products/10003400002_20122022115456.webp",
			description:
				"Lettuce Head diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk dijadikan salad/sebagai pelengkap hidangan lain/dimakan mentah.",
		},
		{
			name: "Tomat Cherry",
			unit_id: 2,
			category_id: 1,
			price: 10700,
			img: "https://assets.segari.id/products/10003900006_21122022120137.webp",
			description:
				"Tomat Cherry diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk dijadikan salad.",
		},
		{
			name: "Buncis Organik",
			unit_id: 2,
			category_id: 1,
			price: 14700,
			img: "https://assets.segari.id/products/10006300007_22122022111456.webp",
			description:
				"Buncis Organik ditanam tanpa kimia sehingga memiliki kadar mineral yang tinggi dan terhindar dari residu pestisida. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Wortel Organik",
			unit_id: 2,
			category_id: 1,
			price: 20500,
			img: "https://assets.segari.id/products/10006300005_22122022111456.webp",
			description:
				"Wortel Organik ditanam tanpa kimia sehingga memiliki kadar mineral yang tinggi dan terhindar dari residu pestisida. Sayur ini cocok untuk ditumis/dikukus/dijadikan bahan jus",
		},
		{
			name: "Cabai Rawit Merah",
			unit_id: 2,
			category_id: 1,
			price: 11200,
			img: "https://assets.segari.id/products/10000900004_27122022110935.webp",
			description:
				"Cabai Rawit Merah diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk dijadikan bumbu masakan.",
		},
		{
			name: "Sawi Hijau",
			unit_id: 2,
			category_id: 1,
			price: 4500,
			img: "https://assets.segari.id/products/10003300001_20122022112329.webp",
			description:
				"Sawi Hijau diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis.",
		},
		// Batas Per 10 Product
		{
			name: "Jagung Acar Organik",
			unit_id: 2,
			category_id: 1,
			price: 21700,
			img: "https://assets.segari.id/products/10006300012_22122022112938.webp",
			description:
				"Jagung Acar Organik ditanam tanpa kimia sehingga memiliki kadar mineral yang tinggi dan terhindar dari residu pestisida. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Brokoli",
			unit_id: 2,
			category_id: 1,
			price: 21000,
			img: "https://assets.segari.id/products/10000500001_20122022111855.webp",
			description:
				"Brokoli diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis/dikukus.",
		},
		{
			name: "Kentang Rendang",
			unit_id: 1,
			category_id: 1,
			price: 20000,
			img: "https://assets.segari.id/products/10002300001_20122022112329.webp",
			description:
				"Kentang Rendang diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk digoreng/direbus/dipanggang.",
		},
		{
			name: "Jahe",
			unit_id: 2,
			category_id: 1,
			price: 2000,
			img: "https://assets.segari.id/products/10100100001_20122022113047.webp",
			description:
				"Jahe cocok untuk memberikan aroma pedas segar terhadap masakan. Cocok untuk dijadikan bumbu masak.",
		},
		{
			name: "Selada Hijau Keriting",
			unit_id: 2,
			category_id: 1,
			price: 7900,
			img: "https://assets.segari.id/products/10003400001_20122022112329.webp",
			description:
				"Selada Hijau Keriting diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk dijadikan salad/sebagai pelengkap hidangan lain/dimakan mentah.",
		},
		{
			name: "Jamur Tiram",
			unit_id: 2,
			category_id: 1,
			price: 8000,
			img: "https://assets.segari.id/products/10001500002_20122022112329.webp",
			description:
				"Jamur Tiram diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Jeruk Nipis",
			unit_id: 2,
			category_id: 1,
			price: 6500,
			img: "https://assets.segari.id/products/10100200002_20122022113047.webp",
			description:
				"Jeruk Nipis cocok untuk memberikan aroma segar jeruk terhadap masakan. Cocok untuk dikombinasikan dengan sambal/pelengkap hidangan bakar atau kuah.",
		},
		{
			name: "Kentang Dieng AB",
			unit_id: 1,
			category_id: 1,
			price: 24000,
			img: "https://assets.segari.id/products/10002300002_20122022114040.webp",
			description:
				"Kentang Dieng AB diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk digoreng/direbus/dipanggang.",
		},
		{
			name: "Bawang Putih Kating",
			unit_id: 2,
			category_id: 1,
			price: 11000,
			img: "https://assets.segari.id/products/10000300002_20122022111855.webp",
			description:
				"Bawang Putih Kating diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk penambah aroma dan rasa untuk masakan tumis.",
		},
		{
			name: "Edamame Segari",
			unit_id: 2,
			category_id: 1,
			price: 15500,
			img: "https://assets.segari.id/products/10718000044_02122022093951.jpg",
			description:
				"Edamame Segari diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Kacang ini cocok untuk dikukus.",
		},
		// Batas Per 10 Product
		{
			name: "Pakcoy Hidroponik Segari",
			unit_id: 2,
			category_id: 1,
			price: 11000,
			img: "https://assets.segari.id/products/10006400027_03012023103425.webp",
			description:
				"Pakcoy Hidroponik Segari ditanam di media air sehingga menghasilkan produk segar tanpa pestisida. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Lettuce Romaine Hidroponik Segari",
			unit_id: 2,
			category_id: 1,
			price: 14500,
			img: "https://assets.segari.id/products/10006400035_03012023110651.webp",
			description:
				"Lettuce Romaine Hidroponik Segari ditanam di media air sehingga menghasilkan produk segar tanpa pestisida. Sayur ini cocok untuk dijadikan salad/sebagai pelengkap hidangan lain/dimakan mentah.",
		},
		{
			name: "Petai Kupas",
			unit_id: 2,
			category_id: 1,
			price: 25400,
			img: "https://assets.segari.id/products/10003200002_20122022115456.webp",
			description: "",
		},
		{
			name: "Selada Hijau Keriting Hidroponik Segari",
			unit_id: 2,
			category_id: 1,
			price: 13900,
			img: "https://assets.segari.id/products/10006400028_03012023103425.webp",
			description:
				"Selada Hijau Keriting Hidroponik Segari ditanam di media air sehingga menghasilkan produk segar tanpa pestisida. Sayur ini cocok untuk dijadikan salad/sebagai pelengkap hidangan lain/dimakan mentah.",
		},
		{
			name: "Daun Katuk",
			unit_id: 2,
			category_id: 1,
			price: 6900,
			img: "https://assets.segari.id/products/10005200001_22122022110335.webp",
			description:
				"Daun Katuk diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Kangkung Hidroponik Segari",
			unit_id: 2,
			category_id: 1,
			price: 12500,
			img: "https://assets.segari.id/products/10006400032_03012023104222.webp",
			description:
				"Kangkung Hidroponik Segari ditanam di media air sehingga menghasilkan produk segar tanpa pestisida. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Bawang Merah Brebes Super",
			unit_id: 2,
			category_id: 1,
			price: 12100,
			img: "https://assets.segari.id/products/11600000081_17012023022042.webp",
			description: "",
		},
		{
			name: "Daun Thyme Segari",
			unit_id: 2,
			category_id: 1,
			price: 7000,
			img: "https://assets.segari.id/products/10700000030_02122022093444.jpg",
			description:
				"Daun Thyme Segari cocok untuk memberikan aroma khas thyme terhadap masakan. Cocok untuk dijadikan bumbu masak.",
		},
		{
			name: "Siomak Hidroponik Segari",
			unit_id: 2,
			category_id: 1,
			price: 15000,
			img: "https://assets.segari.id/products/10400000045_02122022090603.jpg",
			description:
				"Siomak Hidroponik Segari ditanam di media air sehingga menghasilkan produk segar tanpa pestisida. Sayur ini cocok untuk ditumis.",
		},
		{
			name: "Baby Wortel",
			unit_id: 2,
			category_id: 1,
			price: 12600,
			img: "https://assets.segari.id/products/10000800043_03012023113018.webp",
			description:
				"Baby Wortel diproses dan dikemas langsung untuk menjaga kualitas dan kesegaran. Sayur ini cocok untuk ditumis/dikukus.",
		},
		// Batas Per 10 Product
		// Batas Category 1
		{
			name: "Lengkeng",
			unit_id: 2,
			category_id: 2,
			price: 24900,
			img: "https://assets.segari.id/products/20002800001_21122022120137.webp",
			description:
				"Informasi Asal : Buah Impor asal Thailand. \n Rasa dan Tekstur : Berbentuk bulat berwarna kuning kecokelatan, rasanya manis dan tinggi kandungan air. \n Kematangan : Fresh, simpan dalam kulkas, dan dapat langsung dimakan. Dapat dimakan langsung sebagai camilan atau diolah menjadi es teh leci, es buah, atau kreasi makanan dan minuman lainnya. \n Gramasi : 1 pack berat sekitar 450-500 gram",
		},
		{
			name: "Semangka Merah",
			unit_id: 5,
			category_id: 2,
			price: 39600,
			img: "https://assets.segari.id/products/20001900002_20122022114910.webp",
			description:
				"Informasi Asal: Buah Lokal. \n Rasa dan Tekstur: Memiliki rasa manis, ukuran bulat, dan tinggi akan kandungan air. Warna kulit hijau. Warna daging merah dengan sedikit biji yang muda. \n Kematangan: Tingkat kematangan 80-100%, simpan 1-3 hari jika belum matang sempurna. \n Gramasi: 1 pcs berat sekitar 3-4 kg.",
		},
		{
			name: "Apel Fuji",
			unit_id: 5,
			category_id: 2,
			price: 33500,
			img: "https://assets.segari.id/products/20000300003_20122022114748.webp",
			description:
				"Apel Fuji berasal dari RRC dan memiliki ukuran relatif normal dibanding apel lainnya. Tekstur buah ini renyah dan memiliki rasa lebih manis dan sedikit asam.",
		},
		{
			name: "Lemon Lokal",
			unit_id: 2,
			category_id: 2,
			price: 12300,
			img: "https://assets.segari.id/products/20002100001_20122022113912.webp",
			description:
				"Informasi Asal: Buah Lokal. \n Rasa dan Tekstur: Memiliki aroma citrus yang tercium lebih kuat, dan memiliki perpaduan rasa asam, dan sedikit manis. \n Kematangan: Fresh, simpan dalam kulkas, dan dapat langsung dimakan. \n Gramasi : 1 pack berat sekitar 400-500 gram berisi 3-4 pcs.",
		},
		{
			name: "Jambu Biji",
			unit_id: 2,
			category_id: 2,
			price: 9500,
			img: "https://assets.segari.id/products/20000900007_27122022110935.webp",
			description:
				"Informasi Asal: Buah Lokal. \n Rasa dan Tekstur: Daging buah berwarna pink, tekstur sedikit lembut, memiliki kulit tipis yang bisa dimakan, rasanya lebih manis dibanding jambu lainnya dan aroma buah yang khas. Dapat dikonsumsi langsung atau dibuat jus dan smoothie. \n Kematangan: Tingkat kematangan 80-100%, tunggu 1-2 hari jika belum matang sempurna. \n Gramasi: 1 pack berat sekitar 400-500 gram berisi 3-5 pcs.",
		},
		{
			name: "Jeruk Medan",
			unit_id: 2,
			category_id: 2,
			price: 23500,
			img: "https://assets.segari.id/products/20002700032_27122022102251.webp",
			description:
				"Jeruk Medan berasal dari Jawa Timur dan memiliki ukuran relatif normal dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa manis dan asam segar.",
		},
		{
			name: "Nanas Golden",
			unit_id: 5,
			category_id: 2,
			price: 26500,
			img: "https://assets.segari.id/products/20001400001_20122022113047.webp",
			description:
				"Informasi Asal: Buah Lokal. \n Rasa dan Tekstur: Merk Sunpride, rasa manis asam, daging buah tebal, kandungan air banyak, bertekstur halus. \n Kematangan: Tingkat kematangan 80-100%, simpan 1-3 hari jika belum matang sempurna. \n Gramasi: 1 pcs berat sekitar 1-1.3 kg.",
		},
		{
			name: "Rambutan Binjai",
			unit_id: 1,
			category_id: 2,
			price: 33500,
			img: "https://assets.segari.id/products/20004000001_22122022111139.webp",
			description:
				"Informasi Asal: Buah lokal. \n Rasa dan Tekstur: Dagingnya legit, tidak telalu basah, manis dan tidak melekat dibiji. Rambutan ini memiliki bentuk buah yang agak lonjong dengan rambut panjang, jarang, dan kasar. Warna rambutan ini merah tua. Rasanya manis dan tekstur daging buahnya agak kering.\n Informasi Nutrisi: Buah rambutan termasuk salah satu sumber vitamin C, vitamin A, antioksidan, dan serat. Sehingga dapat membantu menyeimbangkan gula darah, mencegah penyakit jantung, menjaga fungsi ginjal, menjaga sistem imun tubuh, membantu menurunkan berat badan, dan lain-lain. \n Kematangan: Fresh, simpan dalam kulkas, dan dapat langsung dimakan. \n Gramasi: 1 pack berat sekitar 0.8-1 kg berisi 10-12 pcs.",
		},
		{
			name: "Buah Naga Merah",
			unit_id: 1,
			category_id: 2,
			price: 26900,
			img: "https://assets.segari.id/products/20000700001_20122022113047.webp",
			description:
				"Informasi Asal: Buah Lokal. \n Sebutan Umum: Red Dragon Fruit, Pitaya Roja, Red-Fleshed Pitaya, Hylocereus polyrhizus. \n Rasa dan Tekstur: Daging buah manis, padat, memiliki kandungan air yang tinggi, sedikit keras (semi-firm) namun lembut (tender). Memiliki banyak biji kecil renyah-kenyal berwarna hitam yang dapat dimakan. Kulitnya yang tipis dapat dengan mudah dikupas setelah diiris berwarna merah cerah ketika matang. \n Informasi Nutrisi: Merupakan sumber vitamin C yang baik untuk memperkuat sistem kekebalan tubuh, tinggi serat untuk mengatur saluran pencernaan, kalium untuk menyeimbangkan kadar cairan dalam tubuh, dan fosfor untuk melindungi tulang dan gigi. Kaya akan magnesium dan zat besi. \n Kematangan: Dapat langsung dimakan. Higienis dan cocok untuk camilan maupun dijadikan bahan campuran smoothie atau kreasi buah naga lainnya. \n Gramasi: 1 pack berat sekitar 0.9-1.1 kg berisi 2-3 pcs",
		},
		{
			name: "Pear Packham",
			unit_id: 1,
			category_id: 2,
			price: 41900,
			img: "https://assets.segari.id/products/20001600008_20122022115456.webp",
			description:
				"Pear Packham berasal dari RRC dan memiliki ukuran relatif normal dibanding jenis pear lainnya. Buah ini memiliki kulit bewarna Hijau dan rasa yang manis.",
		},
		// Batas Per 10 Product
		{
			name: "Jeruk Sweet Mandarin Lokal",
			unit_id: 2,
			category_id: 2,
			price: 19900,
			img: "https://assets.segari.id/products/20002700037_14022023023026.webp",
			description:
				"Jeruk Sweet Mandarin Lokal berasal dari Jawa Timur dan memiliki ukuran relatif normal dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa manis dan asam segar.",
		},
		{
			name: "Alpukat Mentega Premium",
			unit_id: 1,
			category_id: 2,
			price: 39900,
			img: "https://assets.segari.id/products/20000100002_20122022113047.webp",
			description:
				"Alpukat Mentega Premium dipanen dari daerah Jawa Timur dan diproses langsung untuk menjaga kualitas. Alpukat memiliki ukuran relatif normal dibanding jenis alpukat lainnya dan rasanya gurih.",
		},
		{
			name: "Strawberry Korea",
			unit_id: 2,
			category_id: 2,
			price: 209000,
			img: "https://assets.segari.id/products/20600000112_29112022091259.jpg",
			description:
				"Strawberry Korea 330 gram berasal dari Korea dan memiliki ukuran relatif lebih besar dibanding jenis strawberry lainnya. Buah ini memiliki rasa yang sangat manis dan tidak asam.",
		},
		{
			name: "Jeruk Peras",
			unit_id: 1,
			category_id: 2,
			price: 19200,
			img: "https://assets.segari.id/products/10100200003_20122022113047.webp",
			description:
				"Jeruk Peras berasal dari Asia dan memiliki ukuran relatif lebih kecil dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa sedikit manis dan lebih asam.",
		},
		{
			name: "Pear Xiang Lie",
			unit_id: 2,
			category_id: 2,
			price: 36900,
			img: "https://assets.segari.id/products/20001600022_27122022112410.webp",
			description:
				"Pear Xiang Lie berasal dari RRC dan memiliki ukuran relatif normal dibanding jenis pear lainnya. Buah ini memiliki kulit bewarna Hijau dan rasa yang sedikit manis.",
		},
		{
			name: "Apel Granny Smith",
			unit_id: 1,
			category_id: 2,
			price: 69000,
			img: "https://assets.segari.id/products/20000300004_20122022115106.webp",
			description:
				"Apel Granny Smith berasal dari California dan memiliki ukuran relatif normal dibanding apel lainnya. Tekstur buah ini renyah dan memiliki rasa sedikit manis dan asam segar.",
		},
		{
			name: "Jeruk Kino",
			unit_id: 1,
			category_id: 2,
			price: 27500,
			img: "https://assets.segari.id/products/20002700020_22122022111139.webp",
			description:
				"Jeruk Kino berasal dari Pakistan/Turki dan memiliki ukuran relatif sangat kecil dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa sedikit manis dan sedikit asam.",
		},
		{
			name: "Rambutan Rapiah",
			unit_id: 1,
			category_id: 2,
			price: 51000,
			img: "https://assets.segari.id/products/20004000002_30122022120553.webp",
			description: "",
		},
		{
			name: "Apel Fuji Blush",
			unit_id: 2,
			category_id: 2,
			price: 29900,
			img: "https://assets.segari.id/products/20000210054_03012023114110.webp",
			description:
				"Apel Fuji Blush berasal dari RRC dan memiliki ukuran relatif normal dibanding apel lainnya. Tekstur buah ini renyah dan memiliki rasa paling manis dan sedikit asam.",
		},
		{
			name: "Durian Monthong Frozen",
			unit_id: 2,
			category_id: 2,
			price: 110000,
			img: "https://assets.segari.id/products/20000800001_20122022115334.webp",
			description:
				"Informasi Asal: Buah Lokal asal Palu. \n Rasa dan Tekstur: Daging buahnya berwarna kuning dan tebal, agak kering dan rendah lemak, daging buah manis dan bertekstur halus dengan aroma durian yang tajam (strong). \n Kematangan: Frozen, simpan dalam kulkas / freezer, dan dapat langsung dimakan. \n Gramasi: 1 pack berisi 500 gram.",
		},
		// Batas Per 10 Product
		{
			name: "Jeruk Papagan",
			unit_id: 1,
			category_id: 2,
			price: 89000,
			img: "https://assets.segari.id/products/20600000120_04012023023616.webp",
			description:
				"Jeruk Papagan berasal dari Jepang dan memiliki ukuran relatif sangat kecil dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa sedikit manis dan sedikit asam.",
		},
		{
			name: "Melon Rock",
			unit_id: 1,
			category_id: 2,
			price: 25100,
			img: "https://assets.segari.id/products/20001300008.jpg",
			description:
				"Melon Rock dipanen dari Jawa Timur dan langsung diproses untuk menjaga kesegaran. Buah ini memiliki ukuran relatif normal memiliki tekstur daging yang renyah.",
		},
		{
			name: "Pisang Cavendish",
			unit_id: 2,
			category_id: 2,
			price: 11500,
			img: "https://assets.segari.id/products/20001700002_20122022114350.webp",
			description:
				"Pisang Cavendish dipanen dari Lampung dan langsung diproses untuk menjaga kesegaran buah. Buah ini memiliki rasa yang sangat manis dan ukuran normal dibanding pisang lainnya.",
		},
		{
			name: "Semangka Kuning",
			unit_id: 5,
			category_id: 2,
			price: 75200,
			img: "https://assets.segari.id/products/20800000112_12012023111036.webp",
			description: "",
		},
		{
			name: "Anggur Merah Red Globe Premium",
			unit_id: 2,
			category_id: 2,
			price: 35000,
			img: "https://assets.segari.id/products/20000200031_30122022124023.webp",
			description:
				"Anggur Merah Red Globe Premium berasal dari Peru dan memiliki ukuran relatif normal dibanding jenis anggur lainnya. Anggur ini memiliki rasa manis dan asam segar.",
		},
		{
			name: "Lemon Impor",
			unit_id: 2,
			category_id: 2,
			price: 20800,
			img: "https://assets.segari.id/products/20002100002_20122022114748.webp",
			description:
				"Informasi Asal: Buah Impor asal Tiongkok. \n Rasa dan Tekstur: Memiliki warna kuning yang cantik dan juga bersih. Bulir lemon yang besar, dan kandungan air yang tinggi. Rasa asam dan sangat segar. \n Kematangan: Fresh, simpan dalam kulkas, dan dapat langsung dimakan. \n Gramasi: 1 pack berat sekitar 450-550 gram berisi 3 pcs",
		},
		{
			name: "Jeruk Shantang Daun",
			unit_id: 1,
			category_id: 2,
			price: 52900,
			img: "https://assets.segari.id/products/20002700008_22122022110031.webp",
			description:
				"Jeruk Shantang Daun berasal dari RRC dan memiliki ukuran relatif lebih kecil dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa manis dan sedikit asam.",
		},
		{
			name: "Jambu Kristal",
			unit_id: 2,
			category_id: 2,
			price: 14900,
			img: "https://assets.segari.id/products/20000900008_27122022110935.webp",
			description:
				"Informasi Asal: Buah Lokal. \n Rasa dan Tekstur: Warna daging buah putih dengan kulit hijau. Rasanya cukup manis, tidak sepat, dan lebih renyah dari jambu lainnya. Sedikit biji dan bisa dimakan. Biasa dikonsumsi langsung atau dengan gula, garam, atau bumbu rujak. \n Kematangan: Tingkat kematangan 80-100%, dapat disimpan dalam kulkas dan langsung dimakan. \n Gramasi: 1 pack berisi 400-500 gram berisi 3-4 pcs",
		},
		{
			name: "Jeruk Ponkam",
			unit_id: 1,
			category_id: 2,
			price: 49900,
			img: "https://assets.segari.id/products/20002700021_22122022111139.webp",
			description:
				"Jeruk Ponkam berasal dari RRC dan memiliki ukuran relatif sangat kecil dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa manis dan asam segar.",
		},
		{
			name: "Jeruk Sunkist Navel",
			unit_id: 1,
			category_id: 2,
			price: 48000,
			img: "https://assets.segari.id/products/20001000007_20122022115456.webp",
			description:
				"Jeruk Sunkist Navel berasal dari USA, RRC, Aussie dan memiliki ukuran relatif lebih besar dibanding jenis jenis jeruk lainnya. Buah ini memiliki rasa manis dan sedikit asam.",
		},
		// Batas Per 10 Product
		// Batas Category 2
		{
			name: "Telur Ayam Negeri Curah",
			unit_id: 5,
			category_id: 3,
			price: 22000,
			img: "https://assets.segari.id/products/30000100005_20122022114350.webp",
			description:
				"Telur Ayam Negeri Curah merupakan salah satu sumber protein hewani yang memiliki rasa yang lezat dan tingkat protein yang tinggi.",
		},
		{
			name: "Tempe",
			unit_id: 2,
			category_id: 3,
			price: 16800,
			img: "https://assets.segari.id/products/70000700005_27122022110603.webp",
			description:
				"Tempe adalah makanan khas Indonesia yang mengandung segudang manfaat. Selain pengolahannya yang mudah, tempe dapat dikreasikan menjadi berbagai masakan.",
		},
		{
			name: "Tahu Kims Kuning",
			unit_id: 2,
			category_id: 3,
			price: 14500,
			img: "https://assets.segari.id/products/70000600016_27122022103213.webp",
			description:
				"Tahu Kims Kuning berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Sutra Kong Kee",
			unit_id: 5,
			category_id: 3,
			price: 10800,
			img: "https://assets.segari.id/products/70000600010.jpg",
			description:
				"Tahu Sutra Kong Kee berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Telur Puyuh",
			unit_id: 5,
			category_id: 3,
			price: 19900,
			img: "https://assets.segari.id/products/30000300001_20122022113912.webp",
			description:
				"Telur Puyuh merupakan salah satu sumber protein hewani yang memiliki rasa yang lezat dan tingkat protein yang tinggi.",
		},
		{
			name: "Telur Asin Kukus",
			unit_id: 5,
			category_id: 3,
			price: 20100,
			img: "https://assets.segari.id/products/30000400008.jpg",
			description:
				"Telur Asin Kukus merupakan salah satu sumber protein hewani yang memiliki rasa yang lezat dan tingkat protein yang tinggi. Telur asin bisa langsung di konsumsi.",
		},
		{
			name: "Nugget Tempe Ayam",
			unit_id: 5,
			category_id: 3,
			price: 29500,
			img: "https://assets.segari.id/products/70000700006_27122022115212.webp",
			description: "Nugget Tempe Ayam adalah olahan tempe siap masak. Diproduksi oleh Tempe Kita.",
		},
		{
			name: "Telur Asin Bakar",
			unit_id: 5,
			category_id: 3,
			price: 27500,
			img: "https://assets.segari.id/products/30000400007_27122022104946.webp",
			description:
				"Telur Asin Bakar merupakan salah satu sumber protein hewani yang memiliki rasa yang lezat dan tingkat protein yang tinggi. Telur asin bisa langsung di konsumsi.",
		},
		{
			name: "Tahu Susu Jombang",
			unit_id: 1,
			category_id: 3,
			price: 21000,
			img: "https://assets.segari.id/products/70100500017_30122022121120.webp",
			description:
				"Tahu Susu Jombang berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Cina Manalagi",
			unit_id: 5,
			category_id: 3,
			price: 13400,
			img: "https://assets.segari.id/products/70000600018_27122022104740.webp",
			description:
				"Tahu Cina Manalagi berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		// Batas Per 10 Product
		{
			name: "Telur Ayam Kampung Curah",
			unit_id: 5,
			category_id: 3,
			price: 13200,
			img: "https://assets.segari.id/products/30000100001_20122022113402.webp",
			description:
				"Telur Ayam Kampung Curah merupakan salah satu sumber protein hewani yang memiliki rasa yang lezat dan tingkat protein yang tinggi.",
		},
		{
			name: "Tempe Kita",
			unit_id: 2,
			category_id: 3,
			price: 15300,
			img: "https://assets.segari.id/products/70000700003_20122022115246.webp",
			description:
				"Tempe Kita adalah makanan khas Indonesia yang mengandung segudang manfaat. Selain pengolahannya yang mudah, tempe dapat dikreasikan menjadi berbagai masakan.",
		},
		{
			name: "Tahu Inofu Tofu Special",
			unit_id: 2,
			category_id: 3,
			price: 17800,
			img: "https://assets.segari.id/products/82242000005_02022023103720.webp",
			description: "",
		},
		{
			name: "Tahu Kims Putih",
			unit_id: 2,
			category_id: 3,
			price: 20500,
			img: "https://assets.segari.id/products/70000600017_27122022103213.webp",
			description:
				"Tahu Kims Putih berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Omega-3 Eggs Telur Omega by Ayyomi Farm",
			unit_id: 5,
			category_id: 3,
			price: 37800,
			img: "https://assets.segari.id/products/30000100098_03012023102706.webp",
			description:
				"Omega-3 Eggs Telur Omega by Ayyomi Farm merupakan salah satu sumber protein hewani yang memiliki rasa yang lezat dan tingkat protein yang tinggi.",
		},
		{
			name: "Tahu Yun Yi Kuning",
			unit_id: 5,
			category_id: 3,
			price: 26500,
			img: "https://assets.segari.id/products/70000600003_20122022114910.webp",
			description: "",
		},
		{
			name: "Tahu Yun Yi Putih",
			unit_id: 5,
			category_id: 3,
			price: 26500,
			img: "https://assets.segari.id/products/70000600004_20122022114910.webp",
			description: "",
		},
		{
			name: "Tahu Kims Non GMO",
			unit_id: 5,
			category_id: 3,
			price: 17400,
			img: "https://assets.segari.id/products/82242000002_28122022110229.webp",
			description:
				"Tahu Kims Non GMO berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tofu Seafood Seafoodking",
			unit_id: 5,
			category_id: 3,
			price: 30300,
			img: "https://assets.segari.id/products/80100900045_15022023053528.webp",
			description: "",
		},
		{
			name: "Tempe Kita Ekonomis",
			unit_id: 5,
			category_id: 3,
			price: 8500,
			img: "https://assets.segari.id/products/70000700004_27122022104946.webp",
			description:
				"Tempe Kita Ekonomis adalah makanan khas Indonesia yang mengandung segudang manfaat. Selain pengolahannya yang mudah, tempe dapat dikreasikan menjadi berbagai masakan.",
		},
		// Batas Per 10 Product
		{
			name: "Tahu Telur Kong Kee",
			unit_id: 5,
			category_id: 3,
			price: 8800,
			img: "https://assets.segari.id/products/70000600009_22122022110031.webp",
			description:
				"Tahu Telur Kong Kee berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Udang Kong Kee",
			unit_id: 5,
			category_id: 3,
			price: 8400,
			img: "https://assets.segari.id/products/70000600005_22122022110031.webp",
			description:
				"Tahu Udang Kong Kee berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Putih Manalagi",
			unit_id: 5,
			category_id: 3,
			price: 18000,
			img: "https://assets.segari.id/products/70000600006_20122022115838.webp",
			description:
				"Tahu Putih Manalagi berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Ayam Kong Kee",
			unit_id: 5,
			category_id: 3,
			price: 9400,
			img: "https://assets.segari.id/products/70000600008_22122022110031.webp",
			description:
				"Tahu Ayam Kong Kee berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Pong Goreng Manalagi",
			unit_id: 5,
			category_id: 3,
			price: 18300,
			img: "https://assets.segari.id/products/70000600007_20122022115838.webp",
			description:
				"Tahu Pong Goreng Manalagi berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Jepang Putih Kong Kee",
			unit_id: 5,
			category_id: 3,
			price: 7700,
			img: "https://assets.segari.id/products/70000600011_22122022110335.webp",
			description:
				"Tahu Jepang Putih Kong Kee berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Towang Organik",
			unit_id: 2,
			category_id: 3,
			price: 32900,
			img: "https://assets.segari.id/products/70000600015_08022023020500.webp",
			description:
				"Tahu Towang Organik berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Tahu Towang Tahu Kuning",
			unit_id: 2,
			category_id: 3,
			price: 47800,
			img: "https://assets.segari.id/products/70000600012_22122022111302.webp",
			description:
				"Tahu Towang Tahu Kuning berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		{
			name: "Nugget Tempe Sayur",
			unit_id: 2,
			category_id: 3,
			price: 49000,
			img: "https://assets.segari.id/products/70000700007_27122022115212.webp",
			description: "Nugget Tempe Sayur adalah olahan tempe siap masak. Diproduksi oleh Tempe Kita.",
		},
		{
			name: "Tahu Bakso Aci Healthy Barn",
			unit_id: 5,
			category_id: 3,
			price: 34900,
			img: "https://assets.segari.id/products/50100900057_19122022050111.webp",
			description:
				"Tahu Bakso Aci Healthy Barn berasal dari endapan perasan biji kedelai dan mengandung protein yang bermanfaat. Dapat diolah menjadi berbagai hidangan.",
		},
		// Batas Per 10 Product
		// Batas Category 3
		{
			name: "Arummi Cashew Milk",
			unit_id: 4,
			category_id: 4,
			price: 39900,
			img: "https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/products/71712000063_1_27022023125709.webp",
			description:
				"Susu UHT nabati lokal dari kacang mede pertama di Indonesia, Arummi Cashew Milk bisa menjadi alternatif baru yang jauh lebih creamy tidak kalah dengan susu sapi. Terbuat dari kacang mede pilihan yang kaya akan mineral dan vitamin yang baik untuk kesehatanmu. Rendah lemak, Arummi Cashew Milk hanya mengandung 100 kkal per sajiannya. Arummi Cashew Milk bisa dinikmati langsung dan lebih enak dalam kondisi dingin.",
		},
		{
			name: "Jus Tropical Orange",
			unit_id: 5,
			category_id: 4,
			price: 22000,
			img: "https://assets.segari.id/products/31254000001_11012023120750.webp",
			description:
				"Komposisi: nanas, wortel dan jeruk. \n Tanpa bahan pengawet dan pemanis buatan. \n Tanpa tambahan air. \n Diolah menggunakan teknik perasan bertenaga tinggi secara perlahan sehingga panas yang dihasilkan sangat minim agar vitamin dan mineral dari bahan segar tetap terjaga. 100% fresh dan premium. \n Petunjuk penyimpanan: Simpan di chiller",
		},
		{
			name: "Jus Jambu Biji",
			unit_id: 5,
			category_id: 4,
			price: 13200,
			img: "https://assets.segari.id/products/20102700044_29122022114418.webp",
			description:
				"Informasi Asal: Buah Lokal. \n Rasa dan Tekstur: Daging buah berwarna pink, tekstur sedikit lembut, memiliki kulit tipis yang bisa dimakan, rasanya lebih manis dibanding jambu lainnya dan aroma buah yang khas. Dapat dikonsumsi langsung atau dibuat jus dan smoothie. \n Kematangan: Tingkat kematangan 80-100%, tunggu 1-2 hari jika belum matang sempurna. \n Gramasi: 1 pack berat sekitar 400-500 gram berisi 3-5 pcs.",
		},
		{
			name: "Sirup Maple Joe",
			unit_id: 5,
			category_id: 4,
			price: 105000,
			img: "https://assets.segari.id/products/80700200008_27122022114346.webp",
			description: "",
		},
		{
			name: "Susu Bear Brand",
			unit_id: 5,
			category_id: 4,
			price: 11500,
			img: "https://assets.segari.id/products/81100300014_22122022115720.webp",
			description: "",
		},
		{
			name: "Susu Greenfields UHT Full Cream",
			unit_id: 4,
			category_id: 4,
			price: 64600,
			img: "https://assets.segari.id/products/81100300020_30122022123917.webp",
			description: "Gramasi: 3 pcs x 1000 L",
		},
		{
			name: "Yoghurt Squeeze Original Cimory",
			unit_id: 5,
			category_id: 4,
			price: 10000,
			img: "https://assets.segari.id/products/81100100004_27122022103525.webp",
			description: "",
		},
		{
			name: "Banana Milk Mujigae",
			unit_id: 5,
			category_id: 4,
			price: 9900,
			img: "https://assets.segari.id/products/71733000032_11012023121959.webp",
			description: "",
		},
		{
			name: "Jus Tropical Glow",
			unit_id: 5,
			category_id: 4,
			price: 22800,
			img: "https://assets.segari.id/products/31254000000_11012023120750.webp",
			description:
				"Komposisi: wortel, nanas, apel dan pir. \n Tanpa bahan pengawet dan pemanis buatan. \n Tanpa tambahan air. \n Diolah menggunakan teknik perasan bertenaga tinggi secara perlahan sehingga panas yang dihasilkan sangat minim agar vitamin dan mineral dari bahan segar tetap terjaga. 100% fresh dan premium. \n Petunjuk penyimpanan: Simpan di chiller.",
		},
		{
			name: "Jus Tropical Green",
			unit_id: 5,
			category_id: 4,
			price: 22800,
			img: "https://assets.segari.id/products/31254000003_11012023120750.webp",
			description:
				"Komposisi: Nanas, timun, jeruk, dan bayam. \n Tanpa bahan pengawet dan pemanis buatan. \n Tanpa tambahan air. \n Diolah menggunakan teknik perasan bertenaga tinggi secara perlahan sehingga panas yang dihasilkan sangat minim agar vitamin dan mineral dari bahan segar tetap terjaga. 100% fresh dan premium. \n Petunjuk penyimpanan: Simpan di chiller",
		},
		// Batas Per 10 Product
		{
			name: "Smoothie Choco Banana",
			unit_id: 5,
			category_id: 4,
			price: 25500,
			img: "https://assets.segari.id/products/20102700051_30122022122537.webp",
			description: "",
		},
		{
			name: "Strawberry Yoghurt Smoothie",
			unit_id: 5,
			category_id: 4,
			price: 26600,
			img: "https://assets.segari.id/products/31251000000_11012023121502.webp",
			description:
				"Komposisi: Strawberry, susu, yoghurt, gula dan air. Tanpa bahan pengawet. 100% fresh dan premium. Petunjuk penyimpanan: Simpan di chiller.",
		},
		{
			name: "Smoothie Banana Berry",
			unit_id: 5,
			category_id: 4,
			price: 25500,
			img: "https://assets.segari.id/products/20003300017_29122022111153.webp",
			description: "",
		},
		{
			name: "Smoothie Choco Avo Banana",
			unit_id: 5,
			category_id: 4,
			price: 25500,
			img: "https://assets.segari.id/products/20102700050_30122022122537.webp",
			description: "",
		},
		{
			name: "Sirup Jeruk Squash Delight ABC",
			unit_id: 5,
			category_id: 4,
			price: 15000,
			img: "https://assets.segari.id/products/80700200007_27122022103021.webp",
			description: "",
		},
		{
			name: "Teh Sariwangi",
			unit_id: 5,
			category_id: 4,
			price: 6500,
			img: "https://assets.segari.id/products/80100500001_27022023100434.webp",
			description: "",
		},
		{
			name: "Sirup Squash Delight Orange ABC 3 in 1",
			unit_id: 5,
			category_id: 4,
			price: 45000,
			img: "https://assets.segari.id/products/89900400007_03012023102706.webp",
			description: "",
		},
		{
			name: "Soft Drink Coca Cola",
			unit_id: 5,
			category_id: 4,
			price: 18800,
			img: "https://assets.segari.id/products/89800100046_10012023103520.webp",
			description: "1.5 liter / bottle",
		},
		{
			name: "Soft Drink Sprite",
			unit_id: 5,
			category_id: 4,
			price: 21900,
			img: "https://assets.segari.id/products/89800100048_10012023103520.webp",
			description: "1.5 liter / bottle",
		},
		{
			name: "Soft Drink Strawberry Fanta",
			unit_id: 5,
			category_id: 4,
			price: 18800,
			img: "https://assets.segari.id/products/89800100047_10012023103520.webp",
			description: "1.5 liter / bottle",
		},
		// Batas Per 10 Product
		{
			name: "Coffe Moccachino Neo",
			unit_id: 5,
			category_id: 4,
			price: 8900,
			img: "https://assets.segari.id/products/89800100129_10012023103259.webp",
			description: "10 x 20 gram / pack",
		},
		{
			name: "Soft Drink Zero Sugar Coca Cola",
			unit_id: 5,
			category_id: 4,
			price: 10900,
			img: "https://assets.segari.id/products/89800100049_10012023103520.webp",
			description: "250 ml / bottle",
		},
		{
			name: "Soft Drink Waterlymon Sprite",
			unit_id: 5,
			category_id: 4,
			price: 5900,
			img: "https://assets.segari.id/products/89800100050_10012023103520.webp",
			description: "425 ml / bottle",
		},
		{
			name: "Coffe Caramel Machiato Neo",
			unit_id: 5,
			category_id: 4,
			price: 9500,
			img: "https://assets.segari.id/products/89800100154_10012023103404.webp",
			description: "200 gram / pack",
		},
		{
			name: "Coklat Hot Cocoa Delfi",
			unit_id: 5,
			category_id: 4,
			price: 18000,
			img: "https://assets.segari.id/products/81300100046.jpg",
			description: "5 x 25 gram / box",
		},
		{
			name: "Susu Oat Barista Blend Oatside",
			unit_id: 4,
			category_id: 4,
			price: 43500,
			img: "https://assets.segari.id/products/81100300022_30122022124023.webp",
		},
		{
			name: "Susu Oat Chocolate Oatside",
			unit_id: 4,
			category_id: 4,
			price: 43500,
			img: "https://assets.segari.id/products/81100300023_30122022124023.webp",
			description: "1 liter / pack",
		},
		{
			name: "Yoghurt Blueberry Greenfields",
			unit_id: 2,
			category_id: 4,
			price: 39000,
			img: "https://assets.segari.id/products/81100100023_03012023103609.webp",
			description: "500 gram / pack",
		},
		{
			name: "Yogurt Strawberry Cimory",
			unit_id: 5,
			category_id: 4,
			price: 8500,
			img: "https://assets.segari.id/products/81100100002_27122022103525.webp",
			description: "240 ml / bottle",
		},
		{
			name: "Susu Oat Chocolate Hazelnut Oatside",
			unit_id: 4,
			category_id: 4,
			price: 50000,
			img: "https://assets.segari.id/products/81100300021_30122022124023.webp",
			description: "1 liter / pack",
		},
		// Batas Per 10 Product
		// Batas Category 4
		{
			name: "Minyak Goreng Filma",
			unit_id: 4,
			category_id: 5,
			price: 24500,
			img: "https://assets.segari.id/products/70000400005_27122022103356.webp",
			description: "1 liter / Pouch",
		},
		{
			name: "Beras Merah Organik Pure Green",
			unit_id: 1,
			category_id: 5,
			price: 43500,
			img: "https://assets.segari.id/products/70000400069_03012023114553.webp",
			description: "1 kg / pack",
		},
		{
			name: "Beras Pandan Wangi Organik Pure Green",
			unit_id: 1,
			category_id: 5,
			price: 42500,
			img: "https://assets.segari.id/products/70000400068_03012023114553.webp",
			description: "1 kg / pack",
		},
		{
			name: "Beras Hitam Organik Pure Green",
			unit_id: 1,
			category_id: 5,
			price: 57500,
			img: "https://assets.segari.id/products/70000400067_03012023114553.webp",
			description: "1 kg / pack",
		},
		{
			name: "Minyak Goreng Kelapa Barco",
			unit_id: 4,
			category_id: 5,
			price: 37450,
			img: "https://assets.segari.id/products/70000400003_22122022105221.webp",
			description: "1 Liter / pouch",
		},
		{
			name: "Minyak Goreng Rose Brand",
			unit_id: 4,
			category_id: 5,
			price: 20500,
			img: "https://assets.segari.id/products/70100500018_30122022121220.webp",
			description: "1 Liter / pouch",
		},
		{
			name: "Beras Setra Ramos Topi Koki",
			unit_id: 5,
			category_id: 5,
			price: 64000,
			img: "https://assets.segari.id/products/70000100001_20122022113402.webp",
			description: "5 kg / pack",
		},
		{
			name: "Gula Tebu Premium Pack Hijau Gulaku",
			unit_id: 5,
			category_id: 5,
			price: 6500,
			img: "https://assets.segari.id/products/89800100077_10012023104143.webp",
			description: "200 gram / pack",
		},
		{
			name: "Garam Dolpin",
			unit_id: 5,
			category_id: 5,
			price: 4100,
			img: "https://assets.segari.id/products/70000200003_27122022102908.webp",
			description: "250 gram / pack",
		},
		{
			name: "Gula Merah",
			unit_id: 2,
			category_id: 5,
			price: 9500,
			img: "https://assets.segari.id/products/70000300001_20122022113727.webp",
			description: "500 gram / pack",
		},
		// Batas Per 10 Product
		{
			name: "Barco Minyak Goreng Botol",
			unit_id: 4,
			category_id: 5,
			price: 81100,
			img: "https://assets.segari.id/products/89800100064_10012023103636.webp",
			description: "2 liter / bottle",
		},
		{
			name: "Minyak Goreng Barco Pouch",
			unit_id: 4,
			category_id: 5,
			price: 47500,
			img: "https://assets.segari.id/products/89800100065_10012023103636.webp",
			description: "1 liter / pouch",
		},
		{
			name: "Minyak Olive Oil Extra Virgin Bertolli",
			unit_id: 5,
			category_id: 5,
			price: 102900,
			img: "https://assets.segari.id/products/89800100172_10012023102832.webp",
			description: "500 ml / bottle",
		},
		{
			name: "Minyak Olive Oil Filippo Berio",
			unit_id: 4,
			category_id: 5,
			price: 236500,
			img: "https://assets.segari.id/products/89800100151_10012023103404.webp",
			description: "1 liter / bottle",
		},
		{
			name: "Minyak Olive Oil Extra Light Bertolli",
			unit_id: 4,
			category_id: 5,
			price: 192500,
			img: "https://assets.segari.id/products/89800100139_10012023103404.webp",
			description: "1 liter / bottle",
		},
		{
			name: "Minyak Olive Oil Extra Light Fillipo Berio",
			unit_id: 4,
			category_id: 5,
			price: 231500,
			img: "https://assets.segari.id/products/89800100179_10012023102832.webp",
			description: "1 liter / bottle",
		},
		{
			name: "Garam Laut dengan Bawang Bombay Jays",
			unit_id: 5,
			category_id: 5,
			price: 30000,
			img: "https://assets.segari.id/products/80204100095_29122022114418.webp",
			description: "120 gram / bottle",
		},
		{
			name: "Minyak Wijen Lee Kum Kee",
			unit_id: 5,
			category_id: 5,
			price: 64900,
			img: "https://assets.segari.id/products/89800100166_10012023102832.webp",
			description: "207 ml / bottle",
		},
		{
			name: "Minyak Zaitun Bertolli",
			unit_id: 5,
			category_id: 5,
			price: 55500,
			img: "https://assets.segari.id/products/80204100206_03012023112943.webp",
			description: "250 ml / bottle",
		},
		{
			name: "Garam Laut Bawang Putih Jays",
			unit_id: 5,
			category_id: 5,
			price: 28500,
			img: "https://assets.segari.id/products/80204100093_29122022114418.webp",
			description: "120 gram / bottle",
		},
		// Batas Per 10 Product
		{
			name: "Garam Laut Lada Hitam Jays",
			unit_id: 5,
			category_id: 5,
			price: 28500,
			img: "https://assets.segari.id/products/80204100096_29122022114418.webp",
			description: "120 gram / bottle",
		},
		{
			name: "Garam Laut Cabai Jays",
			unit_id: 5,
			category_id: 5,
			price: 28500,
			img: "https://assets.segari.id/products/80204100094_29122022114418.webp",
			description: "120 gram / bottle",
		},
		{
			name: "Garam Laut Natural Pura",
			unit_id: 5,
			category_id: 5,
			price: 46900,
			img: "https://assets.segari.id/products/80102900015_28122022120032.webp",
			description: "300 gram / pouch",
		},
		{
			name: "Minyak Jagung Mazola",
			unit_id: 4,
			category_id: 5,
			price: 136500,
			img: "https://assets.segari.id/products/80204100154_03012023105950.webp",
			description: "900 ml / bottle",
		},
		{
			name: "Minyak Goreng Sovia Pouch",
			unit_id: 4,
			category_id: 5,
			price: 24450,
			img: "https://assets.segari.id/products/71749000011_10012023112511.webp",
			description: "1 L / pouch",
		},
		{
			name: "Minyak Wijen Yo Guan Heng",
			unit_id: 5,
			category_id: 5,
			price: 30100,
			img: "https://assets.segari.id/products/71713000008_10012023105335.webp",
			description: "110 ml / bottle",
		},
		{
			name: "Minyak Wijen Oh Guan Hing",
			unit_id: 5,
			category_id: 5,
			price: 49400,
			img: "https://assets.segari.id/products/71713000009_10012023105335.webp",
			description: "600 ml / bottle",
		},
		{
			name: "Canola Oil Lily Flower",
			unit_id: 4,
			category_id: 5,
			price: 109000,
			img: "https://assets.segari.id/products/71713000057_10012023111009.webp",
			description: "2 liter / bottle",
		},
		{
			name: "Minyak Canola Golden Bridge",
			unit_id: 4,
			category_id: 5,
			price: 62300,
			img: "https://assets.segari.id/products/70100500008_28122022120447.webp",
			description: "1 liter / bottle",
		},
		{
			name: "Minyak Sunflower Golden Bridge",
			unit_id: 4,
			category_id: 5,
			price: 79500,
			img: "https://assets.segari.id/products/70100500009_28122022120447.webp",
			description: "1 liter / bottle",
		},
		// Batas Per 10 Product
	]);
};

product();
