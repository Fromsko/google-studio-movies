/**
 * Represents a movie, including its title, description, cast, and release date.
 */
export interface Movie {
  /**
   * The unique identifier of the movie.
   */
  id: string;
  /**
   * The title of the movie.
   */
  title: string;
  /**
   * A brief description of the movie.
   */
  description: string;
  /**
   * The list of actors in the movie.
   */
  cast: string[];
  /**
   * The release date of the movie.
   */
  releaseDate: string;
  /**
   * The URL of the movie stream.
   */
  streamUrl: string;
  /**
   * The URL of the movie poster.
   */
  imageUrl: string;

  /**
   * The genre of the movie.
   */
  genre: string;
}

/**
 * Asynchronously retrieves a list of movies.
 *
 * @returns A promise that resolves to an array of Movie objects.
 */
export async function getMovies(): Promise<Movie[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      id: '1',
      title: 'Oppenheimer',
      description: 'During World War II, Lt. Gen. Leslie Groves appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists work for years in a secret laboratory in Los Alamos, New Mexico, developing the first atomic bomb.',
      cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
      releaseDate: '2023-07-21',
      streamUrl: 'https://example.com/oppenheimer',
      imageUrl: 'https://i.pravatar.cc/300?id=1',
      genre: 'Drama',
    },
    {
      id: '2',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
      releaseDate: '2010-07-16',
      streamUrl: 'https://example.com/inception',
      imageUrl: 'https://i.pravatar.cc/300?id=2',
      genre: 'Sci-Fi',
    },
    {
      id: '3',
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      releaseDate: '1994-09-23',
      streamUrl: 'https://example.com/shawshank',
      imageUrl: 'https://i.pravatar.cc/300?id=3',
      genre: 'Drama',
    },
    {
      id: '4',
      title: 'The Godfather',
      description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
      cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      releaseDate: '1972-03-24',
      streamUrl: 'https://example.com/godfather',
      imageUrl: 'https://i.pravatar.cc/300?id=4',
      genre: 'Crime',
    },
    {
      id: '5',
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      releaseDate: '2008-07-18',
      streamUrl: 'https://example.com/darkknight',
      imageUrl: 'https://i.pravatar.cc/300?id=5',
      genre: 'Action',
    },
    {
      id: '6',
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and a pair of diner bandits intertwine in four tales of violence and redemption.',
      cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
      releaseDate: '1994-10-14',
      streamUrl: 'https://example.com/pulpfiction',
      imageUrl: 'https://i.pravatar.cc/300?id=6',
      genre: 'Crime',
    },
    {
      id: '7',
      title: 'Schindler\'s List',
      description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      cast: ['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes'],
      releaseDate: '1993-12-15',
      streamUrl: 'https://example.com/schindlerslist',
      imageUrl: 'https://i.pravatar.cc/300?id=7',
      genre: 'Drama',
    },
    {
      id: '8',
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
      cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
      releaseDate: '1994-07-06',
      streamUrl: 'https://example.com/forrestgump',
      imageUrl: 'https://i.pravatar.cc/300?id=8',
      genre: 'Drama',
    },
    {
      id: '9',
      title: 'Fight Club',
      description: 'An insomniac office worker and a carefree soap maker form an underground fight club that evolves into something much, much more.',
      cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
      releaseDate: '1999-10-15',
      streamUrl: 'https://example.com/fightclub',
      imageUrl: 'https://i.pravatar.cc/300?id=9',
      genre: 'Drama',
    },
    {
      id: '10',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      cast: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
      releaseDate: '2001-12-19',
      streamUrl: 'https://example.com/lotr',
      imageUrl: 'https://i.pravatar.cc/300?id=10',
      genre: 'Fantasy',
    },
    {
      id: '11',
      title: 'Goodfellas',
      description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
      cast: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'],
      releaseDate: '1990-09-19',
      streamUrl: 'https://example.com/goodfellas',
      imageUrl: 'https://i.pravatar.cc/300?id=11',
      genre: 'Crime',
    },
    {
      id: '12',
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      releaseDate: '1999-03-31',
      streamUrl: 'https://example.com/matrix',
      imageUrl: 'https://i.pravatar.cc/300?id=12',
      genre: 'Sci-Fi',
    },
    {
      id: '13',
      title: 'Seven Samurai',
      description: 'A poor village under attack by bandits recruits seven samurai to defend them.',
      cast: ['Toshirô Mifune', 'Takashi Shimura', 'Keiko Tsushima'],
      releaseDate: '1954-04-26',
      streamUrl: 'https://example.com/sevensamurai',
      imageUrl: 'https://i.pravatar.cc/300?id=13',
      genre: 'Action',
    },
    {
      id: '14',
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      description: 'After the rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.',
      cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
      releaseDate: '1980-06-20',
      streamUrl: 'https://example.com/empirestrikesback',
      imageUrl: 'https://i.pravatar.cc/300?id=14',
      genre: 'Sci-Fi',
    },
    {
      id: '15',
      title: 'One Flew Over the Cuckoo\'s Nest',
      description: 'A new patient in a mental institution disrupts the routine and shakes up the lives of the other patients.',
      cast: ['Jack Nicholson', 'Louise Fletcher', 'Danny DeVito'],
      releaseDate: '1975-11-19',
      streamUrl: 'https://example.com/cuckoosnest',
      imageUrl: 'https://i.pravatar.cc/300?id=15',
      genre: 'Drama',
    },
    {
      id: '16',
      title: 'City Lights',
      description: 'With the help of a sympathetic millionaire, a tramp falls in love with a beautiful blind girl and sets out to get money for an operation to restore her sight.',
      cast: ['Charles Chaplin', 'Virginia Cherrill', 'Florence Lee'],
      releaseDate: '1931-01-30',
      streamUrl: 'https://example.com/citylights',
      imageUrl: 'https://i.pravatar.cc/300?id=16',
      genre: 'Comedy',
    },
    {
      id: '17',
      title: 'Life Is Beautiful',
      description: 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of ingenuity, hope, and humor to protect his son from the dangers of the concentration camp they\'re in.',
      cast: ['Roberto Benigni', 'Nicoletta Braschi', 'Giorgio Cantarini'],
      releaseDate: '1997-12-20',
      streamUrl: 'https://example.com/lifeisbeautiful',
      imageUrl: 'https://i.pravatar.cc/300?id=17',
      genre: 'Comedy',
    },
    {
      id: '18',
      title: 'It\'s a Wonderful Life',
      description: 'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.',
      cast: ['James Stewart', 'Donna Reed', 'Lionel Barrymore'],
      releaseDate: '1946-12-20',
      streamUrl: 'https://example.com/wonderfulife',
      imageUrl: 'https://i.pravatar.cc/300?id=18',
      genre: 'Drama',
    },
    {
      id: '19',
      title: 'Spirited Away',
      description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
      cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
      releaseDate: '2001-07-20',
      streamUrl: 'https://example.com/spiritedaway',
      imageUrl: 'https://i.pravatar.cc/300?id=19',
      genre: 'Animation',
    },
    {
      id: '20',
      title: 'Saving Private Ryan',
      description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
      cast: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
      releaseDate: '1998-07-24',
      streamUrl: 'https://example.com/savingryan',
      imageUrl: 'https://i.pravatar.cc/300?id=20',
      genre: 'Action',
    },
    {
      id: '21',
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
      releaseDate: '2014-11-07',
      streamUrl: 'https://example.com/interstellar',
      imageUrl: 'https://i.pravatar.cc/300?id=21',
      genre: 'Sci-Fi',
    },
    {
      id: '22',
      title: 'Parasite',
      description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      cast: ['Song Kang-ho', 'Choi Woo-shik', 'Park So-dam'],
      releaseDate: '2019-11-08',
      streamUrl: 'https://example.com/parasite',
      imageUrl: 'https://i.pravatar.cc/300?id=22',
      genre: 'Comedy',
    },
    {
      id: '23',
      title: 'The Green Mile',
      description: 'The lives of guards on a men\'s death row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
      cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'],
      releaseDate: '1999-12-10',
      streamUrl: 'https://example.com/greenmile',
      imageUrl: 'https://i.pravatar.cc/300?id=23',
      genre: 'Drama',
    },
    {
      id: '24',
      title: 'The Lion King',
      description: 'Lion cub and future king Simba searches for his identity. His adventurous childhood is overshadowed by the death of his father, Mufasa, and his uncle Scar\'s scheming to take over the Pride Lands.',
      cast: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
      releaseDate: '1994-06-24',
      streamUrl: 'https://example.com/lionking',
      imageUrl: 'https://i.pravatar.cc/300?id=24',
      genre: 'Animation',
    },
    {
      id: '25',
      title: 'Back to the Future',
      description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
      cast: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
      releaseDate: '1985-07-03',
      streamUrl: 'https://example.com/backtothefuture',
      imageUrl: 'https://i.pravatar.cc/300?id=25',
      genre: 'Sci-Fi',
    },
    {
      id: '26',
      title: 'Gladiator',
      description: 'A Roman General is betrayed and his family murdered by an ambitious prince who assumes the throne. Forced into slavery, he rises through the ranks as a gladiator to seek revenge against the emperor.',
      cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
      releaseDate: '2000-05-05',
      streamUrl: 'https://example.com/gladiator',
      imageUrl: 'https://i.pravatar.cc/300?id=26',
      genre: 'Action',
    },
    {
      id: '27',
      title: 'Titanic',
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
      releaseDate: '1997-12-19',
      streamUrl: 'https://example.com/titanic',
      imageUrl: 'https://i.pravatar.cc/300?id=27',
      genre: 'Romance',
    },
    {
      id: '28',
      title: 'The Departed',
      description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
      cast: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
      releaseDate: '2006-10-06',
      streamUrl: 'https://example.com/departed',
      imageUrl: 'https://i.pravatar.cc/300?id=28',
      genre: 'Crime',
    },
    {
      id: '29',
      title: 'Whiplash',
      description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an abusive instructor who will stop at nothing to realize a student\'s potential.',
      cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'],
      releaseDate: '2014-10-10',
      streamUrl: 'https://example.com/whiplash',
      imageUrl: 'https://i.pravatar.cc/300?id=29',
      genre: 'Drama',
    },
    {
      id: '30',
      title: 'The Intouchables',
      description: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caretaker.',
      cast: ['François Cluzet', 'Omar Sy', 'Anne Le Ny'],
      releaseDate: '2011-11-02',
      streamUrl: 'https://example.com/intouchables',
      imageUrl: 'https://i.pravatar.cc/300?id=30',
      genre: 'Comedy',
    },
    {
      id: '31',
      title: 'The Pianist',
      description: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
      cast: ['Adrien Brody', 'Thomas Kretschmann', 'Frank Finlay'],
      releaseDate: '2002-12-27',
      streamUrl: 'https://example.com/pianist',
      imageUrl: 'https://i.pravatar.cc/300?id=31',
      genre: 'Drama',
    },
    {
      id: '32',
      title: 'Casablanca',
      description: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
      cast: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid'],
      releaseDate: '1942-01-23',
      streamUrl: 'https://example.com/casablanca',
      imageUrl: 'https://i.pravatar.cc/300?id=32',
      genre: 'Romance',
    },
    {
      id: '33',
      title: 'The Shining',
      description: 'A family heads to an isolated hotel for the winter where an evil and sinister presence influences the father into violence, while his psychic son sees horrific premonitions from both past and future.',
      cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
      releaseDate: '1980-05-23',
      streamUrl: 'https://example.com/shining',
      imageUrl: 'https://i.pravatar.cc/300?id=33',
      genre: 'Horror',
    },
    {
      id: '34',
      title: 'Psycho',
      description: 'A Phoenix secretary embezzles forty thousand dollars from her employer\'s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.',
      cast: ['Anthony Perkins', 'Vera Miles', 'John Gavin'],
      releaseDate: '1960-09-08',
      streamUrl: 'https://example.com/psycho',
      imageUrl: 'https://i.pravatar.cc/300?id=34',
      genre: 'Horror',
    },
    {
      id: '35',
      title: 'Rear Window',
      description: 'A wheelchair-bound photographer spies on his neighbors from his Greenwich Village apartment window and becomes convinced that one of them has committed murder.',
      cast: ['James Stewart', 'Grace Kelly', 'Wendell Corey'],
      releaseDate: '1954-09-01',
      streamUrl: 'https://example.com/rearwindow',
      imageUrl: 'https://i.pravatar.cc/300?id=35',
      genre: 'Thriller',
    },
    {
      id: '36',
      title: 'Memento',
      description: 'A man with short-term memory loss attempts to track down his wife\'s murderer.',
      cast: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano'],
      releaseDate: '2000-09-05',
      streamUrl: 'https://example.com/memento',
      imageUrl: 'https://i.pravatar.cc/300?id=36',
      genre: 'Mystery',
    },
    {
      id: '37',
      title: 'The Prestige',
      description: 'Two stage magicians engage in a competitive battle of tricks, creating illusions that have fatal consequences.',
      cast: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson'],
      releaseDate: '2006-10-20',
      streamUrl: 'https://example.com/prestige',
      imageUrl: 'https://i.pravatar.cc/300?id=37',
      genre: 'Mystery',
    },
    {
      id: '38',
      title: 'The Silence of the Lambs',
      description: 'A young F.B.I. trainee enlists the help of an incarcerated and manipulative cannibal killer to help catch another serial killer who skins his victims.',
      cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
      releaseDate: '1991-02-14',
      streamUrl: 'https://example.com/silenceofthelambs',
      imageUrl: 'https://i.pravatar.cc/300?id=38',
      genre: 'Thriller',
    },
    {
      id: '39',
      title: 'Arrival',
      description: 'A linguist is recruited by the military to assist in translating alien communications.',
      cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
      releaseDate: '2016-11-11',
      streamUrl: 'https://example.com/arrival',
      imageUrl: 'https://i.pravatar.cc/300?id=39',
      genre: 'Sci-Fi',
    },
    {
      id: '40',
      title: 'Blade Runner 2049',
      description: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
      cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
      releaseDate: '2017-10-06',
      streamUrl: 'https://example.com/bladerunner2049',
      imageUrl: 'https://i.pravatar.cc/300?id=40',
      genre: 'Sci-Fi',
    },
    {
      id: '41',
      title: 'Mad Max: Fury Road',
      description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
      cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
      releaseDate: '2015-05-15',
      streamUrl: 'https://example.com/madmaxfuryroad',
      imageUrl: 'https://i.pravatar.cc/300?id=41',
      genre: 'Action',
    },
    {
      id: '42',
      title: 'The Grand Budapest Hotel',
      description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious prime.',
      cast: ['Ralph Fiennes', 'Tony Revolori', 'Adrien Brody'],
      releaseDate: '2014-03-28',
      streamUrl: 'https://example.com/grandbudapesthotel',
      imageUrl: 'https://i.pravatar.cc/300?id=42',
      genre: 'Comedy',
    },
    {
      id: '43',
      title: 'In Bruges',
      description: 'Guilt-stricken after a job gone wrong, hitman Ray and his partner Ken hide out in Bruges, Belgium, as they await further orders from their ruthless boss.',
      cast: ['Colin Farrell', 'Brendan Gleeson', 'Ralph Fiennes'],
      releaseDate: '2008-02-08',
      streamUrl: 'https://example.com/inbruges',
      imageUrl: 'https://i.pravatar.cc/300?id=43',
      genre: 'Comedy',
    },
    {
      id: '44',
      title: 'Three Billboards Outside Ebbing, Missouri',
      description: 'A mother personally challenges the local authorities to find her daughter\'s murderer when they fail to do so.',
      cast: ['Frances McDormand', 'Woody Harrelson', 'Sam Rockwell'],
      releaseDate: '2017-11-10',
      streamUrl: 'https://example.com/threebillboards',
      imageUrl: 'https://i.pravatar.cc/300?id=44',
      genre: 'Crime',
    },
    {
      id: '45',
      title: 'No Country for Old Men',
      description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
      cast: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
      releaseDate: '2007-11-21',
      streamUrl: 'https://example.com/nocountry',
      imageUrl: 'https://i.pravatar.cc/300?id=45',
      genre: 'Crime',
    },
    {
      id: '46',
      title: 'There Will Be Blood',
      description: 'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the oil business.',
      cast: ['Daniel Day-Lewis', 'Paul Dano', 'Kevin J. O\'Connor'],
      releaseDate: '2007-12-26',
      streamUrl: 'https://example.com/therewillbeblood',
      imageUrl: 'https://i.pravatar.cc/300?id=46',
      genre: 'Drama',
    },
    {
      id: '47',
      title: 'Amelie',
      description: 'Amélie is a waitress in a Montmartre cafe, who decides to change the lives of those around her for the better. Her life changes when she discovers a long-lost tin box of childhood memorabilia hidden in her apartment.',
      cast: ['Audrey Tautou', 'Mathieu Kassovitz', 'Serge Merlin'],
      releaseDate: '2001-04-25',
      streamUrl: 'https://example.com/amelie',
      imageUrl: 'https://i.pravatar.cc/300?id=47',
      genre: 'Romance',
    },
    {
      id: '48',
      title: 'Inglourious Basterds',
      description: 'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen to spread fear throughout the Third Reich by scalping and brutally killing Nazis.',
      cast: ['Brad Pitt', 'Diane Kruger', 'Eli Roth'],
      releaseDate: '2009-08-21',
      streamUrl: 'https://example.com/inglouriousbasterds',
      imageUrl: 'https://i.pravatar.cc/300?id=48',
      genre: 'Action',
    },
    {
      id: '49',
      title: 'Reservoir Dogs',
      description: 'After a jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
      cast: ['Harvey Keitel', 'Tim Roth', 'Michael Madsen'],
      releaseDate: '1992-10-09',
      streamUrl: 'https://example.com/reservoirdogs',
      imageUrl: 'https://i.pravatar.cc/300?id=49',
      genre: 'Crime',
    },
    {
      id: '50',
      title: 'The Truman Show',
      description: 'An insurance salesman discovers his entire life is actually a reality TV show.',
      cast: ['Jim Carrey', 'Ed Harris', 'Laura Linney'],
      releaseDate: '1998-06-05',
      streamUrl: 'https://example.com/trumanshow',
      imageUrl: 'https://i.pravatar.cc/300?id=50',
      genre: 'Comedy',
    },
    {
      id: '51',
      title: 'Eternal Sunshine of the Spotless Mind',
      description: 'A couple undergo a procedure to erase each other from their memories when their relationship turns sour, but it is only through the process of loss that they discover what they had to lose in the first place.',
      cast: ['Jim Carrey', 'Kate Winslet', 'Kirsten Dunst'],
      releaseDate: '2004-03-19',
      streamUrl: 'https://example.com/eternalsunshine',
      imageUrl: 'https://i.pravatar.cc/300?id=51',
      genre: 'Romance',
    },
    {
      id: '52',
      title: 'Amadeus',
      description: 'The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was deeply jealous of Mozart\'s talent and claimed to have murdered him.',
      cast: ['F. Murray Abraham', 'Tom Hulce', 'Elizabeth Berridge'],
      releaseDate: '1984-09-19',
      streamUrl: 'https://example.com/amadeus',
      imageUrl: 'https://i.pravatar.cc/300?id=52',
      genre: 'Biography',
    },
  ];
}

/**
 * Asynchronously retrieves a movie by its ID.
 *
 * @param id The ID of the movie to retrieve.
 * @returns A promise that resolves to a Movie object, or null if not found.
 */
export async function getMovie(id: string): Promise<Movie | null> {
  // TODO: Implement this by calling an API.

  const movies = await getMovies();
  return movies.find((movie) => movie.id === id) || null;
}

/**
 * Asynchronously searches for movies by title, actor, or genre.
 *
 * @param query The search query.
 * @returns A promise that resolves to an array of Movie objects that match the query.
 */
export async function searchMovies(query: string): Promise<Movie[]> {
  // TODO: Implement this by calling an API.

  const movies = await getMovies();
  const lowerCaseQuery = query.toLowerCase();
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerCaseQuery) ||
    movie.cast.some((actor) => actor.toLowerCase().includes(lowerCaseQuery)) ||
    movie.genre.toLowerCase().includes(lowerCaseQuery)
  );
}
