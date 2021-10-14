import Swal from "sweetalert2";
export const isLogged = () => {
    return !!localStorage.getItem("token");
};
export const removeSupeheroFromTeamLocalStorage = (id) => {
    const newTeam = JSON.parse(localStorage.getItem("heroTeam")).filter(
        (superhero) => superhero.id !== id
    );

    localStorage.setItem("heroTeam", JSON.stringify(newTeam));

    return newTeam;
};
export const addSupeheroToTeamLocalStorage = (superhero) => {
    const team = JSON.parse(localStorage.getItem("heroTeam"));
    team.push(superhero);
    localStorage.setItem("heroTeam", JSON.stringify(team));
};
export const showError = (msg) => {
    Swal.fire("Error", msg, "warning");
};

export const validateIfAHeroCanBeAdded = (heroTeam) => {
    if (heroTeam.length === 6) {
        showError("The Team of Heroes is Complete");
        return false;
    }

    const goodHeroes = heroTeam.filter(
        (superhero) => superhero.biography.alignment === "good"
    );
    if (goodHeroes.length === 3) {
        showError("There can only be three good heroes");
        return false;
    }
    const badHeroes = heroTeam.filter(
        (superhero) => superhero.biography.alignment !== "good"
    );
    if (badHeroes.length === 3) {
        showError("There can only be three bad heroes");
        return false;
    }

    return true;
};
