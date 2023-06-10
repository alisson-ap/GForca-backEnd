const getId = (user) => {
    const { id } = user;
    return id;
}

const getUser = (user) =>{
    const data = {
        userId: user,
    }
    return data;
}

module.exports = { getId, getUser};