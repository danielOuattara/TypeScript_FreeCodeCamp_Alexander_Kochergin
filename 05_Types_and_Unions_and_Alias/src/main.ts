let username: string = "Alex";

// -------------------------------------------------------

// Types Union

let pageNumber: string | number = "23";

let errorMessage: string | null = null; // initially

interface UserInterface {
  firstName: string;
  lastName: string;
}

let user: UserInterface | null = null; // initially

//---------------------------------------------------------

// Type Aliases

type ID = string;
type PopularTag = string;

interface UserInterface2 {
  id: ID;
  name: string;
  surname: string;
}

const listOfTag: string[] = ["JS", "CSS", "HTML"]; // Good
const listOfTag2: Array<string> = ["JS", "CSS", "HTML"]; // Good

const listOfTag3: PopularTag[] = ["JS", "CSS", "HTML"]; // Better using alias (type)
const listOfTag4: Array<PopularTag> = ["JS", "CSS", "HTML"]; // Better using alias (type)

//----------------------------------------------------------

// Union + Alias COMBINED

type PopularTag2 = string;
type MightBePopular = PopularTag2 | null;

const dragonsTag: MightBePopular = null; // OK
const dragonsTag2: MightBePopular = "Dragon Stories"; // OK
