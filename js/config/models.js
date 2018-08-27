import Realm from "realm";

const favSchema = {
  name: "Fav",
  primaryKey: "id",
  properties: {
    id: "string",
    favedOn: "date"
  }
};

const realm = new Realm({ schema: [favSchema] });

export const addFav = id => {
  realm.write(() => {
    const favedOn = new Date();
    realm.create("Fav", { id, favedOn });
  });
};

export const getFav = () => {
  const favs = realm.objects("Fav");
  return favs;
};

export const removeFav = id => {
  realm.write(() => {
    const favToRemove = realm.objects("Fav").filtered("id==$0", id);
    realm.delete(favToRemove);
  });
};

export default realm;
