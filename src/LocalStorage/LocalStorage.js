class LocalStorageKey {
  USER_INFOR = "USER_INFOR";
}
class BaseStorage {
  constructor(_key) {
    this.key = _key;
  }
  set = (value) => {
    const dataString = JSON.stringify(value);
    localStorage.setItem(this.key, dataString);
  };
  get = () => {
    const dataString = localStorage.getItem(this.key);
    return !dataString ? null : JSON.parse(dataString);
  };
  remove = () => {
    localStorage.removeItem(this.key);
  };
}
class LocalStorageServ extends LocalStorageKey {
  constructor() {
    super();
  }
  userInfor = new BaseStorage(this.USER_INFOR);
}
const localstorageserv = new LocalStorageServ();
export default localstorageserv;
