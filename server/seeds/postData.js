const posts = [
  {
    userId: '4ce639ee-07e4-4c81-8a64-d8c9cf468f0e',
    firstName: 'Louisa',
    lastName: 'Isaksen',
    location: 'Titay',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    picturePath: 'http://dummyimage.com/196x100.png/dddddd/000000',
    userPicturePath: 'http://dummyimage.com/170x100.png/dddddd/000000',
    likes: 817,
    comments: [],
  },
  {
    userId: 'c7e183dc-318d-4ce3-b199-81cf9c501ff4',
    firstName: 'Wilmar',
    lastName: 'Kennicott',
    location: 'Máncora',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    picturePath: 'http://dummyimage.com/250x100.png/cc0000/ffffff',
    userPicturePath: 'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
    likes: 315,
    comments: [],
  },
  {
    userId: 'c59b4afd-e828-4ff9-afbc-46a32bc9f0d6',
    firstName: 'Judon',
    lastName: 'Ready',
    location: 'Argentan',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    picturePath: 'http://dummyimage.com/238x100.png/dddddd/000000',
    userPicturePath: 'http://dummyimage.com/107x100.png/cc0000/ffffff',
    likes: 253,
    comments: [],
  },
  {
    userId: '45d54964-3c49-4ed8-9f12-49b819fe8372',
    firstName: 'Lannie',
    lastName: 'Chapman',
    location: 'Mariara',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    picturePath: 'http://dummyimage.com/187x100.png/ff4444/ffffff',
    userPicturePath: 'http://dummyimage.com/230x100.png/ff4444/ffffff',
    likes: 924,
    comments: [],
  },
  {
    userId: '47514823-12e1-4a5d-b340-8c9dd0033778',
    firstName: 'Tomlin',
    lastName: 'Corryer',
    location: 'Pasirgaru',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    picturePath: 'http://dummyimage.com/108x100.png/ff4444/ffffff',
    userPicturePath: 'http://dummyimage.com/122x100.png/dddddd/000000',
    likes: 817,
    comments: [],
  },
  {
    userId: '8c1cb8cb-1e50-464c-bedb-32d9a6ae4314',
    firstName: 'Renate',
    lastName: 'Egdal',
    location: 'Tomilino',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    picturePath: 'http://dummyimage.com/169x100.png/ff4444/ffffff',
    userPicturePath: 'http://dummyimage.com/182x100.png/cc0000/ffffff',
    likes: 921,
    comments: [],
  },
  {
    userId: '0e7f41bc-822b-46a9-8c8e-06244aae8a78',
    firstName: 'Devora',
    lastName: 'Hearson',
    location: 'Lalmanirhat',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    picturePath: 'http://dummyimage.com/217x100.png/cc0000/ffffff',
    userPicturePath: 'http://dummyimage.com/182x100.png/ff4444/ffffff',
    likes: 429,
    comments: [],
  },
  {
    userId: '8da98341-10ff-4436-a63d-aecb59f13493',
    firstName: 'Pam',
    lastName: 'Tames',
    location: 'Paris 10',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    picturePath: 'http://dummyimage.com/227x100.png/cc0000/ffffff',
    userPicturePath: 'http://dummyimage.com/163x100.png/dddddd/000000',
    likes: 150,
    comments: [],
  },
  {
    userId: 'b66e5f00-cc34-415c-844c-a7501df2b005',
    firstName: 'Maddalena',
    lastName: 'Aveling',
    location: 'Waco',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    picturePath: 'http://dummyimage.com/222x100.png/dddddd/000000',
    userPicturePath: 'http://dummyimage.com/113x100.png/ff4444/ffffff',
    likes: 951,
    comments: [],
  },
  {
    userId: '2cb4f8e7-85d0-43f1-919e-99121940ad53',
    firstName: 'Bernadene',
    lastName: 'Henighan',
    location: 'Askim',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    picturePath: 'http://dummyimage.com/165x100.png/ff4444/ffffff',
    userPicturePath: 'http://dummyimage.com/194x100.png/cc0000/ffffff',
    likes: 632,
    comments: [],
  },
];

module.exports = posts;
