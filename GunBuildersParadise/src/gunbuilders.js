exports.mod = () => {
    
    let source = require("../source.json");
    logger.logInfo("Caching Gunbuilder's Paradise");

    let base = fileIO.parse(fileIO.read(db.user.cache.items));

    for (let file in base.data) {
        let fileData = base.data[file];
        //removing conflicting items
        if(fileData._props.ItemSound === "mod" || fileData._props.ItemSound === "generic"){
            fileData._props.ConflictingItems = [];
        }
        if(fileData._props.ItemSound === "weap_ar" && fileData._props.Slots[0]._name === "mod_gas_block"){
            fileData._props.Slots[0].filters[0].Filter = source.ak.gasblock;
            fileData._props.Slots[6].filters[0].Filter = source.ak.stock;
        }
        if(fileData._props.ItemSound === "generic" && fileData._props.Slots[0]._name === "mod_handguard"){
            fileData._props.Slots[0].filters[0].Filter = source.ak.handguard;
        }
    }
    fileIO.write("user/cache/items.json", base);
	logger.logSuccess("Gun-builders Paradise Acheived!");
}