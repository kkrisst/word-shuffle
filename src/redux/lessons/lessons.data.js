const LESSONS_DATA = [
  {
    id: 1,
    title: 'Going shopping',
    bullet: 'I.',
    words: [
      {
        wordId: 1,
        word: 'ma'
      },
      {
        wordId: 2,
        word: 'megyek'
      },
      {
        wordId: 3,
        word: 'boltba'
      }
    ],
    description: 'In this lesson we focus on understanding the main principle of Hungarian word order ...',
    items: [
      {
        id: 1,
        question: 'Where are you going to go today?',
        correct_orders: ['132', '321', '32x']
      },
      {
        id: 2,
        question: 'When are you going shopping?',
        correct_orders: ['123', '312']
      },
      {
        id: 3,
        question: 'Are you going to go shopping today?',
        correct_orders: ['213']
      },
    ]
  },
  {
    id: 2,
    title: 'The most popular fruit!',
    bullet: 'II.',
    words: [
      {
        wordId: 1,
        word: 'szeretem'
      },
      {
        wordId: 2,
        word: 'az'
      },
      {
        wordId: 3,
        word: 'almát'
      }
    ],
    description: 'This lessons is an extra practice for ...',
    items: [
      {
        id: 1,
        question: 'Where are you going to go today?',
        correct_orders: ['132', '321']
      },
      {
        id: 2,
        question: 'When are you going shopping?',
        correct_orders: ['123', '312']
      },
      {
        id: 3,
        question: 'Are you going to go shopping today?',
        correct_orders: ['213']
      },
    ]
  },
];

export default LESSONS_DATA;