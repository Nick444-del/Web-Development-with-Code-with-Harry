async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500)
    })
}

async function main() {
    console.log("Loading modules");

    console.log("Doing something else");

    console.log("Loading Data");

    const Data = getData()

    console.log(Data)

    console.log("Processing Data");

    console.log("Done");
}

main()