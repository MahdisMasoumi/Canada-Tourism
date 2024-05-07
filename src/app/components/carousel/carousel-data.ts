import { iAttractions } from '../../interfaces/attractions';

export const description: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dolor urna, in commodo ipsum porttitor vitae. Fusce venenatis lectus eu gravida feugiat. Aliquam sollicitudin mollis facilisis. Curabitur mauris nisi, pellentesque vitae metus non, tincidunt eleifend odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ligula velit, semper id nibh at, sodales rutrum felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br> Donec suscipit velit in augue tempor, non porttitor sapien placerat. Nullam luctus magna eu diam posuere pretium. Donec a imperdiet ipsum. Donec elementum odio non tincidunt varius. Mauris vel luctus magna. Nullam sed pretium sapien. Etiam elementum volutpat nunc in tincidunt. Ut consectetur ante vel suscipit iaculis. Proin sit amet dignissim lacus, sed dignissim odio. <br><br> Quisque ex orci, varius eu vehicula eget, sollicitudin id magna. Vestibulum rhoncus, justo ac rhoncus ultrices, sapien lectus scelerisque neque, sed laoreet neque lectus vitae urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Ut tristique sodales malesuada. Curabitur aliquam maximus tellus, ut ultrices purus tristique sagittis. Aliquam erat volutpat. Mauris egestas hendrerit quam, at blandit nulla elementum vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus velit nisl.';

export const attractionsData: iAttractions[] = [
  {
    city_name: 'Vancouver',
    attractions: [
      {
        src: 'assets/cities/vancouver/capilano.jpg',
        title: 'Capilano Suspension Bridge',
        description: description,
      },
      {
        src: 'assets/cities/vancouver/aq.jpg',
        title: 'Vancouver Aquarium',
        description: description,
      },
      {
        src: 'assets/cities/vancouver/stanley.webp',
        title: 'Stanley Park',
        description: description,
      },
      {
        src: 'assets/cities/vancouver/Fly-Over.webp',
        title: 'FlyOver Canada',
        description: description,
      },
    ],
  },
];
