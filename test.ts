import patch, { Patch } from ".";

let member = "me";
let name = "test"

let mypatch: Patch = {};

mypatch.teams = { $set: { [name]: { members: [] } } };

mypatch = {
  teams: {
    [name]: {
      members: {
        $push: member,
      },
    },
  },
};

mypatch = {
  teams: {
    [teamName]: {
      members: {
        $filter: (member: string) => member !== ,
      },
    },
  },
}