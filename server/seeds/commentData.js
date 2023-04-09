const comments = [
  {
    id: '294e1f78-335b-42b4-9c20-e86bb45e82de',
    userId: '87a4de77-a681-4ee3-a14c-6f888106c534',
    postId: '6e6ad08d-57aa-45af-bbe8-df5ad0046e5e',
    firstName: 'Cari',
    lastName: 'Gale',
    location: 'Sardasht',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    picturePath: 'http://dummyimage.com/222x100.png/5fa2dd/ffffff',
    userPicturePath: 'http://dummyimage.com/102x100.png/dddddd/000000',
    likes: 2019,
  },
  {
    id: '8477ebe5-b11b-4c0c-bc6c-3662a6e57fb7',
    userId: 'ef0bf693-2065-4c44-a083-a892d3e80c00',
    postId: '03bcef2c-1572-4523-937c-932a81219612',
    firstName: 'Brigitta',
    lastName: 'Keesman',
    location: 'Damiku',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    picturePath: 'http://dummyimage.com/113x100.png/5fa2dd/ffffff',
    userPicturePath: 'http://dummyimage.com/175x100.png/ff4444/ffffff',
    likes: 9851,
  },
  {
    id: '69ff055a-a889-4d2e-8e7a-737fdb6665a0',
    userId: 'f2d2a549-af1a-4acb-8d2a-01cc8c93815f',
    postId: '6acc3123-8a76-4cbb-9b22-34a2bf2bf1be',
    firstName: 'Malcolm',
    lastName: 'Surmeyer',
    location: 'Minh Long',
    description: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picturePath: 'http://dummyimage.com/131x100.png/ff4444/ffffff',
    userPicturePath: 'http://dummyimage.com/185x100.png/dddddd/000000',
    likes: 852,
  },
  {
    id: '1d3b77de-c4d5-4722-b624-de7bf85f1bcf',
    userId: 'ab7e37eb-4957-4054-9aff-3784b5e080c4',
    postId: '01c38ab5-72f5-46f9-81e9-39e5a7c68697',
    firstName: 'Danny',
    lastName: 'Quare',
    location: 'Aramecina',
    description: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
    picturePath: 'http://dummyimage.com/130x100.png/ff4444/ffffff',
    userPicturePath: 'http://dummyimage.com/104x100.png/5fa2dd/ffffff',
    likes: 8462,
  },
  {
    id: '08a6ba11-a299-4f95-a391-8fe274b42eb7',
    userId: '57f0ff58-8948-46d3-8b05-f3525dca4339',
    postId: 'c1ced068-91bb-488d-b4a0-33c6ec5d2e9f',
    firstName: 'Colman',
    lastName: 'Nend',
    location: 'Rossosh’',
    description: 'Morbi ut odio.',
    picturePath: 'http://dummyimage.com/158x100.png/cc0000/ffffff',
    userPicturePath: 'http://dummyimage.com/173x100.png/dddddd/000000',
    likes: 1301,
  },
  {
    id: '58f5c9b3-91bd-4d96-b1be-85c9de86141f',
    userId: 'f50c8568-6209-4640-ae2b-404f26e6f00f',
    postId: '336e54ca-885b-4d24-87b5-c72f702eb1c0',
    firstName: 'Ruth',
    lastName: 'Eschalotte',
    location: 'Rybnoye',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    picturePath: 'http://dummyimage.com/198x100.png/dddddd/000000',
    userPicturePath: 'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
    likes: 4140,
  },
  {
    id: '4a0ad99d-7146-43ce-805a-b1fa2bdcb177',
    userId: '3ceecb4a-0a51-446d-b304-43fbe5e69287',
    postId: '2e7fdc6c-446a-46d9-9eca-c44c51cc1de1',
    firstName: 'Malynda',
    lastName: 'Screaton',
    location: 'Kruisfontein',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    picturePath: 'http://dummyimage.com/140x100.png/5fa2dd/ffffff',
    userPicturePath: 'http://dummyimage.com/162x100.png/dddddd/000000',
    likes: 4493,
  },
  {
    id: 'ab6d139f-2f3f-48f2-af0e-b6893dd0442a',
    userId: '13470220-db6e-4417-9fde-6c9dfb5d6f4f',
    postId: '380cf94d-7870-4c57-82fb-00674435c585',
    firstName: 'Guilbert',
    lastName: 'Phillpot',
    location: 'Šmartno pri Litiji',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    picturePath: 'http://dummyimage.com/145x100.png/ff4444/ffffff',
    userPicturePath: 'http://dummyimage.com/230x100.png/cc0000/ffffff',
    likes: 5896,
  },
  {
    id: '701f5454-06c7-4ead-8235-5e6a73efd172',
    userId: '2ce5e4dd-4f7c-405e-95e4-e04382e0f4f6',
    postId: '69187e9d-4547-4a4f-b138-eb33888d544e',
    firstName: 'Boote',
    lastName: 'Bennen',
    location: 'Sarzedo',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    picturePath: 'http://dummyimage.com/132x100.png/cc0000/ffffff',
    userPicturePath: 'http://dummyimage.com/244x100.png/cc0000/ffffff',
    likes: 4620,
  },
  {
    id: 'cfc9c2b9-2be7-4c3d-8418-d5386d2fc023',
    userId: '25f11e2c-1463-4a4c-8dc7-a4c8fc7472b2',
    postId: '590dc44f-2785-4bc7-8b68-9cd3a2706419',
    firstName: 'Michel',
    lastName: 'Muckart',
    location: 'Vallenar',
    description: 'Suspendisse accumsan tortor quis turpis. Sed ante.',
    picturePath: 'http://dummyimage.com/222x100.png/dddddd/000000',
    userPicturePath: 'http://dummyimage.com/157x100.png/dddddd/000000',
    likes: 5203,
  },
];

module.exports = comments;
