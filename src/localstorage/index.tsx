const initData = {
    darkmode: false,
    history: []
}

// Guardar el objeto en localStorage
export const saveLocalStorage = (data: {}) => {
    localStorage.setItem("pokedex-app", JSON.stringify(data));
}

// Obtener el objeto desde localStorage
export const getLocalStorage = () => {
    const savedData = localStorage.getItem("pokedex-app");
    return savedData ? JSON.parse(savedData) : initData;
}
