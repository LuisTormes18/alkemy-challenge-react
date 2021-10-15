import Swal from "sweetalert2";
export const isLogged = () => {
    return !!localStorage.getItem("token");
};
export const removeSuperheroFromTeamLocalStorage = (newTeam) => {
    localStorage.setItem("heroTeam", JSON.stringify(newTeam));
};
export const addSuperheroToTeamLocalStorage = (team) => {
    localStorage.setItem("heroTeam", JSON.stringify(team));
};
export const showError = (msg) => {
    Swal.fire("Error", msg, "warning");
};

export const validateIfAHeroCanBeAdded = (heroTeam, newSuperhero) => {
    let exist = false;

    const { alignment } = newSuperhero.biography;
    if (heroTeam.length === 6) {
        showError("The Team of Heroes is Complete");
        return false;
    }

    const alignmentHeroes = heroTeam.filter(
        (superhero) => superhero.biography.alignment === alignment
    );

    if (alignmentHeroes.length === 3) {
        showError(`There can only be three ${alignment} heroes`);
        return false;
    }

    heroTeam.forEach((superhero) => {
        if (superhero.id === newSuperhero.id) {
            showError(`${newSuperhero.name} hero has already been selected  `);
            exist = true;
        }
    });
    if (exist) {
        return false;
    }
    return true;
};
