let username: string = "Alex";

// -------------------------------------------------------

// Types Union

let pageNumber: string | number = "23";

let errorMessage: string | null = null; // initially

interface userInterface {
  firstName: string;
  lastName: string;
}

let user: userInterface | null = null; // initially

//---------------------------------------------------------

// Type Aliases

type ID = string;
type PopularTag = string;

interface userInterface2 {
  id: ID;
  name: string;
  surname: string;
}

const listOfTag: string[] = ["JS", "CSS", "HTML"]; // Good

const listOfTag2: PopularTag[] = ["JS", "CSS", "HTML"]; // Better using alias (type)

//----------------------------------------------------------

// Union + Alias COMBINED

type PopularTag2 = string;
type MigthBePopular = PopularTag2 | null;

const dragonsTag: MigthBePopular = "Dragon Stories";
