//Lite tietokanta sovellus, tänne voi lisätä muutaman tietoa. Lisäksi tätä ei voi editoita eli muokkaa, poistaa ja lisätä uutta dataa tänne, vain lukaista. Mutta pääsovelluksen swagger api-docs:ssa näkee se jos on yrittänyt luoda yhden tekijän lisää ja sieltä voi lukaista, editoita, muokata ja poistaa (kuin simulaatio)
const data = [
  {
    userId: 1,
    id: 1,
    title:
      "Lorem ipsum dolor sit amet",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    userId: 1,
    id: 2,
    title: "Arthur Conan Doyle - The Sign of Four",
    body:
      "“My mind, he said rebels at stagnation. Give me problems, give me work, give me the most abstruse cryptogram or the most intricate analysis, \n and I am in my own proper atmosphere. I can dispense then with artificial stimulants.",
  },
  {
    userId: 1,
    id: 3,
    title: "Willia Shakespeare one of the quotes",
    body:
      "“All the world’s a stage, and all the men and women merely players. They have their exits and their entrances; and one man in his time plays many parts.”",
  },
];

module.exports = data;