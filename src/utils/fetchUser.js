export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== 'undefiined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    return userInfo;
}