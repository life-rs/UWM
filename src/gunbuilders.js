exports.mod = () => {

    let source = require("../source.json");
    logger.logInfo("Caching Gunbuilder's Paradise");

    let base = fileIO.readParsed(db.user.cache.items);

    for (let file in base.data) {
        let fileData = base.data[file];
        //removing conflicting items
        if (fileData._type != "Node" && fileData._props.ItemSound === "mod" || fileData._props.ItemSound === "generic") {
            fileData._props.ConflictingItems = [];
        }
        //adding more mods to slots, starting with AK's 
        //Ak gas blocks allowing all ak handguards
        if (source.ak.gasblock.includes(fileData._id)) {
            fileData._props.Slots[0]._props.filters[0].Filter = ["55818a104bdc2db9688b4569"];
        }
        //aks74u variants allowing all ak stocks and receivers
        if (source.ak.aks.includes(fileData._id)) {
            fileData._props.Slots[1]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
            fileData._props.Slots[5]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
        }
        //ak variants allowing all  ak stocks and receivers
        if (source.ak.gun.includes(fileData._id)) {
            fileData._props.Slots[6]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
            fileData._props.Slots[4]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
        }
        //now AR-15's/M4/HK416
        //starting with AR receivers
        if (source.ar.receiver.includes(fileData._id)) {
            fileData._props.Slots[1]._props.filters[0].Filter = ["555ef6e44bdc2de9068b457e"];
            fileData._props.Slots[2]._props.filters[0].Filter = ["55818a104bdc2db9688b4569"];
        }
        //AR variants allowing all ar stocks and receivers
        if (source.ar.gun.includes(fileData._id)) {
            fileData._props.Slots[2]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
            fileData._props.Slots[3]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
        }
        //AR barrels allowing all gas blocks
        if (source.ar.barrel.includes(fileData._id)) {
            fileData._props.Slots[1]._props.filters[0].Filter = source.ar.gasblock;
        }
        //AR pistol grips
        if (source.ar.gun.includes(fileData._id)) {
            fileData._props.Slots[0]._props.filters[0].Filter = ["55818a684bdc2ddd698b456d"];
        }
        //SA58 customization 
        if (source.SA58.gun.includes(fileData._id)) {
            fileData._props.Slots[0]._props.filters[0].Filter = ["55818a684bdc2ddd698b456d"];
            fileData._props.Slots[2]._props.filters[0].Filter = ["55818a104bdc2db9688b4569"];
            fileData._props.Slots[3]._props.filters[0].Filter = ["555ef6e44bdc2de9068b457e"];
            fileData._props.Slots[4]._props.filters[0].Filter = ["55818ac54bdc2d5b648b456e"];
            fileData._props.Slots[5]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
            fileData._props.Slots[6]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
        }
        //AsVal customization
        if (fileData._id === "57c44b372459772d2b39b8ce") {
            fileData._props.Slots[1]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
            fileData._props.Slots[3]._props.filters[0].Filter = ["55818a684bdc2ddd698b456d"];
            fileData._props.Slots[4]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
            fileData._props.Slots[6]._props.filters[0].Filter.push(source.handguards);
        }
        //VSS customization
        if (fileData._id === "57838ad32459774a17445cd2") {
            fileData._props.Slots[3]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
            fileData._props.Slots[4]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
            fileData._props.Slots[6]._props.filters[0].Filter.push(source.handguards);
        }
        //SVD customization
        if (fileData._id === "5c46fbd72e2216398b5a8c9c") {
            fileData._props.Slots[0]._props.filters[0].Filter = ["55818a684bdc2ddd698b456d"];
            fileData._props.Slots[2]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
        }
        //SR25 customization  this is where i have gotten to
        //if ()
    }
    fileIO.write("user/cache/items.json", base);
    logger.logSuccess("Gun-builders Paradise Achieved!");
}