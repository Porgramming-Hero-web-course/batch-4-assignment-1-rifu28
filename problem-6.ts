{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(param1: Profile, param2: Partial<Profile>): Profile {
    const updatedData = { ...param1, ...param2 };
    return updatedData;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(updateProfile(myProfile, { age: 26 }));
}
