var img = document.getElementById("img");
var loc = document.getElementById("location");

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function swapImage(){
    let index = getRandomInt(images.length)
    img.src = "https://lightroom.adobe.com/v2c/spaces/42df3b4ced584d1ea7b99d0035413610/assets/" + images[index];
    loc.textContent = locations[index];
}

var images = [
    "102d04a816364e52a2da4b416a37e06c/revisions/0a61ed1ab9504901888e87c3a2e3e340/renditions/4936eb38a275aa42c181685ebbaf0005",
    "9257cc23b01c4fda9a6a82fed4b1ccbb/revisions/27cc630694e442da9cd9e4b4faa5e61b/renditions/73a4ad9995cce432a02b91196c3afda9",
    "ba96ac4ec0f44fa98c28aa281ecd2876/revisions/80fd4d235a7142b59f64f7264906d473/renditions/4fe7f33a013072c43cf98cef6d46a27e",
    "6b14d5eb80eb40fd81a0a76934f2ebcc/revisions/77e07cd4714b47a38517766f6693b229/renditions/bdf66fc4ca2d00a9ee1d13d9a6e58d9d",
    "a4b6b0e26bf341c4acfac12e9ce5cd5b/revisions/a9d7266ef29d4c939a0a9f316fcb820d/renditions/c33f1d82f490fcbdb2a2ffb2ecf4c078",
    "74f6e081d98d4680996499b8c548fcba/revisions/e811a4116d274840871405d919ff61cb/renditions/54fc2a05ed04fd5a911b7e87038da775",
    "2ce76b0f669e46fe8528afb1c368e41d/revisions/fdcdb0c0630c438c8a17a809d477ed19/renditions/fdeef2e634b176764cc96d04fdfc1959",
    "d293413b9fb04fd4b6400c91b78399af/revisions/d33c30d8eb4d453394f2220450fd79b5/renditions/717a7e6225c3d7cee00d1d257f86d62b",
    "98429d5167de405a8ef06546cee58e41/revisions/eeb183cdd2f94b86beed0dae1597af0c/renditions/e30ab2ff470564c0d3533da9e32e5e76",
    "76733c462ecf4a0d8c350f8804f8acc5/revisions/e3d5030cf01b46d5bf1542c80a12836e/renditions/d547ff9cd2ad3eb827b50f57cfde6495",
    "21622e46030547e4b3136e82e7394ab5/revisions/400f42ff4df541b3bced444eb7205f35/renditions/d4a6b2bda970041aee7c6bdfa6f8d0be",
    "b3820fe5211e471bb16038c6e07356a8/revisions/ea0668773c484794877535ff0b62ad30/renditions/16c5bebb29de598f50a49e96d59b65c7",
    "82fde175d8ae42a2903233186c01296f/revisions/2cd2fdf0c28c47e4ba4ad59b4c97e647/renditions/1dd8af01a5a0cb69990ff8a8c2818e88",
    "13ff997db8404fc9a45ff38a5580c679/revisions/d7b263da0d7a401289a0310ff2cdb412/renditions/1fe459ed3426940912a68f5e639bb628",
    "4358ca2f5bcd4c81bfa6fb3105b4195b/revisions/0a8c880e6fd64a30afe359f6d8e816a7/renditions/4fe8c2341a7b8f088a184eacb87c19c4",
    "4e113df1cd3e4c3d9c62bde7f6d3264c/revisions/1b592079bc06414990ccb4d071ba8ac2/renditions/4e2f1d35dbcdd4815459a1c809b163a2",
    "cfe7809a06524b29aa9990c254cf9776/revisions/842f6adf19c94485918ad800e5a3c8f3/renditions/e914eafcd231f8f6f2833565ccd3b7b2",
    "14546d8fae3c481989c9d8470916bd38/revisions/cb3501b170ee4295a41b868dc84354f5/renditions/b188aafde411c981db6a23683ce3ac16",
    "a5bc306852d6405dada9a9290b1b2dd2/revisions/7e98490ac2004ae196f8a2a4fcf978d2/renditions/9ae3b6521d1a6e8fd3cd8c8e2857504f",
    "7cf6dfc587964e1d8468d6933d96cc81/revisions/a25d1fcb7787405ab1962e4a85f38087/renditions/889faedf2d36390ce8e5b3e69758904d",
    "6669476541b94f5982f5245b49de074d/revisions/e42424abbf05470bb334710eab582361/renditions/accded40011cf4cc13f9bcb08fdc8e51",
    "f0b8b4c25260470cb540491bd8950bb9/revisions/e1128c689af257665ee0bca0b6fdce83/renditions/26eb735a844a0ec017b5cacde1ca4e46",
    "693af057161d45b3a7e6ef4b101c35ca/revisions/eb01ddcd4bd74221addb3b5e726a0fe4/renditions/3a6da34a2064a5893794573c7967bf90",
    "5ad294a0b20947f9b37eb0cfa5890eca/revisions/1da5595d692c41d78a9d9a06c891b9ca/renditions/4afea31a88fc588a2438bc30ec6dffe4",
    "c5784ee711d64779b806e8fb19e59e04/revisions/025bb3a2709849179a243b0c684b2d3e/renditions/525e20fd8f343a9fab9f23cbca27bf1e",
    "dde43e26bd544007b837e91f653b9e4b/revisions/ed72eda72cb4481e9d3037cf9ba2616c/renditions/5a9e437355b27f5d67b65b66b6802449",
    "80fb2d5b506840f6b84fad153dfa36e8/revisions/a8fefeb0f8cd4651816d3e3bfaf37c56/renditions/480b11f9a26bcd601f586f06beb4b7c8",
    "c7035a4a999549efb29305fb350ff363/revisions/08fe73612fa246b69ef90cdf19e2cf8d/renditions/7ce445641ae64b8317d44d6ebac9184b",
    "aa300a41ac3c49b9ada8a68623c8ae33/revisions/2c3ea30b12a246e1a4811ecc884fbd8c/renditions/57f47e420e2061eee17a9fbbf9d26b5c",
    "3fd6dcbddc9e43c5b8ea084a9613b912/revisions/1a851ba8fe3b42ad978c381f55a537e9/renditions/7ff4f83f6bc31895eed6f6a2269bdcfd",
    "4bbc7df991ad4d79a727f812444b7f42/revisions/131f5e6b7fbb45639158abc47d94fc6e/renditions/25b3e6098b2055147cb25ae966057876",
    "62ece4b043b74661901b5cac31d17d6f/revisions/6ee75d60b8cb46a585671692f5fb68fe/renditions/a86eddffb2bd8e1c5a9757ea86f668e9",
    "fbef2043edba49cf884da9b908394e23/revisions/21be8f513544464b9a51d813ddd4c472/renditions/134b414ea94260b0359bdda0baaebc77",
    "4c1d104263d84b5eaa8d032edfa13109/revisions/2c40196cd1b44094a78a80f0914cc6c3/renditions/eb36113709a3e7a7daae27c40354c559",
    "d2dce7119f3f4add817eea44a2d2a462/revisions/b780f27c140843e19b25ca07c4b52579/renditions/3eb94515cf42ffdfd35467c77d0057ab",
    "f5bd11dafba54086a12aeae33aeb7bd4/revisions/b751a06c0ea1424580c4227dc3194b95/renditions/e9adb02e1afc8031b13ae4367b947fc5",
    "96e8cbe7b09e4bdeb681171617f0c656/revisions/c8ac44d2ce0a4c088a8156230b0ecf2a/renditions/ca7ba8ca9c393317ab06746e4d866e0d",
    "1f5013f209f94166aae71a6b3947ea2d/revisions/c6ebf3e9d1b14c42933bd0d06e6ebe2a/renditions/fdb880bbcf61705da7694f60b4f2ddaa",
    "89ca749fefc84060b4fa4acae4f6ba0b/revisions/b861e3f76d65453aab0f7b071cfce10e/renditions/a9fcd9433b6e7a55525484f77a3c6112",
    "e0a9797416314feba9d34448695356f4/revisions/cedbf696c82f49f8bfe8249dfafac31a/renditions/c82e403c504a4c50a90d4c9c494d7bc3",
    "f651cf2658f849d08a6583687471a91f/revisions/ae677998a486417eb700fd1fe477ab8f/renditions/81358e8501ccd7cfd121c6cffe3a16a1",
    "e833bff634f541c282c9d36af8fa7a68/revisions/6fee243e18484bd1a6fab0a1f00a52b8/renditions/a31ccc88bb44cfa5e736e98ad85a3a78",
    "e5685163146e42738f4e25c4a5a0d39c/revisions/e7ab3c83df1a4bc4a6e2cd6f23695f03/renditions/1703d37f3dd8116727c9db5a51d15d57",
    "ae884bc22e3549cb93b566c0ec62ad42/revisions/2476b34bc6804d38aa650c3b2c171334/renditions/0b1d4733affe7829d7f7c3c3530f1240",
    "b7c66e3577c3436d9c42681378c5bad3/revisions/5415cf9cb4554574a5947a5b026c55b1/renditions/7f7b6d39273ffad5e4e9424a90a86067",
    "00efb69d84034a7791470c48207fc592/revisions/a12229fc6731475f9430bb97440e0903/renditions/12729447444a0fcdb2cb250de7ea7999",
    "13662a5c2683447eb83a534faf663af5/revisions/cef4d3b8a36f47c0bcef3ac22394d0e0/renditions/2cb30572d9140c4c4414868fdc5a182e",
    "d54f8b07243d487ea4aa3dff78f2b592/revisions/28fdacf86ed943ca9b20d83c4a41c7b2/renditions/1689f0bd0bbbf85538f95b001c65879c",
    "43c296fbdd5447d4b864097fc2683b9f/revisions/a40001ae470f461f939a00320cfffcf7/renditions/3a53c443f24c1073c3a5f61b90e264be",
    "261730fa90a943c9aaadf532e7ed0961/revisions/3037dbd2e7e24e4ba0e1e9acb8e7ad19/renditions/cb71b5c650dce9b8b30c345a7c0d9173",
    "2b07ce9dfe204ac18a2eb5df26b10acc/revisions/2ed60c73306045e7989c3baace583162/renditions/9643968019ab25fded2c3e9f03bb8b3d",
    "5a9917efd52e4a2695e95f32b0aa91b1/revisions/07b6057349a145daab8b5435fbf80606/renditions/b58e41557db964d94c0af63f432970d7",
    "ab8e8483f41e4a36a25e90cda5ef0330/revisions/c303d3f11f9f400a9b91279400049b5d/renditions/0d3cb7f1ef293acbd6773d4555f6cd75",
    "b0d9b742a53f4dcf9c1b1a8bc983531d/revisions/3f5fe1e60bc04f32858da9a10fc2ceb7/renditions/2198c3f9ac82e9faa84c8ad05ca1892d",
    "79015bccaf6a42d893d96fa93baeed51/revisions/b1c2dfc43ed742268212ae0b4fc159c4/renditions/2752dfd55d249664dd9896db84030115",
    "cb5117181a864d158454ed1612b4742d/revisions/f877679971654abea78eb02fd46b9ec8/renditions/ade9745360041492b08e368c0b198a10",
    "cf19a20c2b444841b7296a9928b97a2a/revisions/44f675211e4742fab4c1552c3f0f4e61/renditions/1d933033ea4a15115523cb12e5dde8e9",
    "30718d3b0e85490aa47ea2e30084315a/revisions/23c92f1be88e40728fa07f17c5d19a94/renditions/f8a41596e639b2af2bdf05c9d1e224ed",
    "fa45c11fe01d4c06bed6e856e3963313/revisions/8b1a0ced85a4445fa80880d7a9022438/renditions/20fc1731bf4ae16709dd6c2bc4c1e9fd",
    "fef17c2b678a444d8146f8060ee1dba5/revisions/04742a584ec54d509d3fe22d5e57ec28/renditions/c8aaf89145cec6e198d275406522b718",
    "216b0f5e376a4e92b3fd0935bc9490fd/revisions/fee80f43021f4119859e3d206ba907a0/renditions/9f41b858ba1f0d189b49272e02cbaf99",
    "2387fda1347946c09a6d7600c3fda3d2/revisions/b0b841d14ab74b58a225549bba9cc212/renditions/49c642d4d574086b0e256045c2701cb2",
    "496f100d37ca405994c1f9ca7f8f3789/revisions/ca653057919a43dc9d96bbc88571945d/renditions/b9520753cc72aada35f1a82e94768cc3",
    "618152bb159947f3a7ff746b2604e4fd/revisions/fedb4a2be07544909f134baaab259e2c/renditions/1a23498d37fd62be0ef096f270e9babe",
    "6ed63f5929754ca2b00c4d449be1955a/revisions/b5e04c59e366474f907936d5161c810c/renditions/e155a7a9bbbf001d30cfe5b0f151ff81",
    "5db54d636a144b3e8923b4d84de4f6fe/revisions/d4607e2ed162407f86f26f1d72d7e73b/renditions/f28eb0ad55026372be14a48d488f2d52",
    "d6191d23045b444eb6d4779fed5bf52d/revisions/674a6a0b134c4c818ce7683750fe033a/renditions/178c0dd0812ce2246198b6da025f65e6",
    "9d9e8abf2d7e4d79926cabd87bac9ce2/revisions/d45f779e775a42cf822ef419016f2554/renditions/73dccbf366def95f0ecb862022669f87",
    "53c0fa0fdbe84f5bad5693bb028fd40c/revisions/63c8e1f440134513843cb2783a58715c/renditions/42290eb6ebdb0640ab31783edd79dc98",
    "346817f7426d481f9025b7915e2b80ef/revisions/b39568d8424f4ab19aa3b84d41cb3e5a/renditions/1bac145a30f569c74220e1c30f71640f",
    "60dff2ad01284386960ffbf296dcc3a0/revisions/f35fab0fe075405daca955116cf8e845/renditions/7495beffd2794dfef02948fe5eaa57e6",
    "15de9253f2894234be45d5bdcd7b3a32/revisions/bfbc3d408dc941aa9eefda3ee9ccb3da/renditions/7cf70712d0e5fba212d16982128f14eb",
    "f996547182b445c29a832abc4bea7b7b/revisions/012112be2fbd48d2839baf4ceaa1b445/renditions/fd5088ee97e305d6bbc1fc82804ae825",
    "6d7e13b786e64b3b8aeb7f9615379156/revisions/07dc941e16704d8a9ab855fdba86e99e/renditions/e5295c62b3b36ce5d1df7fee3b2ff01d",
    "530765cf710c48769ef1db1942e0aa5a/revisions/2c96e73a494d474b86250c1de10afe95/renditions/14a55fef278febb72ba740dfe2a2d2ad",
    "9f7ccc64a81f45b1b3367cf7cddce2ca/revisions/470c934f699a4442b02a085969017255/renditions/d2de70930b65c0ea8efdbaac12615c50",
    "642aed21b1b3409991f14879e423122e/revisions/55179ce10a6d4085b1f2b9797ae80d56/renditions/6c5af8d44762957022e02504f89a8785",
    "f40af3568947415dbf5ebb69e0613a4f/revisions/f7daad9c671641309cee85bc0a29ea4b/renditions/d11fd8730c05ee9fcdda0358cc4b31d2",
    "a8c70107e60e41fab05c14f322ecae69/revisions/ab419199ac674966bef92e861247f7f3/renditions/19a9a97a2a6ad2ca94aaf8f5fd012dd6",
    "1c25852d8b944ab8b0c89b2d7393d581/revisions/8b262b0847934eaa9a8e6b00f2af3acb/renditions/224de789966cb844b508701043fd79ce",
    "5eaa5a80281643599f5964ac3a338fd6/revisions/e89a6d71fde24b3bab4702bd6dba6271/renditions/77cb9eb79ecfa7af54217a5029534120",
    "cf75969b74254af2b5d1e7a3d311e737/revisions/dfb83de131ba4bf9b0a454562b3fab0c/renditions/381a5b35e43147017b29f5b120d46160",
    "a8650637b29240b0859e56acfb3b3aa6/revisions/7a257144cb54424793ef5887cac51da4/renditions/71baa63ec31287189bbaf2581c2b0df9",
    "1c00193c9c4246348eec1d2d4de18420/revisions/86b5eb83673045b9856b4614793f31d0/renditions/afcccebfbb470b060cb1dd5aba8605df",
    "2f82d9db60df4382934ac9d926e05552/revisions/790ee9df511443798fa4fb25f9885e2a/renditions/3a1990f9ae51af5a15f40341f5a2fe8d",
    "53a5518222014f6391b1003147651e33/revisions/da1a5bfefc5f4880b2b638e1ef7d764c/renditions/12e06439c1584b733b2c5971139200ec",
    "16c3ef519cf54380b2d85543ac8558b7/revisions/1d9b60276f3742ebb0b91226001f5e18/renditions/d418abaec00a649ee1f11ef4d6cee43d",
    "a957ec6cc4db4b8f851ad037e81eb886/revisions/563c9b3d936f48b1aec8b1d9f094b87e/renditions/c115fc344decc585ff5998602da26789",
    "c065e3140a9345b8b25e0080f5ac600e/revisions/d136f6581bcc436fa9b44aa3156cf79b/renditions/541353120aaa47fc22cd8cea6300953c",
    "816d572391b949499e3f70c75168a7c0/revisions/edfc72b834e34e5abb8a8bcdbfe030bf/renditions/dfd3a29376160f3d156a55bb93780907",
    "94c3b077acb54b4e953781d7998d4ee6/revisions/1085433febf94eb98a8a1527a58e5287/renditions/3cf313f1f0bfa6e7229f3403155bfdfc",
    "070b2bb7e13247adbd276f90ac493884/revisions/3005e5dcf7764ad0a7f6e0d8a2c73b9a/renditions/1d73143194a84c0661c76857816282bf",
    "e36e70adb0cb4c63936d72d840da8929/revisions/67e3322eadbc474281d67fab8dc61579/renditions/b254c283bb8e434d8e1820254866f079",
    "1cdba531efc84a43997ace60fe5697fc/revisions/95d1847982044b9c8580e4a0743df8fe/renditions/d8aa8da2bc7350d001f0ec13d3cc7225",
    "60c2182748984966b71c8fde09f99168/revisions/c906fc21ca0344d685248816b05a6f25/renditions/849007f46f97cc7ca4ab46d14ccf2743",
    "e514663c67b645bfbee415bfcc33c599/revisions/0d3ae14e94c14c32b38771e19455420c/renditions/ec24988dd2c21064d538a5e62eb1c161",
    "15a3757889144f91b788fcaa80de639e/revisions/e818b103083243399f169e4e23cd09a6/renditions/11547330723ed5a4b96d9a9d3e6bcb9d",
    "6e89d4c159c44cbb8ebc97e32df50204/revisions/9a50e974e90740538aae940a51bc2bbf/renditions/269254e60022092eea552f6c21d34581",
    "d8c4ced522cc485eb514592c8049ee4b/revisions/8435e21bd3874302b5663d502d0c1e3b/renditions/bb301b4a99c619bef8a19a428d312515",
    "c15d9d92f6a94bc180d92585b3ec8762/revisions/fb0175746a99490ebc8c59a75b91f9e4/renditions/69b0c43a588fa0fd4232ecb226b48499",
    "e4a534d9aa7b483f85f97e593531b4c4/revisions/4cf70173544a4783a83aedf054641f51/renditions/29662188d64faa750c374c24a3249de0",
    "5218c1f66ed242cabb78d2b17463a422/revisions/197e3826f78d46a7996d120d6102bcbc/renditions/f5925107931dac68235089ac0b0c309a",
    "50e0c89bb5cc424c910509fee138640d/revisions/1cccb519e3824b5790d38dc34a1d736b/renditions/962061a02901d89b16838a8a5111c5ec",
    "fbf5696f45044c5f959ec2ad4b1fc597/revisions/2b21793054294e92bcf18430a250ec02/renditions/e5556fc34740f83ef4f4f28911dacddf",
    "d0f070115eb24d89a69956a8241f5aea/revisions/735cd307cb014e1293fee6310ec9ae12/renditions/d49be5d519b38b2b1ad6848f47318808",
    "c223553761e546f6a005b9ea020d5fa7/revisions/5eb748ed6e8d47cb8e1bd28b9be6aa2a/renditions/de460738897a554de1ed614a410acbd1",
    "c46586c5b77b43808c1fe8597ab74fa1/revisions/63d492069abf4d489ae5ad48cde4a82e/renditions/445139a3afc0c8b78482002b81a913a1",
    "4ee7f3dc6c6049e5954ff7d90b066454/revisions/8a14f91e7cab4d90af71ccc027fdf824/renditions/727adc63ef1798eb453928ef754bbdad",
    "4d2dd8343d4a4cc783397c6fa70463db/revisions/910c39562599497096734242293f2cf2/renditions/990d6d2bf61b6ccfda3a20522603fd35",
    "be4a8d11d99c45f98119f7267a0d7e02/revisions/92e2f81413334e7286455da7a53e8f2d/renditions/7a63f96203384d9bdb46d7ccaeafc81b",
    "9d7810f41d594f28a4d7de7479f0c1f0/revisions/eb2537f0b84a4849adf32bb257ac8f09/renditions/c3fc7ef359b46f6f42fc4be22d9c1a1c",
    "80bbbd26c3de4534a7aac37f5d50f1d1/revisions/cad15f41714d4fe09b589ea7ca79f35c/renditions/743ce698d1f02a3bda1dae99272b19a9",
    "1c35a668fcb14449a612d854b57d6195/revisions/8b89b9ca925c4a098a412bee802f7f20/renditions/6a74623dcd7bc51ab0924e6acd579b9a"
]

var locations = [
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Charlottesville, VA",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Washington D.C.",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
    "Valencia, ES",
]

swapImage();