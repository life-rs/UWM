exports.mod = () => {
    var mods = {
        "mod_handguard": "55818a104bdc2db9688b4569",
        "mod_barrel": "555ef6e44bdc2de9068b457e",
        "mod_pistol_grip": "55818a684bdc2ddd698b456d",
        "mod_reciever": "55818a304bdc2db5418b457d",
        "mod_stock": "55818a594bdc2db9688b456a",
        "mod_charge": "55818a6f4bdc2db9688b456b",
        "mod_sight_rear": "5448fe7a4bdc2d6f028b456b",
        "mod_muzzle": "5448fe394bdc2d0d028b456c",
        "mod_gas_block": "56ea9461d2720b67698b456f",
        "mod_stock_001": "55818a594bdc2db9688b456a",
        "mod_sight_front": "5448fe7a4bdc2d6f028b456b",
        "mod_tactical": "55818b224bdc2dde698b456f",
        "mod_mount_000": "55818b224bdc2dde698b456f",
        "mod_mount": "55818b224bdc2dde698b456f",
        "mod_muzzle_000": "5448fe394bdc2d0d028b456c",
        "mod_muzzle_001": "5448fe394bdc2d0d028b456c",
        "mod_tactical_000": "55818b224bdc2dde698b456f",
        "mod_mount_001": "55818b224bdc2dde698b456f",
        "mod_mount_002": "55818b224bdc2dde698b456f",
        "mod_stock_000": "55818a594bdc2db9688b456a",
        "mod_tactical_001": "55818b224bdc2dde698b456f",
        "mod_tactical_002": "55818b224bdc2dde698b456f",
        "mod_tactical_003": "55818b224bdc2dde698b456f",
        "mod_pistolgrip": "55818a684bdc2ddd698b456d",
        "mod_stock_axis": "55818a594bdc2db9688b456a",
        "mod_mount_003": "55818b224bdc2dde698b456f",
        "mod_tactical001": "55818b224bdc2dde698b456f",
        "mod_tactical002": "55818b224bdc2dde698b456f",
        "mod_tactical_2": "55818b224bdc2dde698b456f",
        "mod_mount_004": "55818b224bdc2dde698b456f",
        "mod_mount_005": "55818b224bdc2dde698b456f",
        "mod_mount_006": "55818b224bdc2dde698b456f",
        "mod_tactical_004": "55818b224bdc2dde698b456f",
        "mod_foregrip": "55818af64bdc2d5b648b4570"
    };

    var items = fileIO.readParsed(db.user.cache.items);
    for (let index in items.data) {
        item = items.data[index];
        if (!item._props | !item._props.Slots | items._props.Slots.length < 0)
            continue;

        for (let slot of item.Slots) {
            if (!mods[slot._name])
                continue;
            slot._props.filters[0].Filter = [mods[slot._name]];
        }
    }
    fileIO.write(`user/cache/items.json`, items)
}