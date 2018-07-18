export function getArrayXYF(command) {
    let properties = command.replace("PLACE ", "");
    return properties.split(",");
}

export function getNewPositionByPlace(command) {
    let arrXYF = getArrayXYF(command);
    return {
      X: arrXYF[0],
      Y: arrXYF[1],
      F: arrXYF[2],
    };
}

export function getNewPositionByMove(currentPlace) {
    if (currentPlace.F === "NORTH")
    {
        return {
            X: currentPlace.X,
            Y: currentPlace.Y + 1,
            F: currentPlace.F
        };
    }
    else if (currentPlace.F === "SOUTH")
    {
        return {
            X: currentPlace.X,
            Y: currentPlace.Y - 1,
            F: currentPlace.F
        };
    }
    else if (currentPlace.F === "WEST")
    {
        return {
            X: currentPlace.X - 1,
            Y: currentPlace.Y,
            F: currentPlace.F
        };
    }
    else if (currentPlace.F === "EAST")
    {
        return {
            X: currentPlace.X + 1,
            Y: currentPlace.Y,
            F: currentPlace.F
        };
    }
}

export function getNewPositionByLeft(currentPlace) {
    if (currentPlace.F === "NORTH")
    {
        return {
            X: currentPlace.X,
            Y: currentPlace.Y,
            F: "WEST"
        };
    }
    else if (currentPlace.F === "SOUTH")
    {
        return {
            X: currentPlace.X,
            Y: currentPlace.Y - 1,
            F: "EAST"
        };
    }
    else if (currentPlace.F === "WEST")
    {
        return {
            X: currentPlace.X - 1,
            Y: currentPlace.Y,
            F: "SOUTH"
        };
    }
    else if (currentPlace.F === "EAST")
    {
        return {
            X: currentPlace.X + 1,
            Y: currentPlace.Y,
            F: "NORTH"
        };
    }
}

export function getNewPositionByRight(currentPlace) {
    if (currentPlace.F === "NORTH")
    {
        return {
            X: currentPlace.X,
            Y: currentPlace.Y,
            F: "EAST"
        };
    }
    else if (currentPlace.F === "SOUTH")
    {
        return {
            X: currentPlace.X,
            Y: currentPlace.Y - 1,
            F: "WEST"
        };
    }
    else if (currentPlace.F === "WEST")
    {
        return {
            X: currentPlace.X - 1,
            Y: currentPlace.Y,
            F: "NORTH"
        };
    }
    else if (currentPlace.F === "EAST")
    {
        return {
            X: currentPlace.X + 1,
            Y: currentPlace.Y,
            F: "SOUTH"
        };
    }
}