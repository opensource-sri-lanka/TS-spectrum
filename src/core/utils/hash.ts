let bcryptjs = require("bcryptjs");

/**
 * creates a hash of data
 * @param data - the data to hash
 * @return {Promise<String>}
 */
export function createHash(data: String) {
    return bcryptjs.hash(data, bcryptjs.genSalt())
}


/**
 * creates a hash of data
 * @param data - the data to compare
 * @param hash - the hash
 * @return {Promise<Boolean>}
 */
export function compareHash(data: String, hash: String) {
    return bcryptjs.compare(data, hash)
}
